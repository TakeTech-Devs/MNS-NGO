import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';
import { useSelector, useDispatch } from 'react-redux';
import { getGoverning, clearErrors, createGoverningHeader, createGoverningBody } from '../../Actions/GoverningAction';
import { ADD_GOVERNINGBODY_GOVERNING_RESET, ADD_GOVERNINGHEADER_GOVERNING_RESET } from '../../Constants/GoverningConstants';

const Governing = () => {
    const [showHeaderForm, setShowHeaderForm] = useState(false);


    const handleShowHeaderForm = () => setShowHeaderForm(true);
    const handleCloseHeaderUpdate = () => setShowHeaderForm(false);

    const [showHeaderImageForm, setShowHeaderImageForm] = useState(false);


    const handleShowHeaderImageForm = () => setShowHeaderImageForm(true);
    const handleCloseHeaderImageUpdate = () => setShowHeaderImageForm(false);

    const [showBodyForm, setShowBodyForm] = useState(false);


    const handleShowBodyForm = () => setShowBodyForm(true);
    const handleCloseBodyForm = () => setShowBodyForm(false);

    const [showCarousel, setShowCarousel] = useState(false);



    const handleShowCarouse = () => setShowCarousel(true);
    const handleCloseCarouse = () => setShowCarousel(false);

    const dispatch = useDispatch();
    const { goveringBody, loading, error } = useSelector(state => state.adminGoverning);

    useEffect(() => {
        dispatch(getGoverning());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);

    const { governing, isUpdated, error: governingError } = useSelector(state => state.newGoverningData);

    const [headerData, setHeaderData] = useState({
        header: '',
        caption: '',
    })
    const [headerImage, setHeaderImage] = useState([]);

    const [goveringBodyHeader, setGoveringBodyHeader] = useState('');
    const [goveringBodyContent, setGoveringBodyContent] = useState('');

    useEffect(() => {
        if (governing) {
            setHeaderData({
                header: governing.header,
                caption: governing.caption,
            })
            setGoveringBodyHeader(governing.goveringBodyHeader);
            setGoveringBodyContent(governing.goveringBodyContent);
        }

        if (isUpdated) {
            window.alert('Section updated successfully');
            dispatch({ type: ADD_GOVERNINGHEADER_GOVERNING_RESET });
            dispatch({ type: ADD_GOVERNINGBODY_GOVERNING_RESET });
            window.location.reload()
        }

        if (governingError) {
            window.alert(governingError);
            dispatch(clearErrors());
        }
    }, [dispatch, isUpdated, governing, governingError])

    const handelHeaderImage = (e) => {
        setHeaderImage(e.target.files[0]);
    }


    const handleHeaderSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('headerImage', headerImage);

        dispatch(createGoverningHeader(formData));
    }

    const handelHeaderInput = (e) => {
        setHeaderData({
            ...headerData,
            [e.target.name]: e.target.value,
        })
    }

    const handelHeaderInputSubmit = (e) => {
        e.preventDefault();
        dispatch(createGoverningHeader(headerData));
    }


    const handleBodySubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("goveringBodyHeader", goveringBodyHeader);
        formData.append("goveringBodyContent", goveringBodyContent);

        dispatch(createGoverningBody(formData));
    }



    return (
        goveringBody && goveringBody.length > 0 && (
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main" style={{ height: "100vh" }}>
                    <AdminHeader />

                    {/* Governing Header */}
                    <div className="mb-2 my-3 mx-3">
                        <h2>Governing Header</h2>
                        <Button variant="primary" size="sm" onClick={handleShowHeaderForm}>
                            Add/Update Header
                        </Button>
                        <Modal show={showHeaderForm} onHide={handleCloseHeaderUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Governing Header</Modal.Title>
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
                                    <td>{goveringBody[0].header}</td>
                                    <td>{goveringBody[0].caption}</td>
                                    <td>
                                        <div class="container">
                                            <img src={goveringBody[0].headerImage.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                        {/* <Modal.Title>Home Header</Modal.Title> */}
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img
                                                            className="d-block w-100"
                                                            src={goveringBody[0].headerImage.url}
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

                    {/* Governing Highlight */}
                    <div className="mb-2 my-3 mx-3">
                        <h2>Governing Body</h2>
                        <Button variant="primary" size="sm" onClick={handleShowBodyForm}>
                            Add/Update Body
                        </Button>
                        <Modal show={showBodyForm} onHide={handleCloseBodyForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>Governing Body</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleBodySubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Body Header</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            value={goveringBodyHeader}
                                            onChange={(e) => setGoveringBodyHeader(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Body Caption</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter the Heading"
                                            value={goveringBodyContent}
                                            onChange={(e) => setGoveringBodyContent(e.target.value)}
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
                                    <th scope="col">Header</th>
                                    <th scope="col">Caption</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{goveringBody[0].goveringBodyHeader}</td>
                                    <td>{goveringBody[0].goveringBodyContent}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>



                </div>
            </div>
        )
    )
}

export default Governing