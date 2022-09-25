import React from "react";
import { Row, Col, Label } from "reactstrap"

export const CustomTextArea = ({ label, formik, isNarrow }) => {
    return (
        <React.Fragment>
            <Row className="mb-3">
                <Col lg={3} >
                    <Label htmlFor={label} className="form-label">{label}</Label>
                </Col>
                <Col lg={isNarrow ? 6 : 9} >
                    <textarea className="form-control" id={label} rows="5"
                        {...formik.getFieldProps(label)}>
                    </textarea>
                </Col>
            </Row>
        </React.Fragment>
    )
}