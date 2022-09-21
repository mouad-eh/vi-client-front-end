import React, { useState } from "react";
import { Row, Card, CardBody, Form, Collapse } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"
import { CustomCheckBox } from "../Components/CustomCheckBox";
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import MainContentLayout from "../Components/MainContentLayout";

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

    const [isDroitAccesOpen, setIsDroitAccesOpen] = useState(false);

    const formik = useFormik({

    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouveau Utilisateur" pageTitle="Utilisateurs">
                <Form className="needs-validation" noValidate>
                    <Card>
                        <CardBody>
                            <div data-bs-toggle="collapse" onClick={() => setIsDroitAccesOpen(!isDroitAccesOpen)}>
                                <h5 className="card-title mb-3 flex-grow-1">Droits d'accès d'application</h5>
                            </div>
                            <Collapse isOpen={isDroitAccesOpen}>
                                <Row className="mb-3">
                                    {DroitAccesAppli.map(
                                        (label, index) => <CustomCheckBox key={index} label={label} />
                                    )}
                                </Row>
                            </Collapse>

                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Droits lists clients</h5>
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
                            <CustomInput type="text" label="Nom" formik={formik} />
                            <CustomInput type="text" label="Prénom" formik={formik} />
                            <CustomInput type="text" label="Téléphone" formik={formik} />
                            <CustomInput type="text" label="Mail" formik={formik} />
                            <CustomTextArea label="Adresse" formik={formik} />
                            <CustomTextArea label="Observation" formik={formik} />
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Données d'authentification </h5>
                            <CustomInput type="text" label="Pseudonyme" formik={formik} />
                            <CustomInput type="text" label="Mot de passe" formik={formik} />
                            <CustomInput type="text" label="Confirmez" formik={formik} />
                            {/*------------------------------------------------------------------*/}
                            <h5 className="card-title mb-3 flex-grow-1">Logo Adminstrateur</h5>
                            <CustomInput type="file" label="Logo" formik={formik} />
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