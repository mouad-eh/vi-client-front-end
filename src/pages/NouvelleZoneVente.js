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
const wilayaOptions = [
    { value: 1, label: 'Adrar' },
    { value: 2, label: 'Chlef' },
];

const communeOptions = [
    { value: 1, label: 'Chettia' },
    { value: 2, label: 'Boukadir' },
];

const typeOptions = [
    { value: 'cercle', label: 'Cercle' },
    { value: 'polygone', label: 'Polygone' },
]
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

    // const [etendue, setEtendue] = useState({})
    // const handleEtendueSelect = (value) => {
    //     setEtendue(value);
    //     console.log(value);
    // }
    const formik = useFormik({
        initialValues: {
            code: "",
            designation: "",
            etendue: { value: "", label: "" },
            wilaya: { value: "", label: "" },
            commune: { value: "", label: "" },
            type: { value: "", label: "" },
            observation: ""
        },
        validationSchema: Yup.object({
            code: Yup.mixed(),
            etendue: Yup.mixed(),
            wilaya: Yup.mixed(),
            commune: Yup.mixed(),
            designation: Yup.mixed(),
            designation: Yup.mixed(),
            observation: Yup.mixed()
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            console.log(JSON.stringify(values, null, 2))
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
                                                    // value={etendue}
                                                    value={formik.values.etendue}
                                                    // onChange={value => formik.setFieldValue("etendue", value)}
                                                    // onChange={handleEtendueSelect}
                                                    onChange={selectedOption => {
                                                        formik.setFieldValue("etendue", selectedOption);
                                                        console.log(formik.values.etendue);
                                                    }}
                                                    options={etendueOptions}
                                                />
                                            </Col>
                                        </Row>
                                        {formik.values.etendue.value ?
                                            (
                                                formik.values.etendue.value === "wilaya" ?
                                                    (
                                                        <Row className="mb-3">
                                                            <Col lg={3} >
                                                                <Label htmlFor="wilaya" className="form-label text-muted">Wilaya(s)</Label>
                                                            </Col>
                                                            <Col lg={4} md={6} >
                                                                <Select
                                                                    id="wilaya"
                                                                    name="wilaya"
                                                                    value={formik.values.wilaya}
                                                                    onChange={selectedOption => {
                                                                        formik.setFieldValue("wilaya", selectedOption);
                                                                    }}
                                                                    options={wilayaOptions}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    )
                                                    :
                                                    (
                                                        <Row className="mb-3">
                                                            <Col lg={3} >
                                                                <Label htmlFor="commune" className="form-label text-muted">Communes(s)</Label>
                                                            </Col>
                                                            <Col lg={4} md={6} >
                                                                <Select // this one is a 2 level list
                                                                    id="commune"
                                                                    name="commune"
                                                                    value={formik.values.commune}
                                                                    onChange={selectedOption => {
                                                                        formik.setFieldValue("commune", selectedOption);
                                                                    }}
                                                                    options={communeOptions}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    )
                                            )
                                            : null
                                        }
                                        <Row className="mb-3">
                                            <Col lg={3} >
                                                <Label htmlFor="type" className="form-label text-muted">Type</Label>
                                            </Col>
                                            <Col lg={4} md={6} >
                                                <Select
                                                    id="type"
                                                    name="type"
                                                    value={formik.values.type}
                                                    onChange={selectedOption => {
                                                        formik.setFieldValue("type", selectedOption);
                                                    }}
                                                    options={typeOptions}
                                                />
                                            </Col>
                                        </Row>
                                        {formik.values.type.value ?
                                            (
                                                formik.values.type.value === "cercle" ?
                                                    (
                                                        <>
                                                            <Row className="mb-3">
                                                                <Col lg={3} >
                                                                    <Label htmlFor="code" className="form-label">X</Label>                                        </Col>
                                                                <Col lg={9} >
                                                                    <Input type="text" className="form-control" id="code"
                                                                        {...formik.getFieldProps("code")}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-3">
                                                                <Col lg={3} >
                                                                    <Label htmlFor="code" className="form-label">Y</Label>                                        </Col>
                                                                <Col lg={9} >
                                                                    <Input type="text" className="form-control" id="code"
                                                                        {...formik.getFieldProps("code")}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-3">
                                                                <Col lg={3} >
                                                                    <Label htmlFor="code" className="form-label">Rayon (km)</Label>                                        </Col>
                                                                <Col lg={9} >
                                                                    <Input type="text" className="form-control" id="code"
                                                                        {...formik.getFieldProps("code")}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <Row className="mb-3">
                                                            <Col lg={3} >
                                                                <Label htmlFor="observation" className="form-label">Lignes</Label>
                                                            </Col>
                                                            <Col lg={9} >
                                                                <textarea className="form-control" id="Observation" rows="5" {...formik.getFieldProps('observation')}></textarea>
                                                            </Col>
                                                        </Row>
                                                    )
                                            )
                                            : null
                                        }
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