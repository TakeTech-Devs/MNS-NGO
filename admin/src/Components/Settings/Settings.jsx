import React, { useEffect } from 'react';
import Sidebar from '../Admin/Sidebar';
import AdminHeader from '../Admin/AdminHeader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, createMetaData, createPolicy, createSocial, createTerms, getOther } from '../../Actions/OtherActions';
import Loader from '../Layouts/Loader';
import { ADD_METADATA_RESET, ADD_POLICY_RESET, ADD_SOCIAL_RESET, ADD_TERMS_RESET } from '../../Constants/OtherConstants';

const Settings = () => {

    const [showPrivacyPolicyForm, setShowPrivacyPolicyForm] = useState(false);


    const handleShowPrivacyPolicyForm = () => setShowPrivacyPolicyForm(true);
    const handleClosePrivacyPolicyUpdate = () => setShowPrivacyPolicyForm(false);

    const [showTermsofServiceForm, setShowTermsofServiceForm] = useState(false);


    const handleShowTermsofServiceForm = () => setShowTermsofServiceForm(true);
    const handleCloseTermsofServiceUpdate = () => setShowTermsofServiceForm(false);


    const [showMetaDataForm, setShowMetaDataForm] = useState(false);


    const handleShowMetaDataForm = () => setShowMetaDataForm(true);
    const handleCloseMetaDataUpdate = () => setShowMetaDataForm(false);

    const [showMetaIconForm, setShowMetaIconForm] = useState(false);


    const handleShowMetaIconForm = () => setShowMetaIconForm(true);
    const handleCloseMetaIconUpdate = () => setShowMetaIconForm(false);

    const [showSocialLinksForm, setShowSocialLinksForm] = useState(false);


    const handleShowSocialLinksForm = () => setShowSocialLinksForm(true);
    const handleCloseSocialLinksUpdate = () => setShowSocialLinksForm(false);

    const [showCarousel, setShowCarousel] = useState(false);



    const handleShowCarouse = () => setShowCarousel(true);
    const handleCloseCarouse = () => setShowCarousel(false);


    const dispatch = useDispatch();
    const { other, loading, error } = useSelector(state => state.other);

    useEffect(() => {
        dispatch(getOther());
        if (error) {
            window.alert(error)
        }
    }, [dispatch, error])

    const { policy, terms, meta, social, isUpdated, error: newError } = useSelector(state => state.newOther)

    // Policy

    const [formData, setFormData] = useState({
        policyHead: '',
        policy: '',
        termsHead: '',
        terms: '',
        metaTitle: '',
        facebookLink: '',
        instagramLink: '',
        linkedinLink: '',
        whatsAppLink: '',
    })

    const [metaIcon, setMetaIcon] = useState([]);

    useEffect(() => {
        if (policy) {
            setFormData({
                policyHead: policy.policyHead,
                policy: policy.policy,
            })
        }
        if (terms) {
            setFormData({
                termsHead: terms.termsHead,
                terms: terms.terms,
            })
        }
        if (meta) {
            setFormData({
                metaTitle: meta.metaTitle,
            })
        }
        if (social) {
            setFormData({
                facebookLink: social.facebookLink,
                instagramLink: social.instagramLink,
                linkedinLink: social.linkedinLink,
                whatsAppLink: social.whatsAppLink,
            })
        }
        if (isUpdated) {
            window.alert('Section updated successfully');
            dispatch({ type: ADD_POLICY_RESET });
            dispatch({ type: ADD_TERMS_RESET });
            dispatch({ type: ADD_METADATA_RESET });
            dispatch({ type: ADD_SOCIAL_RESET });
            window.location.reload()
        }
        if (newError) {
            window.alert(newError)
            dispatch(clearErrors());
        }
    }, [dispatch, policy, terms, meta, isUpdated, newError]);

    // policy

    const handlePolicyInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handlePolicySubmit = (e) => {
        e.preventDefault();
        dispatch(createPolicy(formData));
    }


    // terms

    const handleTermsInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleTermsSubmit = (e) => {
        e.preventDefault();
        dispatch(createTerms(formData));
    }


    // metadata

    const handleMetaDataInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleMetaDatSubmit = (e) => {
        e.preventDefault();
        dispatch(createMetaData(formData));
    }

    const handleMetaIcon = (e) => {
        setMetaIcon(e.target.files[0])
    }

    const handleMetaIconSubmit = (e) => {
        e.preventDefault();
        const iconData = new FormData();
        iconData.append('metaIcon', metaIcon);
        dispatch(createMetaData(iconData));
    }

    // social

    const handleSocialInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSocialSubmit = (e) => {
        e.preventDefault();
        dispatch(createSocial(formData));
    }



    return (
        <>
            {loading && <Loader />}
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main">
                    <AdminHeader />

                    <div className="mb-2 my-3 mx-3">
                        <h2>Privacy Policy</h2>
                        <Button variant="primary" size="sm" onClick={handleShowPrivacyPolicyForm}>
                            Add/Update Privacy Policy
                        </Button>
                        <Modal show={showPrivacyPolicyForm} onHide={handleClosePrivacyPolicyUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Privacy Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handlePolicySubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Privacy Policy Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            name="policyHead"
                                            value={formData.policyHead}
                                            onChange={handlePolicyInput}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Privacy Policy</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter the Privacy Policy"
                                            name="policy"
                                            value={formData.policy}
                                            onChange={handlePolicyInput}
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
                                    <th scope="col">Privacy Policy</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{other?.policyHead}</td>
                                    <td>{other?.policy}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>


                    <div className="mb-2 my-3 mx-3">
                        <h2>Terms of Service</h2>
                        <Button variant="primary" size="sm" onClick={handleShowTermsofServiceForm}>
                            Add/Update Terms of Service
                        </Button>
                        <Modal show={showTermsofServiceForm} onHide={handleCloseTermsofServiceUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Terms of Service</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleTermsSubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Terms of Service Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Heading"
                                            name="termsHead"
                                            value={formData.termsHead}
                                            onChange={handleTermsInput}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Terms of Service</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter the Terms of Service"
                                            name="terms"
                                            value={formData.terms}
                                            onChange={handleTermsInput}
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
                                    <th scope="col">Terms of Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{other?.termsHead}</td>
                                    <td>{other?.terms}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>


                    <div className="mb-2 my-3 mx-3">
                        <h2>Meta Data</h2>
                        <Button variant="primary" size="sm" onClick={handleShowMetaDataForm}>
                            Add/Update MetaTitle
                        </Button>
                        <Modal show={showMetaDataForm} onHide={handleCloseMetaDataUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Meta Data</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleMetaDatSubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Meta Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Meta Title"
                                            name="metaTitle"
                                            value={formData.metaTitle}
                                            onChange={handleMetaDataInput}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                        {' '}
                        <Button variant="primary" size="sm" onClick={handleShowMetaIconForm}>
                            Add/Update Meta Icon
                        </Button>
                        <Modal show={showMetaIconForm} onHide={handleCloseMetaIconUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Meta Data</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleMetaIconSubmit}>
                                    <Form.Group className="mb-3" controlId="formSubHeadingInput">
                                        <Form.Label>Meta Icon</Form.Label>
                                        <Form.Control
                                            type="file"
                                            onChange={handleMetaIcon}
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
                                    <th scope="col">Meta Title</th>
                                    <th scope="col">Meta Icon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{other?.metaTitle}</td>
                                    <td>
                                        <div class="container">
                                            <img src={other?.metaIcon?.url} alt="Image" className="image" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-eye" onClick={handleShowCarouse}></i>
                                                <Modal show={showCarousel} onHide={handleCloseCarouse}>
                                                    <Modal.Header closeButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <img src={other?.metaIcon?.url} alt="Image" className="d-block w-100" />
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>


                    <div className="mb-2 my-3 mx-3">
                        <h2>Social Links</h2>
                        <Button variant="primary" size="sm" onClick={handleShowSocialLinksForm}>
                            Add/Update Social Links
                        </Button>
                        <Modal show={showSocialLinksForm} onHide={handleCloseSocialLinksUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Social Links</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSocialSubmit}>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Facebook Links</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Facebook Links"
                                            name="facebookLink"
                                            value={formData.facebookLink}
                                            onChange={handleSocialInput}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Instagram Links</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Instagram Links"
                                            name="instagramLink"
                                            value={formData.instagramLink}
                                            onChange={handleSocialInput}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>Linkedin Links</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the Linkedin Links"
                                            name="linkedinLink"
                                            value={formData.linkedinLink}
                                            onChange={handleSocialInput}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formHeadingInput">
                                        <Form.Label>WhatsApp Links</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the WhatsApp Links"
                                            name="whatsAppLink"
                                            value={formData.whatsAppLink}
                                            onChange={handleSocialInput}
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
                                    <th scope="col">Social Site</th>
                                    <th scope="col">Social Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Facebook</td>
                                    <td><a href={other?.facebookLink} target='_blank'>Link</a></td>
                                </tr>
                                <tr>
                                    <td>Instagram</td>
                                    <td><a href={other?.instagramLink} target='_blank'>Link</a></td>
                                </tr>
                                <tr>
                                    <td>Linkedin</td>
                                    <td><a href={other?.linkedinLink} target='_blank'>Link</a></td>
                                </tr>
                                <tr>
                                    <td>WhatsApp</td>
                                    <td><a href={other?.whatsAppLink} target='_blank'>Link</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </main>




                </div>
            </div>
        </>
    )
}

export default Settings
