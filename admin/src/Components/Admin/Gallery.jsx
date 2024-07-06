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

    const [header, setHeader] = useState('');
    const [caption, setCaption] = useState('');
    const [headerImage, setHeaderImage] = useState([]);

    const [galleryHeader, setGalleryHeader] = useState('');
    const [galleryContent, setGalleryContent] = useState('');

    const [image, setImage] = useState(null);


    useEffect(() => {
        if (newGallery) {
            setHeader(newGallery.header);
            setCaption(newGallery.caption);
            setGalleryHeader(newGallery.galleryHeader);
            setGalleryContent(newGallery.galleryContent);
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
        formData.append("header", header);
        formData.append("caption", caption);
        formData.append('headerImage', headerImage);

        dispatch(createGalleryHeader(formData));
    }

    const handleBodySubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("galleryHeader", galleryHeader);
        formData.append("galleryContent", galleryContent);

        dispatch(createGalleryBody(formData));
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
        gallery && gallery.length > 0 && (
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
                                    <td>{gallery[0].header}</td>
                                    <td>{gallery[0].caption}</td>
                                    <td>
                                        <div class="container">
                                            <img src={gallery[0].headerImage.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                        {/* <Modal.Title>Home Header</Modal.Title> */}
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img
                                                            className="d-block w-100"
                                                            src={gallery[0].headerImage.url}
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

                    {/* Gallery Services */}


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
                                            value={galleryHeader}
                                            onChange={(e) => setGalleryHeader(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Caption</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Sub Heading"
                                            value={galleryContent}
                                            onChange={(e) => setGalleryContent(e.target.value)}
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
                                    <td>{gallery[0].galleryHeader}</td>
                                    <td>{gallery[0].galleryContent}</td>
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
    )
}

export default Gallery