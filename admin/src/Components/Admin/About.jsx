import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAbout, clearErrors } from '../../Actions/AboutActions';

const About = () => {

    const [showHeaderForm, setShowHeaderForm] = useState(false);


    const handleShowHeaderForm = () => setShowHeaderForm(true);
    const handleCloseHeaderUpdate = () => setShowHeaderForm(false);


    const [showImageForm, setShowImageForm] = useState(false);



    const handleShowImageForm = () => setShowImageForm(true);
    const handleCloseImageForm = () => setShowImageForm(false);


    const [showValuesForm, setShowValuesForm] = useState(false);



    const handleShowValuesForm = () => setShowValuesForm(true);
    const handleCloseValuesForm = () => setShowValuesForm(false);


    const [showValueImageForm, setShowValueImageForm] = useState(false);


    const handleShowValueImageForm = () => setShowValueImageForm(true);
    const handleCloseValueImageForm = () => setShowValueImageForm(false);


    const [showInvolvedForm, setShowInvolvedForm] = useState(false);



    const handleShowInvolvedForm = () => setShowInvolvedForm(true);
    const handleCloseInvolvedForm = () => setShowInvolvedForm(false);

    const [showCarousel, setShowCarousel] = useState(false);



    const handleShowCarouse = () => setShowCarousel(true);
    const handleCloseCarouse = () => setShowCarousel(false);


    const [showImageOne, setShowImageOne] = useState(false);



    const handleShowImageOne = () => setShowImageOne(true);
    const handleCloseImageOne = () => setShowImageOne(false);


    const [showImageTwo, setShowImageTwo] = useState(false);



    const handleShowImageTwo = () => setShowImageTwo(true);
    const handleCloseImageTwo = () => setShowImageTwo(false);


    const [showImageThree, setShowImageThree] = useState(false);



    const handleShowImageThree = () => setShowImageThree(true);
    const handleCloseImageThree = () => setShowImageThree(false);


    const [showImageFour, setShowImageFour] = useState(false);



    const handleShowImageFour = () => setShowImageFour(true);
    const handleCloseImageFour = () => setShowImageFour(false);

    const [showImageInvolved, setShowImageInvolved] = useState(false);



    const handleShowImageInvolved = () => setShowImageInvolved(true);
    const handleCloseImageInvolved = () => setShowImageInvolved(false);


    const dispatch = useDispatch();
    const { about, valueImage, error } = useSelector(state => state.adminAbout);

    useEffect(() => {
        dispatch(getAbout());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);



    return (
        about && about.length > 0 && (
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main">
                    <AdminHeader />

                    {/* About Header */}
                    <div className="mb-2 my-3 mx-3">
                        <h2>About Header</h2>
                        <Button variant="primary" size="sm" onClick={handleShowHeaderForm}>
                            Add/Update Header
                        </Button>
                        <Modal show={showHeaderForm} onHide={handleCloseHeaderUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>About Header</Modal.Title>
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
                                    <td>{about[0].header}</td>
                                    <td>{about[0].caption}</td>
                                    <td>
                                        <div class="container">
                                            <img src={about[0].headerImage.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={about[0].headerImage.url} alt="Image" className="d-block w-100" />
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>

                    {/* About Highlight */}
                    <div className="mb-2 my-3 mx-3">
                        <h2>About Images</h2>
                        <Button variant="primary" size="sm" onClick={handleShowImageForm}>
                            Add/Update Image
                        </Button>
                        <Modal show={showImageForm} onHide={handleCloseImageForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>About Image</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>First Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Enter any Image"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Second Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Enter any Image"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Third Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Enter any Image"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Forth Image</Form.Label>
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
                                    <th scope="col">First</th>
                                    <th scope="col">Second</th>
                                    <th scope="col">Third</th>
                                    <th scope="col">Forth</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="container">
                                            <img src={about[0].images[0].url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowImageOne}></i>
                                                <Modal show={showImageOne} onHide={handleCloseImageOne}>
                                                    <Modal.Header closeButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={about[0].images[0].url} alt="Image" className="d-block w-100" />
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="container">
                                            <img src={about[0].images[1].url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowImageTwo}></i>
                                                <Modal show={showImageTwo} onHide={handleCloseImageTwo}>
                                                    <Modal.Header closeButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={about[0].images[1].url} alt="Image" className="d-block w-100" />
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="container">
                                            <img src={about[0].images[2].url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowImageThree}></i>
                                                <Modal show={showImageThree} onHide={handleCloseImageThree}>
                                                    <Modal.Header closeButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={about[0].images[2].url} alt="Image" className="d-block w-100" />
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="container">
                                            <img src={about[0].images[3].url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowImageFour}></i>
                                                <Modal show={showImageFour} onHide={handleCloseImageFour}>
                                                    <Modal.Header closeButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={about[0].images[3].url} alt="Image" className="d-block w-100" />
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>


                    {/* About About */}

                    <div className="mb-2 my-3 mx-3">
                        <h2>About Values</h2>
                        <Button variant="primary" size="sm" onClick={handleShowValuesForm}>
                            Add/Update Values
                        </Button>
                        <Modal show={showValuesForm} onHide={handleCloseValuesForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>About Values</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Value Header</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Value Caption</Form.Label>
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
                        <Button variant="primary" size="sm" onClick={handleShowValueImageForm}>
                            Add Value Image
                        </Button>
                        <Modal show={showValueImageForm} onHide={handleCloseValueImageForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>Service Image</Modal.Title>
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
                                    <th scope="col">Value Header</th>
                                    <th scope="col">Value Caption</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{about[0].ourValuesHeader}</td>
                                    <td>{about[0].ourValuesContent}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>

                    <main className="admin-content">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {valueImage && valueImage.map((value, index) => (
                                    <tr key={index} className="ValuePoints">
                                        <td>{value.title}</td>
                                        <td><img src={value.image.url} alt={value.title} className="image" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>



                    {/* About Services */}


                    <div className="mb-2 my-3 mx-3">
                        <h2>About Get Involved</h2>
                        <Button variant="primary" size="sm" onClick={handleShowInvolvedForm}>
                            Add/Update Get Involved
                        </Button>
                        <Modal show={showInvolvedForm} onHide={handleCloseInvolvedForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>About Get Involved</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Get Involved Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Get Involved Caption</Form.Label>
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
                        {' '}
                    </div>


                    <main className="admin-content">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Get Involved Heading</th>
                                    <th scope="col">Get Involved Caption</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{about[0].getInvolvedHeader}</td>
                                    <td>{about[0].getInvolvedCaption}</td>
                                    <td>
                                        <div class="container">
                                            <img src={about[0].getInvolvedImage.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowImageInvolved}></i>
                                                <Modal show={showImageInvolved} onHide={handleCloseImageInvolved}>
                                                    <Modal.Header closeButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={about[0].getInvolvedImage.url} alt="Image" className="d-block w-100" />
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


export default About