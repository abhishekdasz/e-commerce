import styled from "styled-components";
import storeimg from "../store-2.jpg";

const HeroSection = ( {myData} ) =>
{
    const {name} = myData;
    return(
        <>
        <Wrapper>
            <div className="container">
                <div className="grid grid-two-column">
                    <div className="hero-section-data">
                        <p className="intro-data">Welcome to</p>
                        <h1> {name} </h1>
                        <p>Discover an extensive selection of products, enjoy hassle-free browsing, and make secure purchases with our intuitive and feature-rich online shopping platform. </p>
                        <a href="/"> <button> Show Now </button> </a>
                    </div>

                    <div className="hero-section-image">
                        <figure> <img src={storeimg} alt="storeimage" /> </figure>
                    </div>
                </div>
            </div>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container 
    {
        max-width: 60rem;
        margin: 3rem auto;
        /* display: flex; */
    }
    .grid 
    {
        /* display: flex;
        gap: 3rem; */
        display: grid;
        gap: 12rem;
        justify-content: center;
    }
    .grid-two-column 
    {
        grid-template-columns: repeat(2, 1fr);
    }
    .hero-section-image
    {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hero-section-image img
    {
        min-width: 10rem;
        height: 22rem;
    }
    .hero-section-data 
    {
        p
        {
            margin: 1.2rem 0;
            font-size: 1.7rem;
            text-align: justify;
        }
        h1
        {
            text-transform: capitalize;
            font-weight: bold;
            font-size: 2.6rem;
        }
        .intro-data
        {
            margin-bottom: 0;
        }
    }
    figure:after
    {
        content: "";
        width: 50%;
        height: 100%;
        left: 0;
        top: 10%;
        background-color: rgba(81,56,238,0.4);
    }

    button 
    {
        text-decoration: none;
        max-width: auto;
        background-color: rgb(98 84 243);
        color: rgb(255 255 255);
        padding: 0.8rem 1.5rem;
        border: none;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
    }


    

    @media(max-width:780px)
    {
        .container
        {
            max-width: 130rem;
            margin: 1rem;
        }
        .grid
        {
            gap: 2rem;
        }
        .grid-two-column 
        {
            grid-template-columns: repeat(1, 1fr);
            gap: 0;
        }
        .hero-section-image img
        {
            min-width: 10rem;
            height: 20rem;
        }
    }

    @media only screen and (min-width: 601px) and (max-width: 1024px) 
    {
        .grid
        {
            gap: 0;
        }
    }

`

export default HeroSection;