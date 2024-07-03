import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';
import './Home.css';
import img from "../../assets/images/rectangle4.png";
import Carousel from 'react-bootstrap/Carousel';
import { getHome, clearErrors, createHighlight, createHomeHeader, createAbout, createVision, createJoinUs, createServiceCarousel, updateServiceCarousel, createServiceHead } from '../../Actions/HomeActions';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ABOUT_HOME_RESET, ADD_HIGHTLIGHT_HOME_RESET, ADD_HOMEHEADER_HOME_RESET, ADD_JOINUS_HOME_RESET, ADD_SERVICEHEAD_HOME_RESET, ADD_SERVICE_HOME_RESET, ADD_VISION_HOME_RESET } from '../../Constants/HomeConstants';

const Home = () => {
    const [showFormModal, setShowFormModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleCloseFormModal = () => setShowFormModal(false);
    const handleShowFormModal = () => setShowFormModal(true);

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);


    const [showHeaderForm, setShowHeaderForm] = useState(false);
    const [showHeaderUpdate, setShowHeaderUpdate] = useState(false);


    const handleShowHeaderForm = () => setShowHeaderForm(true);
    const handleCloseHeaderUpdate = () => setShowHeaderForm(false);

    const [showHighlightForm, setShowHighlightForm] = useState(false);



    const handleShowHighlightForm = () => setShowHighlightForm(true);
    const handleCloseHighlightUpdate = () => setShowHighlightForm(false);


    const [showAboutForm, setShowAboutForm] = useState(false);



    const handleShowAboutForm = () => setShowAboutForm(true);
    const handleCloseAboutUpdate = () => setShowAboutForm(false);


    const [showServicesForm, setShowServicesForm] = useState(false);



    const handleShowServicesForm = () => setShowServicesForm(true);
    const handleCloseServicesUpdate = () => setShowServicesForm(false);


    const [showVisionForm, setShowVisionForm] = useState(false);



    const handleShowVisionForm = () => setShowVisionForm(true);
    const handleCloseVisionUpdate = () => setShowVisionForm(false);


    const [showJoinUsForm, setJoinUsVisionForm] = useState(false);



    const handleShowJoinUsForm = () => setJoinUsVisionForm(true);
    const handleCloseJoinUsUpdate = () => setJoinUsVisionForm(false);


    const [showCarousel, setShowCarousel] = useState(false);



    const handleShowCarouse = () => setShowCarousel(true);
    const handleCloseCarouse = () => setShowCarousel(false);


    const [showAboutImage, setAboutImage] = useState(false);


    const handleShowAboutImage = () => setAboutImage(true);
    const handleCloseAboutImage = () => setAboutImage(false);

    const [showVisionFirst, setVisionFirst] = useState(false);


    const handleShowVisionFirst = () => setVisionFirst(true);
    const handleCloseVisionFirst = () => setVisionFirst(false);

    const [showVisionSecond, setVisionSecond] = useState(false);


    const handleShowVisionSecond = () => setVisionSecond(true);
    const handleCloseVisionSecond = () => setVisionSecond(false);

    const [showVisionThird, setVisionThird] = useState(false);


    const handleShowVisionThird = () => setVisionThird(true);
    const handleCloseVisionThird = () => setVisionThird(false);


    const [showJoinUs, setJoinUs] = useState(false);


    const handleShowJoinUs = () => setJoinUs(true);
    const handleCloseJoinUs = () => setJoinUs(false);


    const dispatch = useDispatch();
    const { home, homeCarousel, loading, error } = useSelector(state => state.adminHome);

    useEffect(() => {
        dispatch(getHome());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);

    const firstCarouselImage = home && home.carouselImage && home.carouselImage.length > 0 ? home.carouselImage[0].url : '';

    const { highlight, error: newHomeDataError, isUpdated, carouselSection, about, vision, joinUs, service, serviceHead } = useSelector(state => state.newHomeData);

    const { isUpdated: serviceUpdate, error: serviceError } = useSelector((state) => state.homeService);



    // carousel
    const [carouselText, setCarouselText] = useState('');
    const [carouselCaption, setCarouselCaption] = useState('');
    const [images, setImages] = useState([]);

    // hightlight
    const [formData, setFormData] = useState({
        highlightHeaderFirst: '',
        highlightCaptionFirst: '',
        highlightHeaderSecond: '',
        highlightCaptionSecond: '',
        highlightHeaderThird: '',
        highlightCaptionThird: '',
    });




    // about
    const [aboutHeader, setAboutHeader] = useState('');
    const [aboutCaption, setAboutCaption] = useState('');
    const [aboutContent, setAboutContent] = useState('');
    const [aboutImage, setaboutImage] = useState([]);

    // vision
    const [visionHeader, setVisionHeader] = useState('');
    const [visionCaption, setVisionCaption] = useState('');
    const [visionImageFirst, setVisionImageFirst] = useState([]);
    const [visionHeaderFirst, setVisionHeaderFirst] = useState('');
    const [visionCaptionFirst, setVisionCaptionFirst] = useState('');
    const [visionImageSecond, setVisionImageSecond] = useState([]);
    const [visionHeaderSecond, setVisionHeaderSecond] = useState('');
    const [visionCaptionSecond, setVisionCaptionSecond] = useState('');
    const [visionImageThird, setVisionImageThird] = useState([]);
    const [visionHeaderThird, setVisionHeaderThird] = useState('');
    const [visionCaptionThird, setVisionCaptionThird] = useState('');

    // Join Us 
    const [joinUsHeader, setJoinUsHeader] = useState('');
    const [joinUsCaption, setJoinUsCaption] = useState('');
    const [joinUsImage, setJoinUsImage] = useState(null);

    // service head

    const [serviceData, setServiceData] = useState ({
        serviceHeader: '',
        serviceCaption: ''
    })

    // service

    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);

    // update service

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const handleShowEditModal = (item) => {
        setSelectedItem(item);
        setTitle(item.title);
        setImage(item.image.url);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => setShowEditModal(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        if (image) {
            formData.append('image', image);
        }

        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        dispatch(updateServiceCarousel(selectedItem._id, formData));
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






    useEffect(() => {
        if (highlight) {
            setFormData({
                highlightHeaderFirst: highlight.highlightHeaderFirst || '',
                highlightCaptionFirst: highlight.highlightCaptionFirst || '',
                highlightHeaderSecond: highlight.highlightHeaderSecond || '',
                highlightCaptionSecond: highlight.highlightCaptionSecond || '',
                highlightHeaderThird: highlight.highlightHeaderThird || '',
                highlightCaptionThird: highlight.highlightCaptionThird || ''
            });
        }

        if (carouselSection) {
            setCarouselText(carouselSection.carouselText || '');
            setCarouselCaption(carouselSection.carouselCaption || '');
        }

        if (about) {
            setAboutHeader(about.aboutHeader || '');
            setAboutCaption(about.aboutCaption || '');
            setAboutContent(about.aboutContent || '');
        }

        if (serviceHead) {
            setServiceData({
                servicesHeader: serviceHead.servicesHeader || '',
                servicesCaption: serviceHead.servicesCaption || ''
            })
        }

        if (service) {
            setTitle(service.title || '');
        }

        if (vision) {
            setVisionHeader(vision.visionHeader || '');
            setVisionCaption(vision.visionCaption || '');
            setVisionHeaderFirst(vision.visionHeaderFirst || '');
            setVisionCaptionFirst(vision.visionCaptionFirst || '');
            setVisionHeaderSecond(vision.visionHeaderSecond || '');
            setVisionCaptionSecond(vision.visionCaptionSecond || '');
            setVisionHeaderThird(vision.visionHeaderThird || '');
            setVisionCaptionThird(vision.visionCaptionThird || '');
        }

        if (joinUs) {
            setJoinUsHeader(joinUs.joinUsHeader || '');
            setJoinUsCaption(joinUs.joinUsCaption || '');
        }


        if (newHomeDataError) {
            window.alert(newHomeDataError);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            window.alert('Section updated successfully');
            dispatch({ type: ADD_HOMEHEADER_HOME_RESET });
            dispatch({ type: ADD_HIGHTLIGHT_HOME_RESET });
            dispatch({ type: ADD_ABOUT_HOME_RESET });
            dispatch({ type: ADD_SERVICEHEAD_HOME_RESET });
            dispatch({ type: ADD_SERVICE_HOME_RESET });
            dispatch({ type: ADD_VISION_HOME_RESET });
            dispatch({ type: ADD_JOINUS_HOME_RESET });
            window.location.reload()
        }

    }, [dispatch, highlight, newHomeDataError, isUpdated, carouselSection, about, vision, joinUs, service, serviceHead])


    // highlight
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleHighlightSubmit = (e) => {
        e.preventDefault();
        dispatch(createHighlight(formData));
    };




    // carousel
    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleCarouselSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('carouselText', carouselText);
        formData.append('carouselCaption', carouselCaption);
        images.forEach(image => formData.append('carouselImage', image));

        console.log("data", formData);

        dispatch(createHomeHeader(formData));
    };



    // about
    const handleAboutImageChange = (e) => {
        setaboutImage([...e.target.files]);
    };

    const handleAboutSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("aboutHeader", aboutHeader);
        formData.append("aboutCaption", aboutCaption);
        formData.append("aboutContent", aboutContent);
        aboutImage.forEach(image => formData.append('aboutImage', image));

        dispatch(createAbout(formData));
    }

    // vision

    const handelVisionFirstImageChange = (e) => {
        setVisionImageFirst([...e.target.files]);
    }
    const handelVisionSecondImageChange = (e) => {
        setVisionImageSecond([...e.target.files]);
    }
    const handelVisionThirdImageChange = (e) => {
        setVisionImageThird([...e.target.files]);
    }

    const handleVisionSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("visionHeader", visionHeader);
        formData.append("visionCaption", visionCaption);
        visionImageFirst.forEach(image => formData.append('visionImageFirst', image));
        formData.append("visionHeaderFirst", visionHeaderFirst);
        formData.append("visionCaptionFirst", visionCaptionFirst);
        visionImageSecond.forEach(image => formData.append('visionImageSecond', image));
        formData.append("visionHeaderSecond", visionHeaderSecond);
        formData.append("visionCaptionSecond", visionCaptionSecond);
        visionImageThird.forEach(image => formData.append('visionImageThird', image));
        formData.append("visionHeaderThird", visionHeaderThird);
        formData.append("visionCaptionThird", visionCaptionThird);

        dispatch(createVision(formData));
    }


    // Join Us

    const handelJoinUsChange = (e) => {
        setJoinUsImage(e.target.files[0]);
    }

    const handleJoinUsSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("joinUsHeader", joinUsHeader);
        formData.append("joinUsCaption", joinUsCaption);
        formData.append('joinUsImage', joinUsImage);

        dispatch(createJoinUs(formData));
    }

    // service head

    const handelServiceHeadChange = (e) =>{
        setServiceData({
            ...serviceData,
            [e.target.name]: e.target.value
        })
    }

    const handelServiceHeadSubmit = (e) =>{
        e.preventDefault();
        dispatch(createServiceHead(serviceData));
    }

    // service 

    const handelServiceChange = (e) => {
        setImage(e.target.files[0])
    }

    const handelServiceSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append('image', image);

        dispatch(createServiceCarousel(formData))
    }



    return (
        home && (
            <>
                <div className="admin-dashboard">
                    <Sidebar />
                    <div className="admin-main">
                        <AdminHeader />

                        {/* Home Header */}
                        <div className="mb-2 my-3 mx-3">
                            <h2>Home Header</h2>
                            <Button variant="primary" size="sm" onClick={handleShowHeaderForm}>
                                Add/Update  Carousel
                            </Button>
                            <Modal show={showHeaderForm} onHide={handleCloseHeaderUpdate}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Home Carousel</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleCarouselSubmit}>
                                        <Form.Group className="mb-3">

                                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                                <Form.Label>Carousel Heading</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter the Heading"
                                                    value={carouselText}
                                                    onChange={(e) => setCarouselText(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                                <Form.Label>Carousel Caption</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter the Caption"
                                                    value={carouselCaption}
                                                    onChange={(e) => setCarouselCaption(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Label>Carousel Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                placeholder="Enter any Image"
                                                multiple
                                                onChange={handleImageChange}
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
                                        <th scope="col">Carousel Heading</th>
                                        <th scope="col">Carousel Caption</th>
                                        <th scope="col">Carousel Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{home.carouselText}</td>
                                        <td>{home.carouselCaption}</td>
                                        <td>
                                            <div class="container">
                                                <img src={firstCarouselImage} alt="Image" className="image" />
                                                <div class="overlay">
                                                    <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                    <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                        <Modal.Header closeButton>
                                                            {/* <Modal.Title>Home Header</Modal.Title> */}
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <Carousel data-bs-theme="dark">
                                                                {home.carouselImage?.map((item, index) => (
                                                                    <Carousel.Item key={index}>
                                                                        <img
                                                                            className="d-block w-100"
                                                                            src={item.url} // Assuming 'image' is the property holding the URL
                                                                            alt={`Slide ${index + 1}`}
                                                                        />
                                                                    </Carousel.Item>
                                                                ))}
                                                            </Carousel>
                                                        </Modal.Body>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </main>

                        {/* Home Highlight */}
                        <div className="mb-2 my-3 mx-3">
                            <h2>Home Highlight</h2>
                            <Button variant="primary" size="sm" onClick={handleShowHighlightForm}>
                                Add/Update Highlight
                            </Button>
                            <Modal show={showHighlightForm} onHide={handleCloseHighlightUpdate}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Home Highlight</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleHighlightSubmit}>
                                        <Form.Group className="mb-3" controlId="formHeadingInput">
                                            <Form.Label>First Header</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Heading"
                                                name="highlightHeaderFirst"
                                                value={formData.highlightHeaderFirst}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formHeadingInput">
                                            <Form.Label>First Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Heading"
                                                name="highlightCaptionFirst"
                                                value={formData.highlightCaptionFirst}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>Second Header</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                name="highlightHeaderSecond"
                                                value={formData.highlightHeaderSecond}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>Second Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                name="highlightCaptionSecond"
                                                value={formData.highlightCaptionSecond}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>Third Header</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                name="highlightHeaderThird"
                                                value={formData.highlightHeaderThird}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>Third Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                name="highlightCaptionThird"
                                                value={formData.highlightCaptionThird}
                                                onChange={handleInputChange}
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
                                        <th scope="col">#</th>
                                        <th scope="col">Highlight Header</th>
                                        <th scope="col">Highlight Caption</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{home.highlightHeaderFirst}</td>
                                        <td>{home.highlightCaptionFirst}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>{home.highlightHeaderSecond}</td>
                                        <td>{home.highlightCaptionSecond}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>{home.highlightHeaderThird}</td>
                                        <td>{home.highlightCaptionThird}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </main>


                        {/* Home About */}

                        <div className="mb-2 my-3 mx-3">
                            <h2>Home About</h2>
                            <Button variant="primary" size="sm" onClick={handleShowAboutForm}>
                                Add/Update About
                            </Button>
                            <Modal show={showAboutForm} onHide={handleCloseAboutUpdate}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Home About</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleAboutSubmit}>

                                        <Form.Group className="mb-3" controlId="formHeadingInput">
                                            <Form.Label></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Heading"
                                                value={aboutHeader}
                                                onChange={(e) => setAboutHeader(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>About Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                value={aboutCaption}
                                                onChange={(e) => setAboutCaption(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>About Content</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                value={aboutContent}
                                                onChange={(e) => setAboutContent(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                placeholder="Enter any Image"
                                                onChange={handleAboutImageChange}
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
                                        <th scope="col">About Header</th>
                                        <th scope="col">About Caption</th>
                                        <th scope="col">About Content</th>
                                        <th scope="col">About Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{home.aboutHeader}</td>
                                        <td>{home.aboutCaption}</td>
                                        <td>{home.aboutContent}</td>
                                        <td>
                                            <div class="container">
                                                <img src={home.aboutImage?.url} alt="Image" class="image" />
                                                <div class="overlay">
                                                    <i class="fa-regular fa-eye" onClick={handleShowAboutImage}></i>
                                                    <Modal show={showAboutImage} onHide={handleCloseAboutImage}>
                                                        <Modal.Header closeButton>
                                                            {/* <Modal.Title>Home Header</Modal.Title> */}
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <img
                                                                className="d-block w-100"
                                                                src={home.aboutImage?.url}
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



                        {/* Home Services */}


                        <div className="mb-2 my-3 mx-3">
                            <h2>Home Services</h2>
                            <Button variant="primary" size="sm" onClick={handleShowServicesForm}>
                                Add Services
                            </Button>
                            <Modal show={showServicesForm} onHide={handleCloseServicesUpdate}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Home Services</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handelServiceSubmit}>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>Titel</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                placeholder="Enter any Image"
                                                onChange={handelServiceChange}
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                            {' '}
                            <Button variant="primary" size="sm" onClick={handleShowUpdateModal}>
                            Add Services Head
                            </Button>
                            <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Service Head</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handelServiceHeadSubmit}>
                                        <Form.Group className="mb-3" controlId="updateFormHeadingInput">
                                            <Form.Label>Service Heading</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Heading"
                                                name='servicesHeader'
                                                value={formData.servicesHeader}
                                                onChange={handelServiceHeadChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="updateFormSubHeadingInput">
                                            <Form.Label>Service Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                name='servicesCaption'
                                                value={formData.servicesCaption}
                                                onChange={handelServiceHeadChange}
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
                                        <th scope="col">Services Header</th>
                                        <th scope="col">Services Caption</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{home.servicesHeader}</td>
                                        <td>{home.servicesCaption}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </main>

                        <main className="admin-content">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Titel</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homeCarousel.map((item, index) => (
                                        <tr key={item._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.title}</td>
                                            <td>
                                                <img src={item.image.url} alt={item.title} width="100" />
                                            </td>
                                            <td>
                                                <Button variant="primary" onClick={() => handleShowEditModal(item)}>
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

                        {/* Home Vision */}
                        <div className="mb-2 my-3 mx-3">
                            <h2>Home Vision</h2>
                            <Button variant="primary" size="sm" onClick={handleShowVisionForm}>
                                Add/Update Vision
                            </Button>
                            <Modal show={showVisionForm} onHide={handleCloseVisionUpdate}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Home Vision</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleVisionSubmit}>

                                        <Form.Group className="mb-3" controlId="formHeadingInput">
                                            <Form.Label>Vision Header</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Heading"
                                                value={visionHeader}
                                                onChange={(e) => setVisionHeader(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>Vision Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                value={visionCaption}
                                                onChange={(e) => setVisionCaption(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>First Vision Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                placeholder="Enter any Image"
                                                onChange={handelVisionFirstImageChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formHeadingInput">
                                            <Form.Label>First Vision Heading</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Heading"
                                                value={visionHeaderFirst}
                                                onChange={(e) => setVisionHeaderFirst(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>First Vision Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                value={visionCaptionFirst}
                                                onChange={(e) => setVisionCaptionFirst(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Second Vision Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                placeholder="Enter any Image"
                                                onChange={handelVisionSecondImageChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formHeadingInput">
                                            <Form.Label>Second Vision Heading</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Heading"
                                                value={visionHeaderSecond}
                                                onChange={(e) => setVisionHeaderSecond(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>Second Vision Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                value={visionCaptionSecond}
                                                onChange={(e) => setVisionCaptionSecond(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Third Vision Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                placeholder="Enter any Image"
                                                onChange={handelVisionThirdImageChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formHeadingInput">
                                            <Form.Label>Third Vision Heading</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Heading"
                                                value={visionHeaderThird}
                                                onChange={(e) => setVisionHeaderThird(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>Third Vision Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                value={visionCaptionThird}
                                                onChange={(e) => setVisionCaptionThird(e.target.value)}
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
                                        <th scope="col">Vision Section Header</th>
                                        <th scope="col">Vision Section Caption</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{home.visionHeader}</td>
                                        <td>{home.visionCaption}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </main>

                        <main className="admin-content">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Vision Header</th>
                                        <th scope="col">Vision Caption</th>
                                        <th scope="col">Vision Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{home.visionHeaderFirst}</td>
                                        <td>{home.visionCaptionFirst}</td>
                                        <td>
                                            <div class="container">
                                                <img src={home.visionImageFirst?.url} alt="Image" class="image" />
                                                <div class="overlay">
                                                    <i class="fa-regular fa-eye" onClick={handleShowVisionFirst}></i>
                                                    <Modal show={showVisionFirst} onHide={handleCloseVisionFirst}>
                                                        <Modal.Header closeButton>
                                                            {/* <Modal.Title>Home Header</Modal.Title> */}
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <img
                                                                className="d-block w-100"
                                                                src={home.visionImageFirst?.url}
                                                            />
                                                        </Modal.Body>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>{home.visionHeaderSecond}</td>
                                        <td>{home.visionCaptionSecond}</td>
                                        <td>
                                            <div class="container">
                                                <img src={home.visionImageSecond?.url} alt="Image" class="image" />
                                                <div class="overlay">
                                                    <i class="fa-regular fa-eye" onClick={handleShowVisionSecond}></i>
                                                    <Modal show={showVisionSecond} onHide={handleCloseVisionSecond}>
                                                        <Modal.Header closeButton>
                                                            {/* <Modal.Title>Home Header</Modal.Title> */}
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <img
                                                                className="d-block w-100"
                                                                src={home.visionImageSecond?.url}
                                                            />
                                                        </Modal.Body>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>{home.visionHeaderThird}</td>
                                        <td>{home.visionCaptionThird}</td>
                                        <td>
                                            <div class="container">
                                                <img src={home.visionImageThird?.url} alt="Image" class="image" />
                                                <div class="overlay">
                                                    <i class="fa-regular fa-eye" onClick={handleShowVisionThird}></i>
                                                    <Modal show={showVisionThird} onHide={handleCloseVisionThird}>
                                                        <Modal.Header closeButton>
                                                            {/* <Modal.Title>Home Header</Modal.Title> */}
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <img
                                                                className="d-block w-100"
                                                                src={home.visionImageThird?.url}
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



                        {/* Home JoinUs */}

                        <div className="mb-2 my-3 mx-3">
                            <h2>Home JoinUs</h2>
                            <Button variant="primary" size="sm" onClick={handleShowJoinUsForm}>
                                Add/Update Join Us 
                            </Button>
                            <Modal show={showJoinUsForm} onHide={handleCloseJoinUsUpdate}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Home JoinUs</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleJoinUsSubmit}>

                                        <Form.Group className="mb-3" controlId="formHeadingInput">
                                            <Form.Label>Join Us Heading</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Heading"
                                                value={joinUsHeader}
                                                onChange={(e) => setJoinUsHeader(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                            <Form.Label>Join Us Caption</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter the Sub Heading"
                                                value={joinUsCaption}
                                                onChange={(e) => setJoinUsCaption(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Join Us Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                placeholder="Enter any Image"
                                                onChange={handelJoinUsChange}
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
                                        <th scope="col">Join Us Heading</th>
                                        <th scope="col">Join Us Caption</th>
                                        <th scope="col">Join Us Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{home.joinUsHeader}</td>
                                        <td>{home.joinUsCaption}</td>
                                        <td>
                                            <div class="container">
                                                <img src={home.joinUsImage?.url} alt="Image" class="image" />
                                                <div class="overlay">
                                                    <i class="fa-regular fa-eye" onClick={handleShowJoinUs}></i>
                                                    <Modal show={showJoinUs} onHide={handleCloseJoinUs}>
                                                        <Modal.Header closeButton>
                                                            {/* <Modal.Title>Home Header</Modal.Title> */}
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <img
                                                                className="d-block w-100"
                                                                src={home.joinUsImage?.url}
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


                    </div>

                </div>
            </>
        )





    )
}

export default Home
