import React from "react";
import { Card, CardBody, Form } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import { CustomFileInput } from "../Components/CustomFileInput";
import MainContentLayout from "../Components/MainContentLayout";
import { initializeFormik } from "../helpers/formik_helper";
import { UUID_USER, UUID_CLTSIRIUS, NOUVELLE_CAT_PARENT_PRODUIT, } from "../common/data/server-data";
import { toBase64 } from "../helpers/image_helper";

const NouvelleCategorieParentProduit = () => {
    const labels = [
        { name: "Désignation", inputType: "text", isRequired: true },
        { name: "Désignation (en arabe)", inputType: "text" },
        { name: "Observation", inputType: "text" },
        { name: "Image", inputType: "image" }
    ]
    const { initialValues: initialValues, validationSchema: validationSchema } = initializeFormik(labels)
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit: async values => {
            alert(JSON.stringify(values, null, 2));
            var formdata = new FormData();
            formdata.append("token", "");
            formdata.append("wcrd", "");
            formdata.append("uuid_user", UUID_USER);
            formdata.append("uuid_cltsirius", UUID_CLTSIRIUS);
            formdata.append("category_desg", values[labels[0].name]);
            formdata.append("category_desg_ar", values[labels[1].name]);
            formdata.append("category_obs", values[labels[2].name]);
            formdata.append("category_image_base64", values[labels[3].name] ? await toBase64(values[labels[3].name]) : "");

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(NOUVELLE_CAT_PARENT_PRODUIT, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        },
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvelle Catégorie Parent" pageTitle="Catégories Produit">
                <Form className="needs-validation" onSubmit={formik.handleSubmit} noValidate>
                    <Card>
                        <CardBody className="card-body">
                            <CustomInput type="text" label={labels[0].name} formik={formik} />
                            <CustomInput type="text" label={labels[1].name} formik={formik} isRtl={true} />
                            <CustomTextArea label={labels[2].name} formik={formik} />
                            <CustomFileInput label={labels[3].name} formik={formik} />
                            {/* <CustomInput type="file" label={labels[3].name} formik={formik} /> */}
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
    );
}

export default NouvelleCategorieParentProduit;