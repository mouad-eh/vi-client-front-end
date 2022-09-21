import React from "react";
import { Card, CardBody, Form, Row } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import { CustomSelect } from "../Components/CustomSelect";
import { CustomCheckBox } from "../Components/CustomCheckBox";
import MainContentLayout from "../Components/MainContentLayout";


const NouveauProduitVente = () => {
    const typeOptions = [
        { value: "En arrivage", label: "En arrivage" },
        { value: "Fin de vie", label: "fin de vie" }
    ]

    const categorieOptions = [
        { value: "Categorie1", label: "Categorie1" },
        { value: "Categorie2", label: "Categorie2" }
    ]

    const unitOptions = [
        { value: "unité1", label: "unité1" },
        { value: "unité2", label: "unité2" }
    ]
    const formik = useFormik({
        initialValues: {
            type: "",
            categorie: "",
            reference: "",
            designation: "",
            designationEnArabe: "",
            quantiteEnUnite: "",
            uniteStockage: "",
            contenance: "",
            prix: "",
            observation: "",
            image1: "",
            image2: "",
            image3: ""
        },
        validationSchema: Yup.object({
            type: Yup.mixed(),
            categorie: Yup.mixed(),
            reference: Yup.mixed(),
            designation: Yup.mixed(),
            designationEnArabe: Yup.mixed(),
            quantiteEnUnite: Yup.mixed(),
            uniteStockage: Yup.mixed(),
            contenance: Yup.mixed(),
            prix: Yup.mixed(),
            observation: Yup.mixed(),
            image1: Yup.mixed(),
            image2: Yup.mixed(),
            image3: Yup.mixed()
        }),
        onSubmit: (values) => {
            console.log(values)
        }

    });
    return (
        <React.Fragment>
            <MainContentLayout title="Nouveau Produit" pageTitle="Produit Vente">
                <Form>
                    <Card>
                        <CardBody className="card-body">
                            <Form className="needs-validation" noValidate>
                                <CustomSelect label="Type" formik={formik} options={typeOptions} />
                                <CustomSelect label="Catégorie" formik={formik} options={categorieOptions} />
                                <CustomInput type="text" label="Référence" formik={formik} />
                                <CustomInput type="text" label="Désignation" formik={formik} />
                                <CustomInput type="text" label="Désignation (en arabe)" formik={formik} isRtl={true} />
                                <CustomInput type="text" label="Quantité (en unité)" formik={formik} />
                                <CustomSelect label="Unité stockage" formik={formik} options={unitOptions} />
                                <CustomInput type="text" label="Contenance" formik={formik} />
                                <CustomInput type="text" label="Prix DA" formik={formik} />
                                <CustomTextArea label="Observation" formik={formik} />
                                <CustomInput type="file" label="Image 1" formik={formik} />
                                <CustomInput type="file" label="Image 2" formik={formik} />
                                <CustomInput type="file" label="Image 3" formik={formik} />
                            </Form>
                        </CardBody >
                    </Card>
                    <Card>
                        <CardBody>
                            <Row className="mb-3">
                                <CustomCheckBox label="Produit intervention" theme="form-check-secondary" />
                                <CustomCheckBox label="Piéce intervention" theme="form-check-secondary" />
                            </Row>
                            <Row className="mb-3">
                                <CustomCheckBox label="Afficher le Prix" theme="form-check-secondary" />
                                <CustomCheckBox label="Afficher la Quantité" theme="form-check-secondary" />
                            </Row>
                            <Row className="mb-3">
                                <CustomCheckBox label="Ajouter un nouveau produit aprés l'enregistrementent" theme="form-check-secondary" />
                            </Row>
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

export default NouveauProduitVente;