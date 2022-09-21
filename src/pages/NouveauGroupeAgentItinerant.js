import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Card, CardBody, Form } from "reactstrap";
import { CustomInput } from "../Components/CustomInput";
import { CustomSelect } from "../Components/CustomSelect";
import { CustomTextArea } from "../Components/CustomTextArea";
import MainContentLayout from "../Components/MainContentLayout";

const NouveauGroupeAgentItinerant = () => {
    const agentOptions = [
        { value: "Amine Fellahi", label: "Amine Fellahi" },
        { value: "Ait Younes", label: "Ait Younes" }
    ]
    const formik = useFormik({
        initialValues: {
            desingation: "",
            agentItinerant: "",
            observation: ""
        },
        validationSchema: Yup.object({
            desingation: Yup.mixed(),
            agentItinerant: Yup.mixed(),
            observation: Yup.mixed()
        }),
        onSubmit: (values) => console.log(values)
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvelle Catégorie Parent" pageTitle="Catégories Produit">
                <Form className="needs-validation" noValidate>
                    <Card>
                        <CardBody className="card-body">

                            <CustomInput type="text" label="Désignation" formik={formik} />
                            <CustomSelect label="agentItinerant" formik={formik} options={agentOptions} isMulti={true} />
                            <CustomTextArea label="Observation" formik={formik} />


                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
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
export default NouveauGroupeAgentItinerant;