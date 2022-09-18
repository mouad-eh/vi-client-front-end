import React from "react";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { Container, Card, CardBody, Form } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";

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
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Nouvelle Catégorie" pageTitle="Catégories Client" />
                    <Card>
                        <CardBody className="card-body">
                            <Form className="needs-validation" onSubmit={formik.onSubmit} noValidate>
                                <CustomInput type="text" label="Désignation" formik={formik} />
                                <CustomTextArea label="Observation" formik={formik} />
                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary g-auto">Enregistrer</button>
                                </div>
                            </Form>
                        </CardBody >
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default NouvelleCategorieClient;