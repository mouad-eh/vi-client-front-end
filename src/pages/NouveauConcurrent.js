import React, { useState } from "react";
import { Card, CardBody, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import MainContentLayout from "../Components/MainContentLayout";
import classnames from "classnames";
import { CustomSelect } from "../Components/CustomSelect";
import { useFormik } from "formik";
import * as Yup from "yup"
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import { AddRemoveEditList } from "../Components/AddRemoveEditList";
import CustomRating from "../Components/CustomRating";
import { CustomCheckBox } from "../Components/CustomCheckBox";

const formOptions = [
    { value: "ND", label: "ND" },
    { value: "Particulier", label: "Particulier" }
]

const categorieOptions = [
    { value: "produits de nettoyage", label: "produits de nettoyage" },
    { value: "Alimentation générale", label: "Alimentation générale" },
]

const typeOptions = [
    { value: "direct", label: "Direct" },
    { value: "indirect", label: "Indirect" }
]

const NouveauConcurrent = () => {
    const [activeTab, setactiveTab] = useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };

    const formik = useFormik({
        initialValues: {
            forme: "",
            categorie: "",
            type: ""
        },
        validationSchema: Yup.object({
            forme: Yup.mixed(),
            categorie: Yup.mixed(),
            type: Yup.mixed()
        }),
        onSubmit: (values) => console.log(values)
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouveau Concurrent" pageTitle="Concurrents">
                <Card>
                    <CardBody>
                        <Nav tabs className="nav-tabs mb-3">
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                                    Infos Concurrent
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                                    Zone(s) de vente
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "3", })} onClick={() => { toggle("3"); }} >
                                    Catégorie(s) Produits
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "4", })} onClick={() => { toggle("4"); }} >
                                    Détails
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <CustomSelect label="Forme" formik={formik} options={formOptions} />
                                <CustomSelect label="Catégorie" formik={formik} options={categorieOptions} />
                                <CustomInput type="text" label="Code Concurrent" formik={formik} />
                                <CustomInput type="text" label="Dénomination" formik={formik} />
                                <CustomInput type="text" label="Dénomination (En Arabe)" formik={formik} isRtl={true} />
                                <CustomInput type="text" label="E-mail" formik={formik} />
                                <CustomInput type="text" label="Téléphone 1" formik={formik} isNarrow={true} />
                                <CustomInput type="text" label="Téléphone 2" formik={formik} isNarrow={true} />
                                <CustomTextArea label="Adresse" formik={formik} />
                                <CustomInput type="text" label="Latitude" formik={formik} isNarrow={true} />
                                <CustomInput type="text" label="Longitude" formik={formik} isNarrow={true} />
                            </TabPane>
                            <TabPane tabId="2">
                                <AddRemoveEditList tableHeaders={["Zone de vente", "De", "à"]} tableData={[]} />
                            </TabPane>
                            <TabPane tabId="3">
                                <AddRemoveEditList tableHeaders={["Catégorie", "De", "à"]} tableData={[]} />
                            </TabPane>
                            <TabPane tabId="4">
                                <CustomSelect label="Type" formik={formik} options={typeOptions} />
                                <CustomRating label="Classement" />
                                <CustomTextArea label="Observation" formik={formik} />
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Row className="mb-3">
                            <CustomCheckBox label="Ajouter un nouveau concurrent aprés l'enregistrementent." theme="form-check-secondary" />
                            <CustomCheckBox label="Informations incomplète !" theme="form-check-secondary" />
                        </Row>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary g-auto">Enregistrer</button>
                        </div>
                    </CardBody>
                </Card>
            </MainContentLayout>
        </React.Fragment>
    );
}
export default NouveauConcurrent;