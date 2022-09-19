import React, { useState } from "react";
import { Container, Card, CardBody, Form, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";

import BreadCrumb from "../Components/Common/BreadCrumb";
import { CustomInput } from "../Components/CustomInput"
import { CustomSelect } from "../Components/CustomSelect"
import { CustomTextArea } from "../Components/CustomTextArea"
import { AddRemoveEditList } from "../Components/AddRemoveEditList"

const yesNoOptions = [
    { value: "oui", label: "Oui" },
    { value: "non", label: "Non" }
]

const wilayaOptions = [
    { value: 1, label: 'Adrar' },
    { value: 2, label: 'Chlef' },
];

const NouveauAgentItinerant = () => {
    const [activeTab, setactiveTab] = useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };
    const formik = useFormik({
        initialValues: {
            peutvoirlestockglobal : "",
            pourvoirlesoldeimpayetotalclients: "",
            wilaya: ""
        },
        validationSchema: {
            peutvoirlestockglobal: Yup.mixed(),
            pourvoirlesoldeimpayetotalclients: Yup.mixed(),
            wilaya: Yup.mixed()
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Nouveau Agent Itinérant" pageTitle="Agent Itinérant" />
                    <Form className="needs-validation" onSubmit={formik.onSubmit} noValidate>
                        <Card>
                            <CardBody className="card-body">
                                <Nav tabs className="nav-tabs mb-3">
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                                            Infos Agent Itinérant
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                                            Données d'authentification
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "3", })} onClick={() => { toggle("3"); }} >
                                            Client(s) à visiter
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "4", })} onClick={() => { toggle("4"); }} >
                                            Zone(s) de vente
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "5", })} onClick={() => { toggle("5"); }} >
                                            Droits d'accès d'application mobile
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1" id="infos">
                                        <CustomInput type="text" label="Nom/Prénom" formik={formik} />
                                        <CustomInput type="text" label="Nom/Prénom (En Arabe)" formik={formik} isRtl={true} />
                                        <CustomInput type="text" label="Secteur Activité" formik={formik} />
                                        <CustomInput type="text" label="Mail" formik={formik} />
                                        <CustomSelect label="PeutvoirlestockGlobal" formik={formik} options={yesNoOptions} />
                                        <CustomSelect label="Pourvoirlesoldeimpayétotalclients" formik={formik} options={yesNoOptions} />
                                        <CustomSelect label="Wilaya" formik={formik} options={wilayaOptions} />
                                        <CustomInput type="text" label="Latitude" formik={formik} isNarrow={true} />
                                        <CustomInput type="text" label="Longitude" formik={formik} isNarrow={true}/>
                                        <CustomTextArea label="Adresse" formik={formik}/>
                                    </TabPane>
                                    <TabPane tabId="2" id="donnees">
                                        <CustomInput type="text" label="Télephone" formik={formik}/>
                                        <CustomInput type="text" label="Mot de passe" formik={formik}/>
                                        <CustomInput type="text" label="Confirmez" formik={formik}/>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Form>

                </Container>
            </div>
        </React.Fragment>
    );
}

export default NouveauAgentItinerant;