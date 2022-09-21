import React from "react";
import { Card, CardBody, Form } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import MainContentLayout from "../Components/MainContentLayout";

const NouvelleCategorieClient = () => {
    const formik = useFormik({
        initialValues: {
            designation: "",
            observation: "",
        },
        validationSchema: Yup.object({
            designation: Yup.string().required(),
            observation: Yup.string()
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    }
    )
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvelle Catégorie" pageTitle="Catégories Client">
                <Form className="needs-validation" onSubmit={formik.onSubmit} noValidate>
                    <Card>
                        <CardBody className="card-body">

                            <CustomInput type="text" label="Désignation" formik={formik} />
                            <CustomTextArea label="Observation" formik={formik} />

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

export default NouvelleCategorieClient;