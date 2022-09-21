import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Card, CardBody } from "reactstrap";
import { CustomSelect } from "../Components/CustomSelect";
import { CustomInput } from "../Components/CustomInput";
import MainContentLayout from "../Components/MainContentLayout";
import { AddRemoveEditList } from "../Components/AddRemoveEditList";


const NouvelObjectif = () => {
    const agentItinerant = [
        { value: "Amine Fellahi", label: "Amine Fellahi" },
        { value: "Ait Younes", label: "Ait Younes" }
    ]
    const typeObjectif = [
        { value: "vente", label: "Vente" },
        { value: "visite", label: "Visite" },
        { value: "recouvrement", label: "Recouvrement" }
    ]
    const formik = useFormik({
        initialValues: {
            agent: "",
            type: ""
        },
        validationSchema: Yup.object({
            agent: Yup.mixed(),
            type: Yup.mixed()
        }),
        onSubmit: (values) => console.log(values)
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvel Objectif" pageTitle="Politique commerciale">
                <Form>
                    <Card>
                        <CardBody>
                            <CustomSelect label="Agent" formik={formik} options={agentItinerant} />
                            <CustomInput type="text" label="Du" formik={formik} isNarrow={true} />
                            <CustomInput type="text" label="au" formik={formik} isNarrow={true} />
                            <CustomSelect label="Type" formik={formik} options={typeObjectif} />
                            {formik.values.type.value ?
                                (
                                    formik.values.type.value === "vente" ?
                                        (
                                            <AddRemoveEditList
                                                tableHeaders={["Type", "Zone / Catégorie Client", "Produit vente", "Quantité", "Précomande	C.A ciblé (D.A) ",
                                                    "Précomande	Quantité", "Vente Directe	C.A ciblé (D.A)", "Vente Directe"]}
                                                tableData={[]}
                                            />
                                        )
                                        :
                                        (formik.values.type.value === "visite" ?
                                            (
                                                <AddRemoveEditList
                                                    tableHeaders={["Type", "Zone / Catégorie Client", "Nombres", "Observations"]}
                                                    tableData={[]}
                                                />
                                            )
                                            :
                                            (
                                                <AddRemoveEditList
                                                    tableHeaders={["Type", "Zone / Catégorie Client", "Montant (DA)", "Observations"]}
                                                    tableData={[]}
                                                />
                                            )
                                        )
                                )
                                : null
                            }
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

export default NouvelObjectif;