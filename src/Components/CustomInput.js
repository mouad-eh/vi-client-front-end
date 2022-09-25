import React from "react";
import { Row, Col, Label, Input, FormFeedback } from "reactstrap"


export const CustomInput = ({ type, label, formik, isRtl, isNarrow }) => {
    return (
        <React.Fragment>
            <Row className="mb-3">
                <Col lg={3} >
                    <Label htmlFor={label} className="form-label">{label}</Label>
                </Col>
                <Col lg={isNarrow ? 2 : 9} md={isNarrow ? 4 : null}>
                    <Input type={type} className="form-control" id={label} dir={isRtl ? "rtl" : "ltr"}
                        {...formik.getFieldProps(label)}
                        invalid={formik.touched[label] && formik.errors[label] ? (true) : false}
                    />
                    {
                        formik.touched[label] && formik.errors[label] ?
                            <FormFeedback type="invalid">{formik.errors[label]}</FormFeedback>
                            : null
                    }
                </Col>
            </Row>
        </React.Fragment>
    );
}