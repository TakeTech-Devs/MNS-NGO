import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './WelcomeModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAnnouncement } from '../../Actions/OtherActions';


Modal.setAppElement('#root');

const WelcomeModal = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    const { announcement, loading: announcementLoading, error: announcementError } = useSelector(state => state.announcement);

    useEffect(() => {
        setModalIsOpen(true);
        dispatch(getAnnouncement());
        if (announcementError) {
            window.alert(announcementError)
        }
    }, [dispatch, announcementError]);

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
        {announcement?.show ? (
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Welcome Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000,
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1001,
                    },
                }}
            >
                <div class="modal-content">
                    <span onClick={closeModal} class="close-button">&times;</span>
                    <h2>{announcement?.title}</h2>
                    <p>{announcement?.announcement}.</p>
                </div>
            </Modal>
            ) : '' }
        </>
    )
}

export default WelcomeModal
