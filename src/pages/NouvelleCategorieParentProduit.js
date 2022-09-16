import React from "react";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { Container, Col, Row, Card, CardBody, Label, Input, Form, FormFeedback } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"

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
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designation" className="form-label">Désignation</Label>                                        </Col>
                                    <Col lg={9} >
                                        <Input type="text" className="form-control" id="designation"
                                            {...formik.getFieldProps('designation')}
                                            invalid={formik.touched.designation && formik.errors.designation ? (true) : false}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designationEnArabe" className="form-label">Désignation &#40;En Arabe&#41;</Label>
                                    </Col>
                                    <Col lg={9} >
                                        <Input type="text" className="form-control" dir="rtl" id="designationEnArabe"
                                            {...formik.getFieldProps('designationEnArabe')} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="observation" className="form-label">Observation</Label>
                                    </Col>
                                    <Col lg={9} >
                                        <textarea className="form-control" id="Observation" rows="5"
                                            {...formik.getFieldProps('observation')}>
                                        </textarea>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="image" className="form-label">Image</Label>
                                    </Col>
                                    <Col lg={9} >
                                        <Input type="file" className="form-control" id="image"
                                            {...formik.getFieldProps("image")}
                                        />
                                    </Col>
                                </Row>
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