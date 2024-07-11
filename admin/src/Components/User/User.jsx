import React from 'react'
import Sidebar from '../Admin/Sidebar'
import AdminHeader from '../Admin/AdminHeader'
import Button from 'react-bootstrap/esm/Button'
import { Form } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'

const User = () => {

    const [showAboutForm, setShowAboutForm] = useState(false);



    const handleShowAboutForm = () => setShowAboutForm(true);
    const handleCloseAboutUpdate = () => setShowAboutForm(false);

    return (
        <>

            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main" style={{ height: "100vh" }}>
                    <AdminHeader />
                    <div className="mb-2 my-3 mx-3">
                        <h2>Home About</h2>
                        <Button variant="primary" size="sm" onClick={handleShowAboutForm}>
                            Add/Update About
                        </Button>
                        <Modal show={showAboutForm} onHide={handleCloseAboutUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Home About</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>

                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>About Header</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                        />
                                    </Form.Group>
                                
                                    
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                        {' '}
                    </div>

                    <main className="admin-content">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Issue</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Message</th>
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
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        </>
    )
}

export default User