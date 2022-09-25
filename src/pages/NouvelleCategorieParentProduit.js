import React from "react";
import { Card, CardBody, Form } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import MainContentLayout from "../Components/MainContentLayout";
import { initializeFormik } from "../helpers/formik_helper";

const NouvelleCategorieParentProduit = () => {
    // const SUPPORTED_FORMATS = [
    //     "image/jpg",
    //     "image/jpeg",
    //     "image/gif",
    //     "image/png"
    // ];
    const labels = [
        { name: "Désignation", inputType: "text", isRequired: true },
        { name: "Désignation (en arabe)", inputType: "text" },
        { name: "Observation", inputType: "text" },
        { name: "Image", inputType: "image" }
    ]
    const { initialValues: initialValues, validationSchema: validationSchema } = initializeFormik(labels)
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvelle Catégorie Parent" pageTitle="Catégories Produit">
                <Form className="needs-validation" onSubmit={formik.onSubmit} noValidate>
                    <Card>
                        <CardBody className="card-body">
                            <CustomInput type="text" label={labels[0].name} formik={formik} />
                            <CustomInput type="text" label={labels[1].name} formik={formik} isRtl={true} />
                            <CustomTextArea label={labels[2].name} formik={formik} />
                            <CustomInput type="file" label={labels[3].name} formik={formik} />
                        </CardBody >
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

export default NouvelleCategorieParentProduit;