import React, { useState, useRef } from "react";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { Container, Col, Row, Card, CardBody, Label, Input, Form, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import { useFormik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import classnames from "classnames";
import { CustomInput } from "../Components/CustomInput"
import { CustomSelect } from "../Components/CustomSelect"
import { CustomTextArea } from "../Components/CustomTextArea"

import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

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

    const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
    const ZOOM_LEVEL = 12;
    const mapRef = useRef();
    const _created = (e)=>{
        console.log(e);
    }
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
                                        <CustomInput type="text" label="Code" formik={formik} />
                                        <CustomInput type="text" label="Désignation" formik={formik} />
                                        <CustomSelect label="Etendue" formik={formik} options={etendueOptions} />
                                        {formik.values.etendue.value ?
                                            (
                                                formik.values.etendue.value === "wilaya" ?
                                                    <CustomSelect label="Wilaya(s)" formik={formik} options={wilayaOptions} isMulti={true} />
                                                    : <CustomSelect label="Commune(s)" formik={formik} options={communeOptions} isMulti={true} />
                                            )
                                            : null
                                        }
                                        <CustomSelect label="Type" formik={formik} options={typeOptions} />
                                        {formik.values.type.value ?
                                            (
                                                formik.values.type.value === "cercle" ?
                                                    (
                                                        <React.Fragment>
                                                            <CustomInput type="text" label="X" formik={formik} isNarrow={true} />
                                                            <CustomInput type="text" label="Y" formik={formik} isNarrow={true} />
                                                            <CustomInput type="text" label="Rayon (km)" formik={formik} isNarrow={true} />
                                                        </React.Fragment>
                                                    )
                                                    :
                                                    (
                                                        <CustomTextArea label="Lines" formik={formik} isNarrow={true} />
                                                    )
                                            )
                                            : null
                                        }
                                        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                                            <FeatureGroup>
                                                <EditControl
                                                    position="topright"
                                                    onCreated={_created}
                                                    draw={
                                                        {
                                                            rectangle: false,
                                                            circle: false,
                                                            circlemarker: false,
                                                            marker: false,
                                                            polyline: false,
                                                        }
                                                    }
                                                />
                                            </FeatureGroup>
                                            <TileLayer
                                                url='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                attribution="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                        </MapContainer>
                                        <CustomTextArea label="Observation" formik={formik} />
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