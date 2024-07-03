import React from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AdminHome.css';

const Services = () => {
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


  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-main">
        <AdminHeader />

        {/* Services Header */}
        <div className="mb-2 my-3 mx-3">
            <h2>Services Header</h2>
                <Button variant="primary" size="sm" onClick={handleShowHeaderForm}>
                    Form
                </Button>
                <Modal show={showHeaderForm} onHide={handleCloseHeaderUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Services Header</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Carousel Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Enter any Image"
                                />
                            </Form.Group>
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
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseFormModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseFormModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {' '}
            </div>


            

            <main className="admin-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Carousel Image</th>
                            <th scope="col">Carousel Heading</th>
                            <th scope="col">Carousel Caption</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </main>

            {/* Services Highlight */}
            <div className="mb-2 my-3 mx-3">
            <h2>Services Highlight</h2>
                <Button variant="primary" size="sm" onClick={handleShowHighlightForm}>
                    Form
                </Button>
                <Modal show={showHighlightForm} onHide={handleCloseHighlightUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Services Highlight</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>First Header</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>First Caption</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Second Header</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Second Caption</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Third Header</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Third Caption</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseFormModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseFormModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {' '}
            </div>


            <main className="admin-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </main>


            {/* Services About */}

            <div className="mb-2 my-3 mx-3">
            <h2>Services About</h2>
                <Button variant="primary" size="sm" onClick={handleShowAboutForm}>
                    Form
                </Button>
                <Modal show={showAboutForm} onHide={handleCloseAboutUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Services About</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                           
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>About Header</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>About Caption</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>About Content</Form.Label>
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
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseFormModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseFormModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {' '}
            </div>


            <main className="admin-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </main>



                {/* Services Services */}


            <div className="mb-2 my-3 mx-3">
            <h2>Services Services</h2>
                <Button variant="primary" size="sm" onClick={handleShowServicesForm}>
                    Form
                </Button>
                <Modal show={showServicesForm} onHide={handleCloseServicesUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Services Services</Modal.Title>
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
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Sub Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseFormModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseFormModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {' '}
                <Button variant="primary" size="sm" onClick={handleShowUpdateModal}>
                    Update
                </Button>
                <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Services</Modal.Title>
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
                            <Form.Group className="mb-3" controlId="updateFormHeadingInput">
                                <Form.Label>Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="updateFormSubHeadingInput">
                                <Form.Label>Sub Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseUpdateModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseUpdateModal}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


            <main className="admin-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </main>

                {/* Services Vision */}
            <div className="mb-2 my-3 mx-3">
            <h2>Services Vision</h2>
                <Button variant="primary" size="sm" onClick={handleShowVisionForm}>
                    Form
                </Button>
                <Modal show={showVisionForm} onHide={handleCloseVisionUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Services Vision</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>Vision Header</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Vision Caption</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>First Vision Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Enter any Image"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>First Vision Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>First Vision Caption</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Second Vision Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Enter any Image"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>Second Vision Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Second Vision Caption</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Third Vision Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Enter any Image"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>Third Vision Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Third Vision Caption</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                            
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseFormModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseFormModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {' '}
            </div>


            <main className="admin-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </main>



            {/* Services JoinUs */}

            <div className="mb-2 my-3 mx-3">
            <h2>Services JoinUs</h2>
                <Button variant="primary" size="sm" onClick={handleShowJoinUsForm}>
                    Form
                </Button>
                <Modal show={showJoinUsForm} onHide={handleCloseJoinUsUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Services JoinUs</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            
                            <Form.Group className="mb-3" controlId="formHeadingInput">
                                <Form.Label>Join Us Heading</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                <Form.Label>Join Us Caption</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Sub Heading"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Join Us Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Enter any Image"
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseFormModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseFormModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {' '}
            </div>


            <main className="admin-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </main>            
      </div>     
    </div> 
  )
}

export default Services