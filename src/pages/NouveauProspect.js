import React from "react";
import { Form, Card, CardBody } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainContentLayout from "../Components/MainContentLayout";
import { CustomInput } from "../Components/CustomInput";
import { CustomSelect } from "../Components/CustomSelect";
import { CustomTextArea } from "../Components/CustomTextArea";


const NouveauProspect = () => {
    const formeOptions = [
        { label: "ND", value: "ND" },
        { label: "Particulier", value: "Particulier" }
    ]
    const categorieOptions = [
        { label: "Activité service", value: "Activité service" },
        { label: "Administration publique", value: "Administration publique" }
    ]
    const formik = useFormik({
        initialValues: {
            forme: "",
            categorie: ""
        },
        validationSchema: Yup.object({
            forme: Yup.mixed(),
            categorie: Yup.mixed()
        }),
        onSubmit: (values) => console.log(values)
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouveau Prospect" pageTitle="Prospects" >
                <Form>
                    <Card>
                        <CardBody>
                            <CustomSelect label="Forme" formik={formik} options={formeOptions} />
                            <CustomSelect label="Catégorie" formik={formik} options={categorieOptions} />
                            <CustomInput type="text" label="Dénomination" formik={formik} />
                            <CustomInput type="text" label="Code" formik={formik} />
                            <CustomInput type="text" label="Téléphone 1" formik={formik} isNarrow={true} />
                            <CustomInput type="text" label="Téléphone 2" formik={formik} isNarrow={true} />
                            <CustomInput type="text" label="Email" formik={formik} />
                            <CustomInput type="text" label="Latitude" formik={formik} isNarrow={true} />
                            <CustomInput type="text" label="Longitude" formik={formik} isNarrow={true} />
                            <CustomTextArea label="Adresse" formik={formik} />
                            <CustomTextArea label="Observations" formik={formik} />
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
export default NouveauProspect;