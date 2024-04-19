import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Task2 = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers();
    }, []);

    const getCustomers = async () => {
        let result = await fetch("/api/task2");
        result = await result.json();
        setCustomers(result);
    }


    return (
        <>
            <Navbar />

            <h1>TASK 2</h1>

            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">CustomerID</th>
                        <th scope="col">NameStyle</th>
                        <th scope="col">Title</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">MiddleName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Suffix</th>
                        <th scope="col">CompanyName</th>
                        <th scope="col">SalesPerson</th>
                        <th scope="col">EmailAddress</th>
                        <th scope="col">Phone</th>
                        <th scope="col">PasswordHash</th>
                        <th scope="col">PasswordSalt</th>
                        <th scope="col">rowguid</th>
                        <th scope="col">ModifiedDate</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{customer.CustomerID}</td>
                                    <td>{customer.NameStyle}</td>
                                    <td>{customer.Title}</td>
                                    <td>{customer.FirstName}</td>
                                    <td>{customer.MiddleName}</td>
                                    <td>{customer.LastName}</td>
                                    <td>{customer.Suffix}</td>
                                    <td>{customer.CompanyName}</td>
                                    <td>{customer.SalesPerson}</td>
                                    <td>{customer.EmailAddress}</td>
                                    <td>{customer.Phone}</td>
                                    <td>{customer.PasswordHash}</td>
                                    <td>{customer.PasswordSalt}</td>
                                    <td>{customer.rowguid}</td>
                                    <td>{customer.ModifiedDate}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Task2;