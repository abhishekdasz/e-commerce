import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Product = (currElem) =>
{
    const { id, name, image, price, category } = currElem; 
    return(
        <Wrapper>
            <NavLink to={`/singleproduct/${id}`}>
                <div className="card">
                    <figure> 
                        <img src={image} alt="" />
                        <figcaption className="caption"> {category} </figcaption>
                    </figure>

                    <div className="card-data">
                        <div className="card-data-flex">
                            <h3> {name} </h3>
                            <p className="card-data--price"> {price} </p>
                        </div>
                    </div>
                </div>
            </NavLink>
            </Wrapper>
    )
}

const Wrapper = styled.section`
    *
    {
        text-decoration: none;
        color: #3a3939;
    }
    figure
    {
        position: relative;
    }
    .caption
    {
        position: absolute;
        top: 5%;
        right: 5%;
        text-transform: uppercase;
        background: #fff;
        color: black;
        padding: 0.5rem 0.8rem;
        font-size: 0.8rem;
        border-radius: 1rem;
    }
    figure img
    {
        width: 15rem;
    }
    .card-data-flex
    {
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
    }
    .card 
    {
        background: #fff;
        border-radius: 6px;
        padding: 0.8rem;
    }
`

export default Product;