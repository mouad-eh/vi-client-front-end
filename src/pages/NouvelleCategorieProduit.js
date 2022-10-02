import React from "react";
import { Card, CardBody, Form } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup"
import { CustomInput } from "../Components/CustomInput";
import { CustomTextArea } from "../Components/CustomTextArea";
import { CustomSelect } from "../Components/CustomSelect";
import MainContentLayout from "../Components/MainContentLayout";
import { initializeFormik } from "../helpers/formik_helper";
import { UUID_USER, UUID_CLTSIRIUS, LIST_CAT_PARENT_PRODUIT, NOUVELLE_CAT_PRODUIT } from "../common/data/server-data";
import { CustomFileInput } from "../Components/CustomFileInput";
import { toBase64 } from "../helpers/image_helper";

const NouvelleCategorieProduit = () => {
    const categorieParentOptions = []
    var formdata = new FormData();
    formdata.append("token", "");
    formdata.append("wcrd", "");
    formdata.append("uuid_user", UUID_USER);
    formdata.append("uuid_cltsirius", UUID_CLTSIRIUS);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch(LIST_CAT_PARENT_PRODUIT, requestOptions)
        .then(response => response.json())
        .then(result => {
            for (var item of result["PARENT_CATEGORY_PRODUCT_LIST"]["LIST"]) {
                categorieParentOptions.push({ label: item.category_name, value: item.category_id })
            }
        })
        .catch(error => console.log('error', error));
    const labels = [
        { name: "Catégorie Parent", inputType: "text", isRequired: true },
        { name: "Désignation", inputType: "text", isRequired: true },
        { name: "Désignation (En Arabe)", inputType: "text" },
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
            formdata.append("category_parent_id", values[labels[0].name]);
            formdata.append("category_desg", values[labels[1].name]);
            formdata.append("category_desg_ar", values[labels[2].name]);
            formdata.append("category_obs", values[labels[3].name]);
            formdata.append("category_image_base64", values[labels[4].name] ? await toBase64(values[labels[4].name]) : "");


            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(NOUVELLE_CAT_PRODUIT, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        },
    })
    return (
        <React.Fragment>
            <MainContentLayout title="Nouvelle Catégorie" pageTitle="Catégories Produit">
                <Form className="needs-validation" onSubmit={formik.handleSubmit} noValidate>
                    <Card>
                        <CardBody>
                            <CustomSelect options={categorieParentOptions} label={labels[0].name} formik={formik} />
                            <CustomInput type="text" label={labels[1].name} formik={formik} />
                            <CustomInput type="text" label={labels[2].name} formik={formik} isRtl={true} />
                            <CustomTextArea label={labels[3].name} formik={formik} />
                            <CustomFileInput label={labels[4].name} formik={formik} />
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

export default NouvelleCategorieProduit;