import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';

const AdminHome = () => {
    const [showFormModal, setShowFormModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleCloseFormModal = () => setShowFormModal(false);
    const handleShowFormModal = () => setShowFormModal(true);

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);

    return (
        <>
            <div className="mb-2 my-3 mx-3">
                <Button variant="primary" size="sm" onClick={handleShowFormModal}>
                    Form
                </Button>
                <Modal show={showFormModal} onHide={handleCloseFormModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Home</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Enter any Image"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Sub Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseFormModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseFormModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {' '}
                <Button variant="primary" size="sm" onClick={handleShowUpdateModal}>
                    Update
                </Button>
                <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Home</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Enter any Image"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="updateFormHeadingInput">
                                <Form.Label>Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="updateFormSubHeadingInput">
                                <Form.Label>Sub Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseUpdateModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseUpdateModal}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <main className="admin-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </>
    );
};

export default AdminHome;
