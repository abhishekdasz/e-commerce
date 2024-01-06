import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListView = ( {products} ) => {
  return (
    <Wrapper className='section'>
      <div className="container grid"> 
        {products.map((currElem)=>{
            const { id, name, image, price, description } = currElem;
            return (
                <div className="card grid grid-two-column">
                    <figure>
                        <img src={image} alt={name} />
                    </figure>
                    <div className='card-data'>
                        <h3>{name}</h3>
                        <p> {price} </p>
                        <p> {description.slice(0,99)}... </p>
                        <NavLink to={`/singleproduct/${id}`}> <button> Read More </button> </NavLink>
                    </div>
                </div>
            )
        } )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 1rem 0;
  /* .container {
    max-width: 50rem;
  } */
  .grid {
    gap: 2.2rem;   
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
    img {
      width: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    display: flex;
    .card-data {
      /* padding: 0 1rem; */
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    h3 {
      margin: 0.7rem 0;
      font-weight: 300;
      font-size: 1.4rem;
      text-transform: capitalize;
    }
    p 
    {
        font-size: 1rem;
    }
    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
    button
    {
    text-decoration: none;
    max-width: auto;
    color: rgb(98 84 243);
    /* color: rgb(255 255 255); */
    padding: 0.6rem 0.5rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    margin-top: 0.5rem;
    border: 0.00001rem solid black;
    font-size: 0.8rem;
    padding: 0.9rem;
    }
    button:hover {
        background: rgb(98 84 243);
        color: #fff;
    }
  }
  /* @media(max-width:600px)
  {
    .card
    {
      flex-direction: column;
    }
    figure img 
    {
      width: 100%;
      margin: 0;
    }
    .card-data 
    {
      margin: 0 2rem;
      margin-bottom: 1rem;
    }
  } */
`

export default ListView;
