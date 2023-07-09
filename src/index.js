import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './Context/cart_Context';
import { FilterContextProvider } from './Context/filter_context';
import { AppProvider } from './Context/productContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterContextProvider>
    </AppProvider>
);

 