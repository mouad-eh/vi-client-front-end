import React from "react";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { Container, Col, Row, Card, CardBody, Label, Input, Form, FormFeedback } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";

const NouvelleCategorieParentProduit = () => {
    // const SUPPORTED_FORMATS = [
    //     "image/jpg",
    //     "image/jpeg",
    //     "image/gif",
    //     "image/png"
    // ];
    const formik = useFormik({
        initialValues: {
            designation: "",
            designationEnArabe: "",
            observation: "",
            image: ""
        },
        validationSchema: Yup.object({
            designation: Yup.string().required(),
            designationEnArabe: Yup.string(),
            observation: Yup.string(),
            // image: Yup.mixed().test(
            //     "fileFormat",
            //     "Unsupported Format",
            //     value => value && SUPPORTED_FORMATS.includes(value.type)
            // ),
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
                    <BreadCrumb title="Nouvelle Catégorie Parent" pageTitle="Catégories Produit" />
                    <Card>
                        <CardBody className="card-body">
                            <Form className="needs-validation" onSubmit={formik.onSubmit} noValidate>
                                <CustomInput type="text" label="Désignation" formik={formik} />
                                <CustomInput type="text" label="Désignation (en arabe)" formik={formik} isRtl={true} />
                                <CustomTextArea label="Observation" formik={formik} />
                                <CustomInput type="file" label="image" formik={formik}/>
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

export default NouvelleCategorieParentProduit;