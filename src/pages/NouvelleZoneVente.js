import React, { useState } from "react";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { Container, Col, Row, Card, CardBody, Label, Input, Form, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import { useFormik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import classnames from "classnames";

const etendueOptions = [
    { value: 'wilaya', label: 'Wilaya(s)' },
    { value: 'commune', label: 'Commune(s)' },
];


const NouvelleZoneVente = () => {
    const [activeTab, setactiveTab] = useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };

    // const [selectedSingle, setSelectedSingle] = useState(null);
    // function handleSelectSingle(selectedSingle) {
    //     setSelectedSingle(selectedSingle);
    // }

    const formik = useFormik({
        initialValues: {
            code: "",
            designation: "",
            etendue: "",
            observation: ""
        },
        validationSchema: Yup.object({
            code: Yup.mixed(),
            designation: Yup.mixed(),
            etendue: Yup.mixed(),
            observation: Yup.mixed()
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Nouvelle Zone" pageTitle="Zone de Vente" />
                    <Card>
                        <CardBody className="card-body">
                            <Form className="needs-validation" onSubmit={formik.onSubmit} noValidate>
                                <Nav tabs className="nav-tabs mb-3">
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                                            Infos
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                                            Client(s)
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab} className="text-muted">
                                    <TabPane tabId="1" id="infos">
                                        <Row className="mb-3">
                                            <Col lg={3} >
                                                <Label htmlFor="code" className="form-label">Code</Label>                                        </Col>
                                            <Col lg={9} >
                                                <Input type="text" className="form-control" id="code"
                                                    {...formik.getFieldProps("code")}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col lg={3} >
                                                <Label htmlFor="designation" className="form-label">Désignation</Label>                                        </Col>
                                            <Col lg={9} >
                                                <Input type="text" className="form-control" id="designation"
                                                    {...formik.getFieldProps("designation")}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col lg={3} >
                                                <Label htmlFor="etendue" className="form-label text-muted">Etendue</Label>
                                            </Col>
                                            <Col lg={4} md={6} >
                                                <Select
                                                    id="etendue"
                                                    name="etendue"
                                                    value={formik.values.etendue}
                                                    onChange={value => formik.setFieldValue("etendue", value)}
                                                    // onBlur={()=> formik.setFieldTouched("etendue",true)}
                                                    // // touched={formik.touched.etendue}
                                                    options={etendueOptions}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col lg={3} >
                                                <Label htmlFor="observation" className="form-label">Observation</Label>
                                            </Col>
                                            <Col lg={9} >
                                                <textarea className="form-control" id="Observation" rows="5" {...formik.getFieldProps('observation')}></textarea>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2" id="client">
                                    </TabPane>
                                </TabContent>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary g-auto">Enregistrer</button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default NouvelleZoneVente;