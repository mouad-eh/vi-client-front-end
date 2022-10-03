import React, { useState } from "react";
import { Card, CardBody, Form, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomInput } from "../Components/CustomInput"
import { CustomSelect } from "../Components/CustomSelect"
import { CustomTextArea } from "../Components/CustomTextArea"
import { AddRemoveEditList } from "../Components/AddRemoveEditList"
import MainContentLayout from "../Components/MainContentLayout";
import { initializeFormik } from "../helpers/formik_helper";
import { UUID_USER, UUID_CLTSIRIUS, NOUVELLE_ZONE_VENTE } from "../common/data/server-data";

const NouvelleZoneVente = () => {
    const etendueOptions = [
        { value: '1', label: 'Wilaya(s)' },
        { value: '2', label: 'Commune(s)' },
    ];
    // const wilayaOptions = [
    //     { value: 1, label: 'Adrar' },
    //     { value: 2, label: 'Chlef' },
    // ];

    // const communeOptions = [
    //     { value: 1, label: 'Chettia' },
    //     { value: 2, label: 'Boukadir' },
    // ];

    // const typeOptions = [
    //     { value: 'cercle', label: 'Cercle' },
    //     { value: 'polygone', label: 'Polygone' },
    // ]
    const tableHeaders = ["Client", "du", "à"]
    const tableData = [
        ["Mary Cousar", "06 Apr,2021", "06 Apr,2021"],
        ["Jeff Taylor", "15 Feb,2021", "15 Feb,2021"]
    ]

    const [activeTab, setactiveTab] = useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };

    const labels = [
        { name: "Code", inputType: "text" },
        { name: "Désignation", inputType: "text", isRequired: true },
        { name: "Etendue", inputType: "text", isRequired: true },
        { name: "Observation", inputType: "text" }
    ]
    const { initialValues: initialValues, validationSchema: validationSchema } = initializeFormik(labels)
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            var formdata = new FormData();
            formdata.append("token", "");
            formdata.append("wcrd", "");
            formdata.append("uuid_user", UUID_USER);
            formdata.append("uuid_cltsirius", UUID_CLTSIRIUS);
            formdata.append("code_znv", values[labels[0].name]);
            formdata.append("dsg_znv", values[labels[1].name]);
            formdata.append("etend_znv", values[labels[2].name]);
            formdata.append("obs_znv", values[labels[3].name]);
            formdata.append("ids_wly_comn", "");

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(NOUVELLE_ZONE_VENTE, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        },
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvelle Zone" pageTitle="Zone de Vente">
                <Form className="needs-validation" onSubmit={formik.handleSubmit} noValidate>
                    <Card>
                        <CardBody className="card-body">

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
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" id="infos">
                                    <CustomInput type="text" label={labels[0].name} formik={formik} />
                                    <CustomInput type="text" label={labels[1].name} formik={formik} />
                                    <CustomSelect label={labels[2].name} formik={formik} options={etendueOptions} />
                                    {/* {formik.values.etendue.value ?
                                        (
                                            formik.values.etendue.value === "wilaya" ?
                                                <CustomSelect label="Wilaya(s)" formik={formik} options={wilayaOptions} isMulti={true} />
                                                : <CustomSelect label="Commune(s)" formik={formik} options={communeOptions} isMulti={true} />
                                        )
                                        : null
                                    } */}
                                    {/* <CustomSelect label="Type" formik={formik} options={typeOptions} />
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
                                    } */}
                                    <CustomTextArea label={labels[3].name} formik={formik} />
                                </TabPane>
                                <TabPane tabId="2" id="client">
                                    <AddRemoveEditList tableHeaders={tableHeaders} tableData={tableData} />
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody className="card-body">
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary g-auto">Enregistrer</button>
                            </div>
                        </CardBody>
                    </Card>
                </Form>
            </MainContentLayout>
        </React.Fragment>
    )
}

export default NouvelleZoneVente;