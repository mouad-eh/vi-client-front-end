import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

export const AddRemoveEditList = () => {
    const [modal_list, setmodal_list] = useState(false);
    const tog_list = () => {
        setmodal_list(!modal_list);
    };

    const [modal_delete, setmodal_delete] = useState(false);
    const tog_delete = () => {
        setmodal_delete(!modal_delete);
    };
    const formik = useFormik({})
    return (
        <React.Fragment>
            <div id="customerList">
                <div className="table-responsive table-card mt-3 mb-1">
                    <table className="table align-middle table-wrap" id="customerTable">
                        <thead className="table-light">
                            <tr>
                                <th>Client</th>
                                <th>du</th>
                                <th>à</th>
                            </tr>
                        </thead>
                        <tbody className="list form-check-all">
                            <tr>
                                <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                <td className="customer_name">Mary Cousar</td>
                                <td className="date-du">06 Apr, 2021</td>
                                <td className="date-a">06 Apr, 2021</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <div className="edit">
                                            <button className="btn btn-sm btn-success edit-item-btn"
                                                data-bs-toggle="modal" data-bs-target="#showModal">Modifier</button>
                                        </div>
                                        <div className="remove">
                                            <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Supprimer</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2102</Link></td>
                                <td className="customer_name">Jeff Taylor</td>
                                <td className="date_du">15 Feb, 2021</td>
                                <td className="date_a">15 Feb, 2021</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <div className="edit">
                                            <button className="btn btn-sm btn-success edit-item-btn"
                                                data-bs-toggle="modal" data-bs-target="#showModal">Modifier</button>
                                        </div>
                                        <div className="remove">
                                            <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Supprimer</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-end">
                    <Button color="success" className="add-btn me-1" onClick={() => tog_list()} id="create-btn"><i className="ri-add-line align-bottom me-1"></i> Ajouter</Button>
                </div>
            </div>
            {/* Add Modal */}
            <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
                <ModalHeader className="bg-light p-3">
                    Ajouter Client
                    <Button type="button" onClick={() => { setmodal_list(false); }} className="btn-close" aria-label="Close" >
                    </Button>
                </ModalHeader>
                <form>
                    <ModalBody>
                        <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                            <label htmlFor="id-field" className="form-label">ID</label>
                            <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="customername-field" className="form-label">Client</label>
                            <input type="text" id="customername-field" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email-field" className="form-label">de</label>
                            <input type="email" id="email-field" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone-field" className="form-label">à</label>
                            <input type="text" id="phone-field" className="form-control" required />
                        </div>

                        {/* <div className="mb-3">
                            <label htmlFor="date-field" className="form-label">Joining Date</label>
                            <Flatpickr
                                className="form-control"
                                options={{
                                    dateFormat: "d M, Y"
                                }}
                                placeholder="Select Date"
                            />
                        </div>

                        <div>
                            <label htmlFor="status-field" className="form-label">Status</label>
                            <select className="form-control" data-trigger name="status-field" id="status-field" >
                                <option value="">Status</option>
                                <option value="Active">Active</option>
                                <option value="Block">Block</option>
                            </select>
                        </div> */}
                    </ModalBody>
                    <ModalFooter>
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button" className="btn btn-light" onClick={() => setmodal_list(false)}>Fermer</button>
                            <button type="submit" className="btn btn-success" id="add-btn">Ajouter Client</button>
                            <button type="button" className="btn btn-success" id="edit-btn">Modifier</button>
                        </div>
                    </ModalFooter>
                </form>
            </Modal>

            {/* Remove Modal */}
            <Modal isOpen={modal_delete} toggle={() => { tog_delete(); }} className="modal fade zoomIn" id="deleteRecordModal" centered >
                <div className="modal-header">
                    <Button type="button" onClick={() => setmodal_delete(false)} className="btn-close" aria-label="Close"> </Button>
                </div>
                <ModalBody>
                    <div className="mt-2 text-center">
                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop"
                            colors="primary:#f7b84b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon>
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you Sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button type="button" className="btn w-sm btn-light" onClick={() => setmodal_delete(false)}>Close</button>
                        <button type="button" className="btn w-sm btn-danger " id="delete-record">Yes, Delete It!</button>
                    </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}