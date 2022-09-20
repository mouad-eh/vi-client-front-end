import React from "react";
import { Row, Col, Label } from "reactstrap"
import Rating from "react-rating";
const CustomRating = ({ label }) => {
    const fieldProp = label.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return (
        <React.Fragment>
            <Row className="mb-3">
                <Col lg={3} >
                    <Label htmlFor={fieldProp} className="form-label">{label}</Label>
                </Col>
                <Col lg="auto" >
                    <Rating
                        initialRating={0}
                        emptySymbol="mdi mdi-star-outline text-muted "
                        fullSymbol="mdi mdi-star text-warning "
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
}
export default CustomRating;