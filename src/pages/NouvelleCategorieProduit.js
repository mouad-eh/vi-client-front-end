import React from "react";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { Container, Col, Row, Card, CardBody, Label, Input, Form, FormFeedback } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"

const NouvelleCategorieProduit = () => {
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
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Nouvelle Catégorie" pageTitle="Catégories Produit" />
                    <Card>
                        <CardBody className="card-body">
                            <Form className="needs-validation" onSubmit={formik.onSubmit} noValidate>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="categorieParent" className="form-label">Catégorie Parent</Label>                                        </Col>
                                    <Col lg={9} >
                                        <select className="form-select" aria-label="Default select example"
                                            {...formik.getFieldProps("categorieParent")}
                                        // invalid={formik.touched.categorieParent && formik.errors.categorieParent ? (true) : false}
                                        >
                                            <option selected disabled value="">sélectionner</option>
                                            <option value="1">option1</option>
                                            <option value="2">option2</option>
                                            <option value="3">option3</option>
                                        </select>
                                    </Col>
                                </Row>
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

export default NouvelleCategorieProduit;