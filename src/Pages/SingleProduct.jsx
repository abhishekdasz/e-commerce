import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useProductContext } from "../Context/productContext";
import MyImage from "./MyImage";
import PageNavigation from "./PageNavigation";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity, MdSecurityUpdate } from "react-icons/md";
import Star from "./Star";
import AddToCart from "./AddToCart";
import CartAmountToggle from "./CartAmountToggle";
import { useState } from "react";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () =>
{
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

    const {
        id: alias,
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image,
    } = singleProduct;
    console.log(singleProduct);    
    const {id} = useParams();
    // console.log(id);
    useEffect( ()=>{
        getSingleProduct(`${API}?id=${id}`);
    }, [] );

    if(isSingleLoading)
    {
        return <div className="page_loading"> Loading.... </div>
    }
    return(
        <>
            <Wrapper>
                <PageNavigation title={name} />
                <div className="container">
                    <div className="grid grid-two-column">
                        {/* Product images */}
                        <div className="product-images">
                            <MyImage imgs={image} />
                        </div>
                        {/* Product Data */}
                        <div className="product-data">
                            <h2> {name} </h2>
                            <Star stars={stars} reviews={reviews} > </Star>
                            <p className="product-data-price">
                                MRP: <del> 25000  </del>
                            </p>
                            <p className="product-data-price product-data-real-price">
                                Deal of the Day: {price}
                            </p>
                            <p> {description} </p>
                            <div className="product-data-warranty">

                                <div className="product-warranty-data">
                                    <TbTruckDelivery className="warranty-icon" />
                                    <p> Free Delivery </p>
                                </div>
                                <div className="product-warranty-data">
                                    <TbReplace className="warranty-icon" />
                                    <p> 30Days Replacement </p>
                                </div>
                                <div className="product-warranty-data">
                                    <MdSecurity className="warranty-icon" />
                                    <p> 2Years Warranty </p>
                                </div>
                                <div className="product-warranty-data">
                                    <MdSecurityUpdate className="warranty-icon" />
                                    <p> 5Years Update </p>
                                </div>

                            </div>


                            <div className="product-data-info">
                                <p> Available: <b> <span> { stock > 0 ? "In Stock" : "Not Available" } </span> </b> </p>
                                <p> ID: <b> <span> {id} </span> </b> </p>
                                <p> Brand: <b> <span> {company} </span> </b> </p>
                            </div>

                            {/* Color */}
                            {stock>1 && <AddToCart product={singleProduct}/>}
                            
                        </div>
                    </div>
                </div>
                {/* <div> Single Product Page </div> */}
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
.container 
{
    margin: 3rem auto;
}
    .grid 
    {
        display: grid;
    }
    .grid-two-column 
    {
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
    }
    .product-data p
    {
        margin: 0.3rem 0;
    }
    .product-data-real-price
    {
        color: blue;
    }
    .product-data-warranty
    {
        display: flex;
        border-bottom: 1px solid black;
    }
    .product-warranty-data
    {
        text-align: center;
        margin: 1rem;
    }
    .warranty-icon
    {
        background: #cfc9c7a6;
        border-radius: 50%;
        font-size: 2.5rem;
        padding: 8px;
    }
    .product-images 
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(max-width:600px)
    {
        padding: 0 0.5rem;
        .grid-two-column 
        {
            grid-template-columns: repeat(1, 1fr);
            gap: 4rem;
        }
        .product-warranty-data
        {
            margin: 0;
        }
    }    

`

export default SingleProduct;