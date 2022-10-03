import React from "react";
import { Form, Card, CardBody } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainContentLayout from "../Components/MainContentLayout";
import { CustomInput } from "../Components/CustomInput";
import { CustomSelect } from "../Components/CustomSelect";
import { CustomTextArea } from "../Components/CustomTextArea";
import { initializeFormik } from "../helpers/formik_helper";


const NouveauProspect = () => {
    // form juridique api is missing
    const formeOptions = [
        { label: "ND", value: "ND" },
        { label: "Particulier", value: "Particulier" }
    ]
    const categorieOptions = [
        { label: "Activité service", value: "Activité service" },
        { label: "Administration publique", value: "Administration publique" }
    ]
    const labels = [
        { name: "Forme juridique", inputType: "text" },
        { name: "Catégorie", inputType: "text", isRequired: true },
        { name: "Dénomination", inputType: "text", isRequired: true },
        { name: "Code", inputType: "text" },
        { name: "Téléphone 1", inputType: "text" },
        { name: "Téléphone 2", inputType: "text" },
        { name: "Email", inputType: "text" },
        { name: "Latitude", inputType: "text", isRequired: true },
        { name: "Longitude", inputType: "text", isRequired: true },
        { name: "Adresse", inputType: "text" },
        { name: "Observations", inputType: "text" }
    ]
    const { initialValues: initialValues, validationSchema: validationSchema } = initializeFormik(labels)
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit: (values) => alert(JSON.stringify(values, null, 2))
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouveau Prospect" pageTitle="Prospects" >
                <Form className="needs-validation" onSubmit={formik.handleSubmit} noValidate>
                    <Card>
                        <CardBody>
                            <CustomSelect label={labels[0].name} formik={formik} options={formeOptions} />
                            <CustomSelect label={labels[1].name} formik={formik} options={categorieOptions} />
                            <CustomInput type="text" label={labels[2].name} formik={formik} />
                            <CustomInput type="text" label={labels[3].name} formik={formik} />
                            <CustomInput type="text" label={labels[4].name} formik={formik} isNarrow={true} />
                            <CustomInput type="text" label={labels[5].name} formik={formik} isNarrow={true} />
                            <CustomInput type="text" label={labels[6].name} formik={formik} />
                            <CustomInput type="text" label={labels[7].name} formik={formik} isNarrow={true} />
                            <CustomInput type="text" label={labels[8].name} formik={formik} isNarrow={true} />
                            <CustomTextArea label={labels[9].name} formik={formik} />
                            <CustomTextArea label={labels[10].name} formik={formik} />
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