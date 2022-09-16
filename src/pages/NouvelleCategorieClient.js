import React from "react";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { Container, Col, Row, Card, CardBody, Label, Input, Form } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"

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
                                        <Label htmlFor="observation" className="form-label">Observation</Label>
                                    </Col>
                                    <Col lg={9} >
                                        <textarea className="form-control" id="Observation" rows="5" {...formik.getFieldProps('observation')}></textarea>
                                        {formik.touched.observation && formik.errors.observation ? (
                                            <div>{formik.errors.observation}</div>
                                        ) : null}
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

export default NouvelleCategorieClient;