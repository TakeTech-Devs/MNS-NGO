import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';
import { useSelector, useDispatch } from 'react-redux';
import { getServices, clearErrors, createServicesHeader, createServices, createServicesImage, updateServiceImage } from '../../Actions/ServicesActions';
import { ADD_ADMIN_SERVICES_RESET, ADD_ADMIN_SERVICESHEADER_RESET, ADD_ADMIN_SERVICESIMAGE_RESET } from '../../Constants/ServicesConstants';
import Loader from '../Layouts/Loader';

const Services = () => {
    const [showHeaderForm, setShowHeaderForm] = useState(false);


    const handleShowHeaderForm = () => setShowHeaderForm(true);
    const handleCloseHeaderForm = () => setShowHeaderForm(false);


    const [showServicesForm, setShowServicesForm] = useState(false);

    const [showHeaderImageForm, setShowHeaderImageForm] = useState(false);


    const handleShowHeaderImageForm = () => setShowHeaderImageForm(true);
    const handleCloseHeaderImageUpdate = () => setShowHeaderImageForm(false);



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

    const { services: addServices, isUpdated, error: servicesError, loading: updateLoding } = useSelector(state => state.newServicesData);


    // const [header, setHeader] = useState('');
    // const [caption, setCaption] = useState('');
    const [headerData, setHeaderData] = useState({
        header: '',
        caption: '',
    })
    const [headerImage, setHeaderImage] = useState([]);

    const [servicesBodyHeader, setServicesBodyHeader] = useState('');
    const [servicesBodyContent, setServicesBodyContent] = useState('');


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);


    useEffect(() => {
        if (addServices) {
            setHeaderData({
                header: addServices.header,
                caption: addServices.caption,
            })
            setServicesBodyHeader(addServices.servicesBodyHeader);
            setServicesBodyContent(addServices.servicesBodyContent);
            setTitle(addServices.title);
            setDescription(addServices.description);
        }

        if (isUpdated) {
            window.alert('Section updated successfully');
            dispatch({ type: ADD_ADMIN_SERVICESHEADER_RESET });
            dispatch({ type: ADD_ADMIN_SERVICES_RESET });
            dispatch({ type: ADD_ADMIN_SERVICESIMAGE_RESET });
            window.location.reload()
        }

        if (servicesError) {
            window.alert(servicesError);
            dispatch(clearErrors());
        }
    }, [dispatch, isUpdated, addServices, servicesError])


    const handelHeaderImage = (e) => {
        setHeaderImage(e.target.files[0]);
    }

    const handleHeaderSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('headerImage', headerImage);

        dispatch(createServicesHeader(formData));
    }

    const handelHeaderInput = (e) => {
        setHeaderData({
            ...headerData,
            [e.target.name]: e.target.value,
        })
    }

    const handelHeaderInputSubmit = (e) => {
        e.preventDefault();
        dispatch(createServicesHeader(headerData));
    }

    const handleServiceSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("servicesBodyHeader", servicesBodyHeader);
        formData.append("servicesBodyContent", servicesBodyContent);
        dispatch(createServices(formData));
    }

    const handelServiceImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handelServiceImageSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append('image', image);

        dispatch(createServicesImage(formData))
    }

    const { isUpdated: serviceUpdate, error: serviceError } = useSelector((state) => state.Service);

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const handleShowEditModal = (item) => {
        setSelectedItem(item);
        setTitle(item.title);
        setDescription(item.description);
        setImage(item.image.url);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => setShowEditModal(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
        dispatch(updateServiceImage(selectedItem._id, formData));
        setShowEditModal(false);
    };

    const handleUpdateServiceImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    useEffect(() => {
        if (serviceUpdate) {
            window.alert('Service updated successfully');
            window.location.reload();
        }
        if (serviceError) {
            window.alert(serviceError);
        }
    }, [serviceUpdate, serviceError]);




    return (
        <>
            {loading && <Loader />}
            {updateLoding && <Loader />}
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
                                <Form onSubmit={handelHeaderInputSubmit}>

                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Carousel Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            name='header'
                                            value={headerData.header}
                                            onChange={handelHeaderInput}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Carousel Caption</Form.Label>
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
                                    <td>{services?.header}</td>
                                    <td>{services?.caption}</td>
                                    <td>
                                        <div class="container">
                                            <img src={services?.headerImage?.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                        {/* <Modal.Title>Home Header</Modal.Title> */}
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={services?.headerImage?.url} alt="Image" className="d-block w-100" />
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
                                <Form onSubmit={handleServiceSubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            value={servicesBodyHeader}
                                            onChange={(e) => setServicesBodyHeader(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Caption</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter the Sub Heading"
                                            value={servicesBodyContent}
                                            onChange={(e) => setServicesBodyContent(e.target.value)}
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
                                <Form onSubmit={handelServiceImageSubmit}>
                                    <Form.Group className="mb-3" controlId="updateFormHeadingInput">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="updateFormSubHeadingInput">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter the Sub Heading"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Enter any Image"
                                            onChange={handelServiceImageChange}
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
                                    <td>{services?.servicesBodyHeader}</td>
                                    <td>{services?.servicesBodyContent}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>


                    <main className="admin-content">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>

                                {ourServices.map((service, index) => (
                                    <tr key={service._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{service.title}</td>
                                        <td>{service.description}</td>
                                        <td>
                                            <img src={service.image.url} alt={service.title} className="image" width="100" />
                                        </td>
                                        <td>
                                            <Button variant="primary" onClick={() => handleShowEditModal(service)}>
                                                Edit
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>

                    <Modal show={showEditModal} onHide={handleCloseEditModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Service</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleUpdate}>
                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formImage">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={handleUpdateServiceImageChange}
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

export default Services