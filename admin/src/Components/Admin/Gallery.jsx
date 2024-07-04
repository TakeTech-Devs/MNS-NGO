import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';
import { useSelector, useDispatch } from 'react-redux';
import { getGallery, clearErrors } from '../../Actions/GalleryActions';

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
                                            placeholder="Enter the Caption"
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
                        <Button variant="primary" size="sm" onClick={handleShowGalleryImageForm}>
                            Add Gallery Image
                        </Button>
                        <Modal show={showGalleryImage} onHide={handleCloseGalleryImageForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>Gallery Image</Modal.Title>
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
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {galleryImages.map((gallery) => (
                                    <tr key={gallery._id}>
                                        <td>
                                            <img
                                                src={gallery.image.url}
                                                alt={gallery.title}
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

export default Gallery