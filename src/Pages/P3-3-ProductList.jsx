import React from 'react'
import { useFilterContext } from '../Context/filter_context';
import GridView from './P3-4-GridView';
import ListView from './P3-5-ListView';

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if ( grid_view === true )
    return <GridView products={filter_products} />
  if ( grid_view === false )
    return <ListView products={filter_products} />
}

export default ProductList;
