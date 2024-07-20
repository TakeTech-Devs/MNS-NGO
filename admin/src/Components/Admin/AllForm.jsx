import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'
import { useSelector, useDispatch } from 'react-redux';
import { getFormData } from '../../Actions/FormActions';
import { clearErrors } from '../../Actions/HomeActions';
import Loader from '../Layouts/Loader';

const AllForm = () => {
    const dispatch = useDispatch();
    const { form, error, loading } = useSelector(state => state.formReducer);


    useEffect(() => {
        dispatch(getFormData());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);
    return (
        <>
            {loading && <Loader />}
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main" style={{ height: "100vh" }}>
                    <AdminHeader />
                    <main className="admin-content">
                        <div className="total-count">
                            <h2>Total Forms: {form.length}</h2>
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Message</th>

                                </tr>
                            </thead>
                            <tbody>

                                {form && form.length > 0 ? (
                                    form.map((item, index) => (
                                        <tr key={item._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td style={{ width: "550px" }}>{item.message}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No data available</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </main>

                </div>
            </div>
        </>
    )
}

export default AllForm