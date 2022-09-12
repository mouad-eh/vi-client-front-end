import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            Copyright &copy; {new Date().getFullYear()} Sirius Net.
                        </Col >
                        <Col sm={6}>
                            <div className="text-sm-end d-none d-sm-block">
                                Tous droits réservés.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;