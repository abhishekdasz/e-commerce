import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../Context/filter_context';
import FilterSection from './P3-1-FilterSection';
import Sort from './P3-2-Sort';
import ProductList from './P3-3-ProductList';

const ProductPage = () => {
  const { filter_products } = useFilterContext();
  console.log(filter_products);
  return (
    <Wrapper>
        <div className="container grid grid-filter-column">
            <div className='filter-section'>
                <FilterSection/>
            </div>

            <section className="procuct-view--sort">
                  
                <div className="sort-filter">
                    <Sort/>
                </div>

                <div className="main-product">
                    <ProductList/>
                </div>

            </section>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    .container 
    {
        display: grid;
        margin: 1rem 0;
        width: 1000px;
    }
    .grid-filter-column
    {
        /* display: flex;
        justify-content: center; */
    }
    /* .grid-filter-column
    {
        grid-template-columns: repeat(2, 1fr);
    } */
    .procuct-view--sort 
    {
        display: flex;
        flex-direction: column;
    }
`

export default ProductPage;