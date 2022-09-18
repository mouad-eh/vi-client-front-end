import React from "react";
import { Row, Col, Label, Input } from "reactstrap"


export const CustomInput = ({ type, label, formik, isRtl, isNarrow }) => {
    const fieldProp = label.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
    return (
        <React.Fragment>
            <Row className="mb-3">
                <Col lg={3} >
                    <Label htmlFor={fieldProp} className="form-label">{label}</Label>
                </Col>
                <Col lg={isNarrow ? 2 : 9} md={isNarrow ? 4 : null}>
                    <Input type={type} className="form-control" id={fieldProp} dir={isRtl ? "rtl" : "ltr"}
                        {...formik.getFieldProps(fieldProp)}
                        invalid={formik.touched[fieldProp] && formik.errors[fieldProp] ? (true) : false}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
}