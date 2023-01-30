import React from "react";
import employees from "./data";
class Employees extends React.Component{
    render(){
        return(
            <div>
            <h1>Employees Component</h1>
            <div className="container mt-5">
            <div className="row">
            <div className="col-md-10">
            <table className="table table-hover">
            <thead className="bg-success text-white">
            <th>ID</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Email</th>
            <th>Gender</th>

            </thead>
            <tbody>
            {
                            employees.map((emp) => {
                                return <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.first_name}</td>
                                    <td>{emp.last_name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.gender}</td>
                                </tr>
                            })
                        }
            </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Employees