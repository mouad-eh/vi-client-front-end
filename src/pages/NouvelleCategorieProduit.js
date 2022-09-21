import React from "react";
import { Card, CardBody, Form } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import { CustomSelect } from "../Components/CustomSelect";
import MainContentLayout from "../Components/MainContentLayout";


const NouvelleCategorieProduit = () => {
    const categorieParentOptions = [
        { value: "option1", label: "option1" }, { value: "option2", label: "option2" }
    ]
    const formik = useFormik({
        initialValues: {
            categorieParent: "",
            designation: "",
            designationEnArabe: "",
            observation: "",
            image: ""
        },
        validationSchema: Yup.object({
            categorieParent: Yup.mixed(),
            designation: Yup.string().required(),
            designationEnArabe: Yup.string(),
            observation: Yup.string(),
            image: Yup.mixed()
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    }
    )
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvelle Catégorie" pageTitle="Catégories Produit">
                <Form className="needs-validation" onSubmit={formik.onSubmit} noValidate>
                    <Card>
                        <CardBody>
                            <CustomSelect options={categorieParentOptions} label="Catégorie Parent" formik={formik} />
                            <CustomInput type="text" label="Désignation" formik={formik} />
                            <CustomInput type="text" label="Désignation (en arabe)" formik={formik} isRtl={true} />
                            <CustomTextArea label="Observation" formik={formik} />
                            <CustomInput type="file" label="Image" formik={formik} />
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
    )
}

export default NouvelleCategorieProduit;