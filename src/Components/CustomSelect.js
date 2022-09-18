import React from "react";
import { Row, Col, Label } from "reactstrap"
import Select from "react-select"

export const CustomSelect = ({ label, formik, options, isMulti }) => {
    const fieldProp = label.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
    return (
        <React.Fragment>
            <Row className="mb-3">
                <Col lg={3} >
                    <Label htmlFor={fieldProp} className="form-label">{label}</Label>
                </Col>
                <Col lg={4} md={6} >
                    <Select
                        id={fieldProp}
                        name={fieldProp}
                        value={formik.values[fieldProp]}
                        isMulti={isMulti ? isMulti : false}
                        onChange={selectedOption => {
                            formik.setFieldValue(fieldProp, selectedOption);
                        }}
                        options={options}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
}