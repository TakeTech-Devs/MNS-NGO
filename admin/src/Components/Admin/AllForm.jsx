import React from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'

const AllForm = () => {
    return (
        <>
            <div className="admin-dashboard">
                <Sidebar />
                <div className="admin-main" style={{ height: "100vh" }}>
                    <AdminHeader />
                    <main className="admin-content">
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AllForm