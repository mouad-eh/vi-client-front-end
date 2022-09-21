import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "./Common/BreadCrumb";

const MainContentLayout = (props) => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title={props.title} pageTitle={props.pageTitle} />
                    {props.children}
                </Container>
            </div>
        </React.Fragment>
    );
}
export default MainContentLayout;