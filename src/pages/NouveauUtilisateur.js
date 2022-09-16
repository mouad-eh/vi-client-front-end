import React from "react";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { Container, Col, Row, Card, CardBody, Label, Input, Form, CardHeader } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"

const NouveauUtilisateur = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Nouveau Utilisateur" pageTitle="Utilisateurs" />
                    <Card>
                        <CardBody className="card-body">
                            <Form className="needs-validation" noValidate>
                                <h5 className="card-title mb-3 flex-grow-1">Droits d'accès d'application</h5>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Ajouter Commande
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Consulter liste Commandes
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Ajouter Client
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Consulter liste Clients
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Vue Clients/carte
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Ajouter Prospect
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Consulter liste Prospects
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Rapport Passages/Client
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Rapport Passages/Vendeur
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Rapport Graphiques
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Compte rendu
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Ajouter Catégorie Client
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Consulter liste Zones de Vente
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Ajouter Catégorie Client
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Cosulter liste Catégories Client
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Ajouter Produit
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Consulter liste Produits
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Ajouter Utilisateur
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Consulter liste Utilisateurs
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Ajouter Tournée
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Consulter liste Tournées
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Ajouter Objectif
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6}>
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Consulter liste Objectifs
                                        </Label>
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Droits lists clients</h5>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Editer client
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Supprimer client
                                        </Label>
                                    </Col>
                                </Row>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            PDF
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            CSV
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Excel
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            PJs
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Fiche client
                                        </Label>
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Droits lists prospects</h5>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Editer prospect
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Supprimer prospect
                                        </Label>
                                    </Col>
                                </Row>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. PDF
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. CSV
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. Excel
                                        </Label>
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Droits lists politiques commerciales</h5>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Editer politique commerciale
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Supprimer politique commerciale
                                        </Label>
                                    </Col>
                                </Row>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. PDF
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. CSV
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. Excel
                                        </Label>
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Droits rapports Visite(s) Effectuée(s) par Client</h5>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. PDF
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. CSV
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. Excel
                                        </Label>
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Droits rapports Visite(s) Effectuée(s) par Agent Itinérant</h5>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. PDF
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. CSV
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. Excel
                                        </Label>
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Droits rapports Cpmpte rendu</h5>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. PDF
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. CSV
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. Excel
                                        </Label>
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Droits liste Utilisateurs </h5>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Editer utilisateur
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Supprimer utilisateur
                                        </Label>
                                    </Col>
                                </Row>
                                <Row className="d-flex mb-3">
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. PDF
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. CSV
                                        </Label>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="form-check-secondary">
                                        <Input className="form-check-input me-2" type="checkbox" id="formCheck1" defaultChecked />
                                        <Label className="form-check-label" htmlFor="formCheck1">
                                            Impr. Excel
                                        </Label>
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Données Personnelles </h5>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designation" className="form-label">Nom</Label>                                        </Col>
                                    <Col lg={9} >
                                        <Input type="text" className="form-control" id="designation"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designation" className="form-label">Prénom</Label>                                        </Col>
                                    <Col lg={9} >
                                        <Input type="text" className="form-control" id="designation"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designation" className="form-label">Téléphone</Label>                                        </Col>
                                    <Col lg={9} >
                                        <Input type="text" className="form-control" id="designation"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designation" className="form-label">Mail</Label>                                        </Col>
                                    <Col lg={9} >
                                        <Input type="text" className="form-control" id="designation"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="observation" className="form-label">Adresse</Label>
                                    </Col>
                                    <Col lg={9} >
                                        <textarea className="form-control" id="Observation" rows="5"></textarea>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="observation" className="form-label">Observation</Label>
                                    </Col>
                                    <Col lg={9} >
                                        <textarea className="form-control" id="Observation" rows="5" ></textarea>
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Données d'authentification </h5>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designation" className="form-label">Pseudonyme</Label>                                        </Col>
                                    <Col lg={9} >
                                        <Input type="text" className="form-control" id="designation"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designation" className="form-label">Mot de passe</Label>                                        </Col>
                                    <Col lg={9} >
                                        <Input type="text" className="form-control" id="designation"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designation" className="form-label">Confirmez</Label>                                        </Col>
                                    <Col lg={9} >
                                        <Input type="text" className="form-control" id="designation"
                                        />
                                    </Col>
                                </Row>
                                <h5 className="card-title mb-3 flex-grow-1">Logo Adminstrateur</h5>
                                <Row className="mb-3">
                                    <Col lg={3} >
                                        <Label htmlFor="designation" className="form-label">logo</Label>                                        </Col>
                                    <Col lg={9} >
                                        <Input type="file" className="form-control" id="designation"
                                        />
                                    </Col>
                                </Row>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary g-auto">Enregistrer</button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default NouveauUtilisateur;