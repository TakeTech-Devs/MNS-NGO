import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';
import { useSelector, useDispatch } from 'react-redux';
import { getServices, clearErrors } from '../../Actions/ServicesActions';

const Services = () => {
    const [showHeaderForm, setShowHeaderForm] = useState(false);


    const handleShowHeaderForm = () => setShowHeaderForm(true);
    const handleCloseHeaderForm = () => setShowHeaderForm(false);


    const [showServicesForm, setShowServicesForm] = useState(false);



    const handleShowServicesForm = () => setShowServicesForm(true);
    const handleCloseServicesFrom = () => setShowServicesForm(false);


    const [showServicesImageForm, setShowServicesImageForm] = useState(false);


    const handleShowServicesImageForm = () => setShowServicesImageForm(true);
    const handleCloseServicesImageForm = () => setShowServicesImageForm(false);

    const [showCarousel, setShowCarousel] = useState(false);



    const handleShowCarouse = () => setShowCarousel(true);
    const handleCloseCarouse = () => setShowCarousel(false);

    const dispatch = useDispatch();
    const { services, ourServices, loading, error } = useSelector(state => state.adminServices);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);





    return (
        services && services.length > 0 && (
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main">
                    <AdminHeader />

                    {/* Services Header */}
                    <div className="mb-2 my-3 mx-3">
                        <h2>Services Header</h2>
                        <Button variant="primary" size="sm" onClick={handleShowHeaderForm}>
                            Add/Update Header
                        </Button>
                        <Modal show={showHeaderForm} onHide={handleCloseHeaderForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>Services Header</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>

                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Carousel Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Carousel Caption</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Caption"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Carousel Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Enter any Image"
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
                                    <td>{services[0].header}</td>
                                    <td>{services[0].caption}</td>
                                    <td>
                                        <div class="container">
                                            <img src={services[0].headerImage.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                        {/* <Modal.Title>Home Header</Modal.Title> */}
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={services[0].headerImage.url} alt="Image" className="d-block w-100" />
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>


                    {/* Services Services */}


                    <div className="mb-2 my-3 mx-3">
                        <h2>Services Services</h2>
                        <Button variant="primary" size="sm" onClick={handleShowServicesForm}>
                            Add/Update Our Services
                        </Button>
                        <Modal show={showServicesForm} onHide={handleCloseServicesFrom}>
                            <Modal.Header closeButton>
                                <Modal.Title>Services Heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Caption</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Sub Heading"
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                        {' '}
                        <Button variant="primary" size="sm" onClick={handleShowServicesImageForm}>
                            Add Services Image
                        </Button>
                        <Modal show={showServicesImageForm} onHide={handleCloseServicesImageForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>Services Image</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>

                                    <Form.Group className="mb-3" controlId="updateFormHeadingInput">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="updateFormSubHeadingInput">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Sub Heading"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Enter any Image"
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{services[0].header}</td>
                                    <td>{services[0].caption}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>


                    <main className="admin-content">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>

                                {ourServices.map((service) => (
                                    <tr key={service._id}>
                                        <td>{service.title}</td>
                                        <td>{service.description}</td>
                                        <td>
                                            <img
                                                src={service.image.url}
                                                alt={service.title}
                                                className="image"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>


                </div>
            </div>
        )
    )
}

export default Services