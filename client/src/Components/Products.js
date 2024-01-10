import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react';

import api from '../API/products';



import { Link } from 'react-router-dom'


const Products = () => {

    const [products, setProducts] = useState(api)

    let result = products.map((elem) => {
        return (
            <div key={elem.id} className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center center-text">
                <Link className='text-dark' style={{ textDecoration: "none" }} to={`#`}>
                    <div className="card m-2" style={{ width: "300px" }}>
                        <img className="card-img-top" src={elem.image} alt="Card plants" style={{ width: "100%", height: "253px", aspectRatio: "4/3", objectFit: "contain" }} />
                        <div className="card-body">
                            <h4 className="card-title">{elem.productName}</h4>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>price</p>
                            <p className="card-text">₹ {elem.price}</p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>category</p>
                            <p className="card-text">{elem.productCategory}</p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>ratings</p>
                            <p className="card-text"><Rating initialValue={elem.rating} readonly={true} size={20} allowFraction="true" /> <small style={{ position: "relative", top: "4px" }}>{elem.noOfRatings}</small></p>

                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    const getProductsDataByCategory = (category) => {
        const filterProduct = api.filter((elem) => elem.productCategory === category);
        setProducts(filterProduct);
    }

return (
    <>
        <div className="container">
            <div className="row">
                <h1 className='text-center p-2'>Available Products for Sell</h1>
            </div>
            <div className="row m-1 d-flex justify-content-center">
                <div className="col-sm-12 d-flex justify-content-center rounded py-2 bg-light">
                        <button onClick={() => setProducts(api)} className="btn btn-secondary mx-2">All</button>
                        <button onClick={() => getProductsDataByCategory("Car")} className="btn btn-secondary mx-2">Cars</button>
                        <button onClick={() => getProductsDataByCategory("Bike")} className="btn btn-secondary mx-2">Bike</button>
                        <button onClick={() => getProductsDataByCategory("Electric Car")} className="btn btn-secondary mx-2">Electric Car</button>
                        <button onClick={() => getProductsDataByCategory("Electric Bike")} className="btn btn-secondary mx-2">Electric Bike</button>
                    </div>
            </div>
            <div className="row">
                {result}
            </div>
        </div>

    </>
)
}

export default Products