import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainContentLayout from "../Components/MainContentLayout";
import { Form, CardBody, Card } from "reactstrap";
import { CustomSelect } from "../Components/CustomSelect";
import { CustomInput } from "../Components/CustomInput";
import { AddRemoveEditList } from "../Components/AddRemoveEditList";
import { CustomCheckBox } from "../Components/CustomCheckBox";

const NouvelleTournee = () => {
    const agentItinerant = [
        { value: "Amine Fellahi", label: "Amine Fellahi" },
        { value: "Ait Younes", label: "Ait Younes" }
    ]
    const formik = useFormik({
        initialValues: {
            agent: ""
        },
        validationSchema: Yup.object({
            agent: Yup.mixed()
        }),
        onSubmit: (values) => console.log(values)
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvelle Tournée" pageTitle="Tournées">
                <Form>
                    <Card>
                        <CardBody>
                            <CustomSelect label="Agent" formik={formik} options={agentItinerant} />
                            <CustomInput type="text" label="Date" formik={formik} isNarrow={true} />
                            {formik.values.agent.value ?
                                (
                                    <AddRemoveEditList tableHeaders={["Client", "Action", "Heure", "Observations"]} tableData={[]} />
                                )
                                : null
                            }
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CustomCheckBox label="Envoyer les notifications au agent itinérant." theme="form-check-secondary" />
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary g-auto">Enregistrer</button>
                            </div>
                        </CardBody>
                    </Card>
                </Form>
            </MainContentLayout>
        </React.Fragment>
    );
}
export default NouvelleTournee;