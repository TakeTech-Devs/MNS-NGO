import React, { useEffect } from 'react'
import Sidebar from '../Admin/Sidebar'
import AdminHeader from '../Admin/AdminHeader'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAdmin, clearErrors, getAdmins } from '../../Actions/AdminAction'
import { ADD_ADMIN_RESET } from '../../Constants/AdminConstants'

const User = () => {

    const [showHighlightForm, setShowHighlightForm] = useState(false);



    const handleShowHighlightForm = () => setShowHighlightForm(true);
    const handleCloseHighlightUpdate = () => setShowHighlightForm(false);

    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.admin);
    const { loading: adminsLoading, admins, error: adminsError } = useSelector((state) => state.admins);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAdmin(name, email, password));
    };

    useEffect(() => {
        if (user) {
            window.alert("Admin Added")
            dispatch({ type: ADD_ADMIN_RESET });
            window.location.reload()
        }
        if (error) {
            window.alert(error);
            dispatch(clearErrors())
        }
        if (adminsError) {
            window.alert(adminsError);
            dispatch(clearErrors())
        }
        dispatch(getAdmins());
    }, [dispatch, user, error, adminsError]);

    return (
        <>

            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main" style={{ height: "100vh" }}>
                    <AdminHeader />
                    <div className="mb-2 my-3 mx-3">
                        <h2>Admin</h2>
                        <Button variant="primary" size="sm" onClick={handleShowHighlightForm}>
                            Add New Admin
                        </Button>
                        <Modal show={showHighlightForm} onHide={handleCloseHighlightUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add New Admin</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Admin Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter the Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter the Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map((admin, index) => (
                                    <tr key={admin._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{admin.name}</td>
                                        <td>{admin.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>

                </div>
            </div>
        </>
    )
}

export default User