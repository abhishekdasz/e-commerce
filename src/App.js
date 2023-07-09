import './App.css';
import NavBar from './Pages/0-NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/3-About';
import Home from './Pages/1-Home';
import SingleProduct from './Pages/SingleProduct';
import ProductPage from './Pages/P3-0-ProductPage';
import Cart from './Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <NavBar/> }>
          <Route index element= { <Home/> } />
          <Route path="/about" element= { <About/> } />
          <Route path="/product" element= { <ProductPage/> } />
          <Route path="/singleproduct/:id" element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart/>} />
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
