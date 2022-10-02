import React from "react";
import { Card, CardBody, Form } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import MainContentLayout from "../Components/MainContentLayout";
import { initializeFormik } from "../helpers/formik_helper";
import { UUID_USER, UUID_CLTSIRIUS, NOUVELLE_CAT_CLIENT } from "../common/data/server-data";

const NouvelleCategorieClient = () => {
    const labels = [
        { name: "Désignation", inputType: "text", isRequired: true },
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
            formdata.append("dsg_ctgc", values[labels[0].name]);
            formdata.append("obs_ctgc", values[labels[1].name]);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(NOUVELLE_CAT_CLIENT, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        },
    }
    )
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvelle Catégorie" pageTitle="Catégories Client">
                <Form className="needs-validation" onSubmit={formik.handleSubmit} noValidate>
                    <Card>
                        <CardBody className="card-body">
                            <CustomInput type="text" label={labels[0].name} formik={formik} />
                            <CustomTextArea label={labels[1].name} formik={formik} />
                        </CardBody >
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
    )
}

export default NouvelleCategorieClient;