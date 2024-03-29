import React from "react";
import { Row, Col, Label, FormFeedback } from "reactstrap"
import Select from "react-select"

export const CustomSelect = ({ label, formik, options, isMulti }) => {
    return (
        <React.Fragment>
            <Row className="mb-3">
                <Col lg={3} >
                    <Label htmlFor={label} className="form-label">{label}</Label>
                </Col>
                <Col lg={4} md={6} >
                    <Select
                        id={label}
                        name={label}
                        // value={formik.values[label]}
                        isMulti={isMulti ? isMulti : false}
                        onChange={selectedOption => {
                            formik.setFieldValue(label, selectedOption.value);
                        }}
                        onBlur={formik.handleBlur}
                        classNamePrefix="form-control"
                        options={options}
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