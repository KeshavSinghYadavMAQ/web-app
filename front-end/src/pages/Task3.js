import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Task3 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch("/api/task3");
        result = await result.json();
        setProducts(result);
    }


    return (
        <>
           <Navbar />

           <h1>TASK 3</h1>

           <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">ProductName</th>
                        <th scope="col">Color</th>
                        <th scope="col">Size</th>
                        <th scope="col">Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{product.ProductName}</td>
                                    <td>{product.Color}</td>
                                    <td>{product.Size}</td>
                                    <td>{product.Weight}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Task3;