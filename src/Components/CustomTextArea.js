import React from "react";
import { Row, Col, Label, Input } from "reactstrap"

export const CustomTextArea = ({ label, formik, isNarrow }) => {
    const fieldProp = label.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
    return (
        <React.Fragment>
            <Row className="mb-3">
                <Col lg={3} >
                    <Label htmlFor={fieldProp} className="form-label">{label}</Label>
                </Col>
                <Col lg={isNarrow? 6 : 9} >
                    <textarea className="form-control" id={fieldProp} rows="5"
                        {...formik.getFieldProps(fieldProp)}>
                    </textarea>
                </Col>
            </Row>
        </React.Fragment>
    )
}