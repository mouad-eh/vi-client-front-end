import React, { useState } from "react";
import { Row, Card, CardBody, Form, Collapse } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"
import { CustomCheckBox } from "../Components/CustomCheckBox";
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import MainContentLayout from "../Components/MainContentLayout";
import { initializeFormik } from "../helpers/formik_helper";

const NouveauUtilisateur = () => {
    const DroitAccesAppli = [
        "Ajouter Commande",
        "Consulter liste Commandes",
        "Ajouter Client",
        "Consulter liste Clients",
        "Vue Clients/carte",
        "Ajouter Prospet",
        "Consulter liste Prospects",
        "Rapport Passages/Client",
        "Rapport Passages/Vendeur",
        "Rapport Graphiques",
        "Compte rendu",
        "Ajouter Catégorie Client",
        "Consulter liste Zones de Vente",
        "Ajouter Catégorie Client",
        "Cosulter liste Catégories Client",
        "Ajouter Produit",
        "Consulter liste Produits",
        "Ajouter Utilisateur",
        "Consulter liste Utilisateurs",
        "Ajouter Tournée",
        "Consulter liste Tournées",
        "Ajouter Objectif",
        "Consulter liste Objectifs"
    ]
    const droitListClient = ["Editer client", "Supprimer client"]
    const droitListProspect = ["Editer prospect", "Supprimer prospect"]
    const droitListPolitique = ["Editer politique commerciale", "Supprimer politique commerciale"]
    const droitListUtilisateur = ["Editer utilisateur", "Supprimer utilisateur"]
    const droitConsultation = ["PDF", "CSV", "Excel", "PJs", "Fiche client"]
    const droitImpression = ["Impr. PDF", "Impr. CSV", "Impr. Excel"]

    const labels = [
        { name: "Nom", inputType: "text", isRequired: true },
        { name: "Prénom", inputType: "text", isRequired: true },
        { name: "Téléphone", inputType: "text" },
        { name: "Mail", inputType: "text" },
        { name: "Adresse", inputType: "text" },
        { name: "Observations", inputType: "text" },
        { name: "Pseudonyme", inputType: "text", isRequired: true },
        { name: "Mot de passe", inputType: "text", isRequired: true },
        { name: "Confirmez", inputType: "text", isRequired: true },
        { name: "Logo", inputType: "image" }
    ]
    const { initialValues: initialValues, validationSchema: validationSchema } = initializeFormik(labels)
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit: (values) => console.log(values)
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouveau Utilisateur" pageTitle="Utilisateurs">
                <Form className="needs-validation" onSubmit={formik.handleSubmit} noValidate>
                    <Card>
                        <CardBody>
                            <h5 className="card-title mb-3 flex-grow-1">Droits d'accès d'application</h5>
                            <Row className="mb-3">
                                {DroitAccesAppli.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} />
                                )}
                            </Row>
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 ">Droits lists clients</h5>
                            <Row className="d-flex mb-3">
                                {droitListClient.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )}
                            </Row>
                            <Row className="d-flex mb-3">
                                {droitConsultation.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Droits lists prospects</h5>
                            <Row className="d-flex mb-3">
                                {droitListProspect.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            <Row className="d-flex mb-3">
                                {droitImpression.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Droits lists politiques commerciales</h5>
                            <Row className="d-flex mb-3">
                                {droitListPolitique.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            <Row className="d-flex mb-3">
                                {droitImpression.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Droits rapports Visite(s) Effectuée(s) par Client</h5>
                            <Row className="d-flex mb-3">
                                {droitImpression.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Droits rapports Visite(s) Effectuée(s) par Agent Itinérant</h5>
                            <Row className="d-flex mb-3">
                                {droitImpression.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Droits rapports Compte rendu</h5>
                            <Row className="d-flex mb-3">
                                {droitImpression.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Droits liste Utilisateurs </h5>
                            <Row className="d-flex mb-3">
                                {droitListUtilisateur.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            <Row className="d-flex mb-3">
                                {droitImpression.map(
                                    (label, index) => <CustomCheckBox key={index} label={label} theme="form-check-secondary" />
                                )
                                }
                            </Row>
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Données Personnelles </h5>
                            <CustomInput type="text" label={labels[0].name} formik={formik} />
                            <CustomInput type="text" label={labels[1].name} formik={formik} />
                            <CustomInput type="text" label={labels[2].name} formik={formik} />
                            <CustomInput type="text" label={labels[3].name} formik={formik} />
                            <CustomTextArea label={labels[4].name} formik={formik} />
                            <CustomTextArea label={labels[5].name} formik={formik} />
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Données d'authentification </h5>
                            <CustomInput type="text" label={labels[6].name} formik={formik} />
                            <CustomInput type="text" label={labels[7].name} formik={formik} />
                            <CustomInput type="text" label={labels[8].name} formik={formik} />
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Logo Adminstrateur</h5>
                            <CustomInput type="file" label={labels[9].name} formik={formik} />
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary g-auto">Enregistrer</button>
                            </div>
                        </CardBody>
                    </Card>
                </Form>
            </MainContentLayout>
        </React.Fragment>
    );
}

export default NouveauUtilisateur;