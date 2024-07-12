import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getGrievanceFormData, updateGrievanceFormData } from '../../Actions/GrievanceActions';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { UPDATE_ADMIN_GRIEVANCE_MESSAGES_RESET } from '../../Constants/GrievanceConstants';

const GrievanceForm = () => {
    const dispatch = useDispatch();
    const { form, error } = useSelector(state => state.grievanceForm);
    const { isUpdated, error: requestError } = useSelector((state) => state.grievanceRequest);

    useEffect(() => {
        dispatch(getGrievanceFormData());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);

    const [status, setStatus ] = useState('')

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState({});

    const handleShowBrandEditModal = (item) =>{
        setSelectedRequest(item);
        setStatus(item.status);
        setShowEditModal(true)
    }

    const handleCloseBrandEditModal = () => setShowEditModal(false)

    const handleBrandUpdate = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('status', status);
        dispatch(updateGrievanceFormData(selectedRequest._id, formData));
    }

    useEffect(() =>{
        if (isUpdated) {
            alert('Request Updated Successfully');
            dispatch({ type: UPDATE_ADMIN_GRIEVANCE_MESSAGES_RESET });
            window.location.reload();
        }
        if(requestError){
            window.alert(requestError);
        }
    }, [isUpdated, requestError])


    return (
        <>
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main">
                    <AdminHeader />
                    <main className="admin-content">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Issue</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Ticket ID</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {form && form.length > 0 ? (
                                    form.map((item, index) => (
                                        <tr key={item._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.issue}</td>
                                            <td>{item.email}</td>
                                            <td style={{width: "550px"}}>{item.message}</td>
                                            <td>{item.grievanceId}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <Button variant="primary" onClick={() => handleShowBrandEditModal(item)}>
                                                    Edit
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7">No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </main>
                    <Modal show={showEditModal} onHide={handleCloseBrandEditModal}>
                    <Modal.Header closeButton>
                            <Modal.Title>Edit Brand</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleBrandUpdate}>
                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label>Brand Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default GrievanceForm