import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContact, clearErrors, createContactHeader, createContactInfo } from '../../Actions/ContactActions';
import { ADD_CONTACTHEADER_CONTACT_RESET, ADD_CONTACTINFO_CONTACT_RESET } from '../../Constants/ContactConstants';

const Contact = () => {
    const [showHeaderForm, setShowHeaderForm] = useState(false);


    const handleShowHeaderForm = () => setShowHeaderForm(true);
    const handleCloseHeaderUpdate = () => setShowHeaderForm(false);

    const [showContactForm, setShowContactForm] = useState(false);



    const handleShowContactForm = () => setShowContactForm(true);
    const handleCloseContactUpdate = () => setShowContactForm(false);

    const [showCarousel, setShowCarousel] = useState(false);



    const handleShowCarouse = () => setShowCarousel(true);
    const handleCloseCarouse = () => setShowCarousel(false);

    const dispatch = useDispatch();
    const { contact, loading, error } = useSelector(state => state.adminContact);

    useEffect(() => {
        dispatch(getContact());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);

    const { contact: addContact, error: newHomeDataError, isUpdated } = useSelector(state => state.newContactData);

    const [header, setHeader] = useState('');
    const [caption, setCaption] = useState('');
    const [headerImage, setHeaderImage] = useState([]);


    const [phone, setphone] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
        if (addContact) {
            setHeader(contact.header || "");
            setCaption(contact.caption || "");
            setphone(contact.phone || "");
            setEmail(contact.email || "");

        }
        if (isUpdated) {
            window.alert('Section updated successfully');
            dispatch({ type: ADD_CONTACTHEADER_CONTACT_RESET });
            dispatch({ type: ADD_CONTACTINFO_CONTACT_RESET });
            window.location.reload()
        }

        if(newHomeDataError){
            window.alert(newHomeDataError);
            dispatch(clearErrors());
        }
    }, [addContact, isUpdated, newHomeDataError,dispatch])

    const handelHeaderImage = (e) => {
        setHeaderImage(e.target.files[0]);
    }

    const handleHeaderSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("header", header);
        formData.append("caption", caption);
        formData.append('headerImage', headerImage);

        dispatch(createContactHeader(formData));
    }

    
    const handleInfoSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("phone", phone);
        formData.append("email", email);

        dispatch(createContactInfo(formData));
    }



    return (
        contact && contact.length > 0 && (
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main" style={{ height: "100vh" }}>
                    <AdminHeader />

                    {/* Contact Header */}
                    <div className="mb-2 my-3 mx-3">
                        <h2>Contact Header</h2>
                        <Button variant="primary" size="sm" onClick={handleShowHeaderForm}>
                            Add/Update Header
                        </Button>
                        <Modal show={showHeaderForm} onHide={handleCloseHeaderUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Contact Header</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleHeaderSubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            value={header}
                                            onChange={(e) => setHeader(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Caption</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Caption"
                                            value={caption}
                                            onChange={(e) => setCaption(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Enter any Image"
                                            onChange={handelHeaderImage}
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
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Caption</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{contact[0].header}</td>
                                    <td>{contact[0].caption}</td>
                                    <td>
                                        <div class="container">
                                            <img src={contact[0].headerImage.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                        {/* <Modal.Title>Home Header</Modal.Title> */}
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img
                                                            className="d-block w-100"
                                                            src={contact[0].headerImage.url}
                                                        />
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>

                    {/* Contact Contact */}
                    <div className="mb-2 my-3 mx-3">
                        <h2>Contact Info</h2>
                        <Button variant="primary" size="sm" onClick={handleShowContactForm}>
                            Add/Update Contact Info
                        </Button>
                        <Modal show={showContactForm} onHide={handleCloseContactUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Contact Info</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleInfoSubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            value={phone}
                                            onChange={(e) => setphone(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter the Heading"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{contact[0].phone}</td>
                                    <td>{contact[0].email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>

                </div>
            </div>
        )
    )
}

export default Contact