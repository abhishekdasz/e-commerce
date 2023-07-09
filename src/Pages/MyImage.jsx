import React from 'react'
import styled from 'styled-components';

const MyImage = ( {imgs=[{url:""}]} ) => { 
    // console.log(imgs);
  return (
    <>
    <Wrapper>
        <div className="grid grid-four-column ">
            {imgs.map((curElem, index)=>{
                return(
                    <figure>
                        <img src={curElem.url} alt={curElem.filename} className="box-image-style" key={index} />
                    </figure>
                )
            })}
        </div>
        {/* 2nd column */}
        <div className="main-screen">
            <img src={imgs[0].url} alt={imgs[0].filename} />
        </div>
        
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    gap: 1rem;

    .grid
    {
        flex-direction: row;
        justify-items: center;
        align-items: center;
        width: 100%;
        gap: 1rem;

        img
        {
            max-width: 100%;
            max-height: 100%;
            background-size: cover;
            object-fit: contain;
            cursor: pointer;
        }
    }
    /* figure img 
    {
        width: 10rem;
    } */
    .main-screen 
    {
        display: grid;
        place-items: center;
        order: 1;
        img{
            max-width: 100%;
            height: auto;
        }
    }
    .grid-four-column 
    {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
    }
    /* .main-screen img 
    {
        width: 17rem;
    } */
`

export default MyImage;