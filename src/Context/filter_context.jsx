import React from 'react'
import { useReducer } from 'react';
import { createContext, useContext } from 'react'
import { useProductContext } from './productContext';
import reducer from '../reducer/filterReducer';
import { useEffect } from 'react';

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view: true,
    sorting_value: "lowest",
}

const FilterContextProvider = ({children}) => {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState); 

    // To set the Grid View
    const setGridView = () => {
        return dispatch( {type:"SET_GRID_VIEW"} )
    }
    // To set the List View
    const setListView = () => {
        return dispatch( {type:"SET_LIST_VIEW"} )
    }

    // sorting function
    const sorting = () =>
    {
        dispatch({type: "GET_SORT_VALUE"});
    }
    // to sort the products
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS", payload:products})
        console.log("hii");
    }, [state.sorting_value] );

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    }, [products]);

    return(
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
            {children}
        </FilterContext.Provider>
    )
}

// custom hooks
const useFilterContext = () => {
    return useContext(FilterContext);                                                                                                                                                                                                                                                                                                                                                     
}


export { FilterContextProvider ,FilterContext,  useFilterContext};