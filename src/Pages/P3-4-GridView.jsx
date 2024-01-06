import React from 'react'
import styled from 'styled-components';
import Product from './6-Product';

const GridView = ({products}) => {
  return (
    <Wrapper className='section'>
        <div className="container grid grid-three-column">
            {
                products.map( (currElem, id)=>{
                    return <Product key={currElem.id} {...currElem} />
                } )
            }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .container
    {
        /* max-width: 60rem; */
        margin: 3rem 0rem;
        padding-bottom: 3rem;
    }
    .grid
    {
        display: grid;
    }
    .grid-three-column
    {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
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
`

export default GridView;
