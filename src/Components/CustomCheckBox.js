import React from "react";
import { Input, Label, Col, Row } from "reactstrap"


export const CustomCheckBox = ({ label,theme }) => {
    return (
        <React.Fragment>
            <Col xl={3} lg={4} sm={6} className={theme ? ("d-flex " + theme) : "d-flex"}>
                <Input className="form-check-input me-2" type="checkbox" id={label} defaultChecked />
                <Label className="form-check-label" htmlFor={label} >
                    {label}
                </Label>
            </Col>
        </React.Fragment>
    );
}