import React from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import Button from 'react-bootstrap/Button';
import './AdminHome.css';

const FormControl = () => {
    return (

        <div className="admin-dashboard">
            <Sidebar />
            <div className="admin-main" style={{ height: "100vh" }}>
                <AdminHeader />

                <div className="mb-2 my-3 mx-3">
                    <h2>Form Header</h2>
                    <Button href="/allform" variant="primary" size="sm">
                        All Form
                    </Button>
                    
                    {' '}
                    <Button href="/grievanceform" variant="primary" size="sm">
                        Grivance Form
                    </Button>
                   
                </div>
            </div>
        </div>

    )
}

export default FormControl