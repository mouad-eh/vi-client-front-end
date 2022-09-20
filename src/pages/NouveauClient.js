import React, { useState } from "react"
import { Container, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import BreadCrumb from "../Components/Common/BreadCrumb";
import classnames from "classnames";
import { CustomSelect } from "../Components/CustomSelect";
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";

import { useFormik } from "formik";
import * as Yup from "yup";
import { AddRemoveEditList } from "../Components/AddRemoveEditList";
import CustomRating from "../Components/CustomRating";

const yesNoOptions = [
    { label: "Oui", value: "oui" },
    { label: "Non", value: "non" }
]

const FormOptions = [
    { value: "ND", label: "ND" },
    { value: "Particular", label: "Particular" }
]

const categorieOptions = [
    { value: "produits de nettoyage", label: "produits de nettoyage" },
    { value: "Alimentation générale", label: "Alimentation générale" }
]

const agentHeaders = ["Agent itinérant", "De", "à"]
const agentData = [
    ["Amine Fellahi", "20/09/2022", "20/09/2022"],
    ["Ahmed Mahmoud", "20/09/2022", "20/09/2022"]
]
const typeOptions = [
    { value: "Direct", label: "Direct" },
    { value: "Indirect", label: "Indirect" }
]
const zoneOptions = [
    { value: "CENTRE", label: "CENTRE" },
    { value: "OUEST", label: "OUEST" }
]

const NouveauClient = () => {
    const [activeTab, setactiveTab] = useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };

    const formik = useFormik({
        initialValues: {
            affiche: "",
            forme: "",
            categorie: "",
            type: "",
            zone: ""
        },
        validationSchema: Yup.object({
            affiche: Yup.mixed(),
            forme: Yup.mixed(),
            categorie: Yup.mixed(),
            type: Yup.mixed(),
            zone: Yup.mixed()

        }),
        onSubmit: (values) => console.log(values)
    })
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Nouveau Client" pageTitle="Clients" />
                    <Card>
                        <CardBody className="card-body">
                            <Nav tabs className="nav-tabs mb-3">
                                <NavItem>
                                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                                        Infos Client
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                                        Agent(s) itinérant
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "3", })} onClick={() => { toggle("3"); }} >
                                        Détails
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <CustomSelect label="Affiche" formik={formik} options={yesNoOptions} />
                                    <CustomSelect label="Forme" formik={formik} options={FormOptions} />
                                    <CustomSelect label="Catégorie" formik={formik} options={categorieOptions} />
                                    <CustomInput type="text" label="Code Client" formik={formik} />
                                    <CustomInput type="text" label="Dénomination" formik={formik} />
                                    <CustomInput type="text" label="Dénomination (En Arabe)" formik={formik} isRtl={true} />
                                    <CustomInput type="text" label="E-mail" formik={formik} />
                                    <CustomInput type="text" label="Téléphone 1" formik={formik} isNarrow={true} />
                                    <CustomInput type="text" label="Télephone 2" formik={formik} isNarrow={true} />
                                    <CustomTextArea label="Adresse" formik={formik} />
                                    <CustomInput type="text" label="Latitude" formik={formik} isNarrow={true} />
                                    <CustomInput type="text" label="Longitude" formik={formik} isNarrow={true} />
                                </TabPane>
                                <TabPane tabId="2">
                                    <AddRemoveEditList tableHeaders={agentHeaders} tableData={agentData} />
                                </TabPane>
                                <TabPane tabId="3">
                                    <CustomSelect label="Type" formik={formik} options={typeOptions} />
                                    <CustomSelect label="Zone" formik={formik} options={zoneOptions} />
                                    <CustomRating label="Classement" />
                                    <CustomTextArea label="Observation" formik={formik} />
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary g-auto">Enregistrer</button>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    );
}
export default NouveauClient;