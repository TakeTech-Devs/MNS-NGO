import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';
import { useSelector, useDispatch } from 'react-redux';
import { getGallery, clearErrors, createGalleryHeader, createGalleryBody, createGalleryImage, updateGalleryImage } from '../../Actions/GalleryActions';
import { ADD_ADMIN_GALLERY_BODY_RESET, ADD_ADMIN_GALLERY_IMAGE_RESET, ADD_ADMIN_GALLERYHEADER_RESET, UPDATE_ADMIN_GALLERY_IMAGE_RESET } from '../../Constants/GalleryConstants';

const Gallery = () => {

    const dispatch = useDispatch();
    const { gallery, galleryImages, loading, error } = useSelector(state => state.adminGallery)

    useEffect(() => {
        dispatch(getGallery());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);

    const [showHeaderForm, setShowHeaderForm] = useState(false);


    const handleShowHeaderForm = () => setShowHeaderForm(true);
    const handleCloseHeaderUpdate = () => setShowHeaderForm(false);

    const [showHeaderImageForm, setShowHeaderImageForm] = useState(false);


    const handleShowHeaderImageForm = () => setShowHeaderImageForm(true);
    const handleCloseHeaderImageUpdate = () => setShowHeaderImageForm(false);

    const [showGalleryHeaderForm, setShowGalleryHeaderForm] = useState(false);

    const handleShowGalleryHeaderForm = () => setShowGalleryHeaderForm(true);
    const handleCloseGalleryHeaderForm = () => setShowGalleryHeaderForm(false);


    const [showGalleryImage, setShowGalleryImage] = useState(false);


    const handleShowGalleryImageForm = () => setShowGalleryImage(true);
    const handleCloseGalleryImageForm = () => setShowGalleryImage(false);

    const [showCarousel, setShowCarousel] = useState(false);



    const handleShowCarouse = () => setShowCarousel(true);
    const handleCloseCarouse = () => setShowCarousel(false);


    const { gallery: newGallery, isUpdated, error: galleryError, } = useSelector(state => state.newGalleryData);

    const [headerData, setHeaderData] = useState({
        header: '',
        caption: '',
        galleryHeader: '',
        galleryContent: '',
    })
    const [headerImage, setHeaderImage] = useState([]);

    const [galleryHeader, setGalleryHeader] = useState('');
    const [galleryContent, setGalleryContent] = useState('');

    const [image, setImage] = useState(null);


    useEffect(() => {
        if (newGallery) {
            setHeaderData({
                header: newGallery.header,
                caption: newGallery.caption,
                galleryHeader: newGallery.galleryHeader,
                galleryContent: newGallery.galleryContent,
            })
        }

        if (isUpdated) {
            window.alert('Section updated successfully');
            dispatch({ type: ADD_ADMIN_GALLERYHEADER_RESET });
            dispatch({ type: ADD_ADMIN_GALLERY_BODY_RESET });
            dispatch({ type: ADD_ADMIN_GALLERY_IMAGE_RESET });
            window.location.reload();
        }

        if (galleryError) {
            window.alert(galleryError);
            dispatch(clearErrors());
        }
    }, [dispatch, isUpdated, newGallery, galleryError]);


    const handelHeaderImage = (e) => {
        setHeaderImage(e.target.files[0]);
    }


    const handleHeaderSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('headerImage', headerImage);

        dispatch(createGalleryHeader(formData));
    }

    const handelHeaderInput = (e) =>{
        setHeaderData({
            ...headerData,
            [e.target.name]: e.target.value,
        })
    }

    const handelHeaderInputSubmit = (e) =>{
        e.preventDefault();
        dispatch(createGalleryHeader(headerData));
    }


    const handleBodySubmit = (e) => {
        e.preventDefault();
        dispatch(createGalleryBody(headerData));
    }


    const handelGalleryImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handelGalleryImageSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        dispatch(createGalleryImage(formData))
    }


    const { isUpdated: imageUpdate, error: imageError } = useSelector((state) => state.GalleryReducer);


    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleShowEditModal = (item) => {
        setSelectedItem(item);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setSelectedItem(null);
        setShowEditModal(false);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (image) {
            formData.append('image', image);
        }

        dispatch(updateGalleryImage(selectedItem._id, formData));
        setShowEditModal(false);
    };

    const handleUpdateGalleryImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    useEffect(() => {
        if (imageUpdate) {
            window.alert('Service updated successfully');
            dispatch({ type: UPDATE_ADMIN_GALLERY_IMAGE_RESET });
            window.location.reload();
        }
        if (imageError) {
            window.alert(imageError);
        }
    }, [imageUpdate, imageError]);


    return (
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main">
                    <AdminHeader />

                    {/* Gallery Header */}
                    <div className="mb-2 my-3 mx-3">
                        <h2>Gallery Header</h2>
                        <Button variant="primary" size="sm" onClick={handleShowHeaderForm}>
                            Add/Update Heading
                        </Button>
                        <Modal show={showHeaderForm} onHide={handleCloseHeaderUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Gallery Header</Modal.Title>
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
                                    <td>{gallery?.header}</td>
                                    <td>{gallery?.caption}</td>
                                    <td>
                                        <div class="container">
                                            <img src={gallery?.headerImage?.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                        {/* <Modal.Title>Home Header</Modal.Title> */}
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img
                                                            className="d-block w-100"
                                                            src={gallery?.headerImage?.url}
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

                    {/* Gallery Image */}


                    <div className="mb-2 my-3 mx-3">
                        <h2>Gallery</h2>
                        <Button variant="primary" size="sm" onClick={handleShowGalleryHeaderForm}>
                            Add/Update Gallary
                        </Button>
                        <Modal show={showGalleryHeaderForm} onHide={handleCloseGalleryHeaderForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>Gallery Heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleBodySubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            name='galleryHeader'
                                            value={headerData.galleryHeader}
                                            onChange={handelHeaderInput}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Caption</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter the Sub Heading"
                                            name='galleryContent'
                                            value={headerData.galleryContent}
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
                        <Button variant="primary" size="sm" onClick={handleShowGalleryImageForm}>
                            Add Gallery Image
                        </Button>
                        <Modal show={showGalleryImage} onHide={handleCloseGalleryImageForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>Gallery Image</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handelGalleryImageSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Enter any Image"
                                            onChange={handelGalleryImageChange}
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
                                    <td>{gallery?.galleryHeader}</td>
                                    <td>{gallery?.galleryContent}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>

                    <main className="admin-content">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {galleryImages.map((gallery, index) => (
                                    <tr key={gallery._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <img
                                                src={gallery.image.url}
                                                alt={gallery.title}
                                                className="image"
                                                width="100"
                                            />
                                        </td>
                                        <td>
                                            <Button variant="primary" onClick={() => handleShowEditModal(gallery)}>
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
                            <Modal.Title>Edit Image</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleUpdate}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={handleUpdateGalleryImageChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>

                </div>
            </div>
    )
}

export default Gallery