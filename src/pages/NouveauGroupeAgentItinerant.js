import { useFormik } from "formik";
import * as Yup from "yup"
import React from "react"
import { Container, Card, CardBody, Form } from "reactstrap"
import BreadCrumb from "../Components/Common/BreadCrumb";
import { CustomInput } from "../Components/CustomInput";
import { CustomSelect } from "../Components/CustomSelect";
import { CustomTextArea } from "../Components/CustomTextArea";

const agentOptions = [
    { value: "Amine Fellahi", label: "Amine Fellahi" },
    { value: "Ait Younes", label: "Ait Younes" }
]

const NouveauGroupeAgentItinerant = () => {
    const formik = useFormik({
        initialValues: {
            desingation: "",
            agentItinerant: "",
            observation: ""
        },
        validationSchema: Yup.object({
            desingation: Yup.mixed(),
            agentItinerant: Yup.mixed(),
            observation: Yup.mixed()
        }),
        onSubmit: (values) => console.log(values)
    })
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Nouvelle Catégorie Parent" pageTitle="Catégories Produit" />
                    <Card>
                        <CardBody className="card-body">
                            <Form className="needs-validation" noValidate>
                                <CustomInput type="text" label="Désignation" formik={formik} />
                                <CustomSelect label="agentItinerant" formik={formik} options={agentOptions} isMulti={true} />
                                <CustomTextArea label="Observation" formik={formik} />
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
export default NouveauGroupeAgentItinerant;