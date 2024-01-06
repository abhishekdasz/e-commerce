import styled from "styled-components";
import { useProductContext } from "../Context/productContext";
import Product from "./6-Product";

const FeatureProduct = () =>
{
    const { isLoading, featureProducts } = useProductContext();  
    console.log(featureProducts); 

    if(isLoading)
    {
        return <div> .....Loading </div>
    }
    return(
        <>
        <Wrapper>
            <div className="container">
                <div className="intro-data"> Check Now! </div>
                <div className="common-heading"> Our Feature Products </div>
                <div className="grid grid-three-column">
                    {
                        featureProducts.map( (currElem) =>{
                            return <Product key={currElem.id} {...currElem} />
                        } )
                    }
                </div>
            </div>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    background: #d4d6d8ba;

    .intro-data
    {
        padding-top: 2rem;
        text-transform: uppercase;
        color: #1440a2;
    }
    .common-heading
    {
        font-size: 2rem;
        padding-bottom: 1rem;
    }
    .container
    {
        max-width: 60rem;
        margin: 3rem auto;
        padding-bottom: 3rem;
    }
    .grid
    {
        display: grid;
    }
    .grid-three-column
    {
        grid-template-columns: repeat(3, 1fr);
        gap: 5rem;
    }
    figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
}

@media(max-width:600px)
{
    .grid-three-column
    {
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
    }  
}
@media only screen and (min-width: 601px) and (max-width: 1024px) 
{
    .grid-three-column
    {
        gap: 0;
    } 
}
`


export default FeatureProduct;