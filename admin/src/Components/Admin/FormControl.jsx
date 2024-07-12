import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import Button from 'react-bootstrap/Button';
import './AdminHome.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFormData } from '../../Actions/FormActions';
import { getGrievanceFormData } from '../../Actions/GrievanceActions';

const FormControl = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(state => state.formReducer);
    const { form: grievanceForm } = useSelector(state => state.grievanceForm);
    useEffect(() => {
        dispatch(getFormData());
        dispatch(getGrievanceFormData());
    }, [dispatch]);
    return (

        <div className="admin-dashboard">
            <Sidebar />
            <div className="admin-main" style={{ height: "100vh" }}>
                <AdminHeader />

                <div className="mb-2 my-3 mx-3">
                    <h2>Form Header</h2>
                    <Button href="/allform" variant="primary" size="sm">
                        Contact Form ({form.length})
                    </Button>
                    
                    {' '}
                    <Button href="/grievanceform" variant="primary" size="sm">
                        Grivance Form ({grievanceForm.length})
                    </Button>
                   
                </div>
            </div>
        </div>

    )
}

export default FormControl