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
import Loader from '../Layouts/Loader';

const Contact = () => {
    const [showHeaderForm, setShowHeaderForm] = useState(false);


    const handleShowHeaderForm = () => setShowHeaderForm(true);
    const handleCloseHeaderUpdate = () => setShowHeaderForm(false);

    const [showHeaderImageForm, setShowHeaderImageForm] = useState(false);


    const handleShowHeaderImageForm = () => setShowHeaderImageForm(true);
    const handleCloseHeaderImageUpdate = () => setShowHeaderImageForm(false);

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

    const { contact: addContact, error: newHomeDataError, isUpdated, loading:  updateLoding} = useSelector(state => state.newContactData);

    const [headerData, setHeaderData] = useState({
        header: '',
        caption: '',
    })
    const [headerImage, setHeaderImage] = useState([]);


    const [contactData, setContactData] = useState({
        phone: '',
        email: '',
    })


    useEffect(() => {
        if (addContact) {
            setHeaderData({
                header: addContact.header,
                caption: addContact.caption,
            })
            setContactData({
                phone: addContact.phone,
                email: addContact.email,
            })

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
        formData.append('headerImage', headerImage);

        dispatch(createContactHeader(formData));
    }

    const handelHeaderInput = (e) =>{
        setHeaderData({
            ...headerData,
            [e.target.name]: e.target.value,
        })
    }

    const handelHeaderInputSubmit = (e) =>{
        e.preventDefault();
        dispatch(createContactHeader(headerData));
    }


    const handelInfoInput = (e) =>{
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
        })
    }

    
    const handleInfoSubmit = (e) => {
        e.preventDefault();

        dispatch(createContactInfo(contactData));
    }



    return (
        <>
        {loading && <Loader />}
        {updateLoding && <Loader />}
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
                                <Form onSubmit={handelHeaderInputSubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            name='header'
                                            value={headerData.header}
                                            onChange={handelHeaderInput}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Caption</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter the Caption"
                                            name='caption'
                                            value={headerData.caption}
                                            onChange={handelHeaderInput}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                        {' '}
                        <Button variant="primary" size="sm" onClick={handleShowHeaderImageForm}>
                            Add/Update Header
                        </Button>
                        <Modal show={showHeaderImageForm} onHide={handleCloseHeaderImageUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Grievance Header</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleHeaderSubmit}>
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
                                    <td>{contact?.header}</td>
                                    <td>{contact?.caption}</td>
                                    <td>
                                        <div class="container">
                                            <img src={contact?.headerImage?.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                        {/* <Modal.Title>Home Header</Modal.Title> */}
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img
                                                            className="d-block w-100"
                                                            src={contact?.headerImage?.url}
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

                    {/* Contact Info */}
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
                                            name='phone'
                                            value={contactData.phone}
                                            onChange={handelInfoInput}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter the Heading"
                                            name='email'
                                            value={contactData.email}
                                            onChange={handelInfoInput}
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
                                    <td>{contact?.phone}</td>
                                    <td>{contact?.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>

                </div>
            </div>
        </>
    )
}

export default Contact