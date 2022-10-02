import React from "react";
import { Row, Col, Label, Input, FormFeedback } from "reactstrap"

export const CustomFileInput = ({ label, formik }) => {
    return (
        <React.Fragment>
            <Row className="mb-3">
                <Col lg={3} >
                    <Label htmlFor={label} className="form-label">{label}</Label>
                </Col>
                <Col lg={9} >
                    <Input type="file" className="form-control" id={label}
                        // value={formik.values[label]}
                        onChange={e => formik.setFieldValue(label, e.target.files[0] ? e.target.files[0] : null)}
                        onBlur={formik.handleBlur}
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