import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';
import { useSelector, useDispatch } from 'react-redux';
import { getGrievance, clearErrors, createGrievanceHeader } from '../../Actions/GrievanceActions';
import { ADD_GRIEVANCEHEADER_GRIEVANCE_RESET } from '../../Constants/GrievanceConstants';

const Grievance = () => {
    const [showHeaderForm, setShowHeaderForm] = useState(false);


    const handleShowHeaderForm = () => setShowHeaderForm(true);
    const handleCloseHeaderUpdate = () => setShowHeaderForm(false);


    const [showHeaderImageForm, setShowHeaderImageForm] = useState(false);


    const handleShowHeaderImageForm = () => setShowHeaderImageForm(true);
    const handleCloseHeaderImageUpdate = () => setShowHeaderImageForm(false);

    const [showCarousel, setShowCarousel] = useState(false);



    const handleShowCarouse = () => setShowCarousel(true);
    const handleCloseCarouse = () => setShowCarousel(false);

    const dispatch = useDispatch();
    const { grievance, loading, error } = useSelector(state => state.adminGrievance);

    useEffect(() => {
        dispatch(getGrievance());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);

    const { grievance:addGrievance, isUpdated, error: grievanceError} = useSelector(state => state.newGrievanceData);


    const [headerData, setHeaderData] = useState({
        header: '',
        caption: '',
    })
    const [headerImage, setHeaderImage] = useState([]);

    useEffect(() => {
        if(addGrievance){
            setHeaderData({
                header: addGrievance.header,
                caption: addGrievance.caption,
            })
        }

        if (isUpdated) {
            window.alert('Section updated successfully');
            dispatch({ type: ADD_GRIEVANCEHEADER_GRIEVANCE_RESET });
            window.location.reload()
        }

        if(grievanceError){
            window.alert(grievanceError);
            dispatch(clearErrors());
        }
    },[dispatch, isUpdated, addGrievance, grievanceError])

    const handelHeaderImage = (e) => {
        setHeaderImage(e.target.files[0]);
    }

    const handleHeaderSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('headerImage', headerImage);

        dispatch(createGrievanceHeader(formData));
    }

    const handelHeaderInput = (e) =>{
        setHeaderData({
            ...headerData,
            [e.target.name]: e.target.value,
        })
    }

    const handelHeaderInputSubmit = (e) =>{
        e.preventDefault();
        dispatch(createGrievanceHeader(headerData));
    }




    return (
        grievance && grievance.length > 0 && (
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main" style={{ height: "100vh" }}>
                    <AdminHeader />

                    {/* Grievance Header */}
                    <div className="mb-2 my-3 mx-3">
                        <h2>Grievance Header</h2>
                        <Button variant="primary" size="sm" onClick={handleShowHeaderForm}>
                            Add/Update Header
                        </Button>
                        <Modal show={showHeaderForm} onHide={handleCloseHeaderUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Grievance Header</Modal.Title>
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
                                    <td>{grievance[0].header}</td>
                                    <td>{grievance[0].caption}</td>
                                    <td>
                                    <div class="container">
                                            <img src={grievance[0].headerImage.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={grievance[0].headerImage.url} alt="Image" className="d-block w-100" />
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>


                </div>
            </div>
        )
    )
}

export default Grievance