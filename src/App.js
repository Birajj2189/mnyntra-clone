import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import { commerce } from './lib/commerce';
import React , { useState , useEffect } from 'react';

import Navbar from './component/Navbar'
import Mens from './component/Mens';
import Footer from './component/Footer';
import Womens from './component/Womens';
import Mentopwear from './component/Mentopwear';
import Loading from './component/Loading'
import Checkout from './component/Checkout';
import AddressInfo from './component/AddressInfo';
import Payment from './component/Payment_page/Payment';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [men, setMen] = useState([]);
  const [mentopwear, setMentopwear] = useState([]);
  const [women, setWomen] = useState([]);
  const [cart, setCart] = useState({});

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(prevCart => ({ ...prevCart, ...cart }));
  };

  const handleUpdateCartQty = async (productId , quantity )=>{
    const {item} = await commerce.cart.update(productId,{quantity})
    setCart(prevItem=>({...prevItem,item}))
}

  const handleRemoveItem = async (productId )=>{
    const {item} = await commerce.cart.remove(productId)
    setCart(prevItem=>({...prevItem,item}))
}

  const handleEmptyCart = async ()=>{
    const {item} = await commerce.cart.empty()
    setCart(prevItem=>({...prevItem,item}))
}

  
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
    };

    const fetchCart = async () => {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    };

    const fetchMen = async () => {
      const men_products = products.filter((e) =>
        e.categories.some((x) => x.slug === "men")
      );
      setMen(men_products);
    };

    const fetchMentopwear = async () => {
      const men_topwear_products = products.filter((e) =>
        e.categories.some((x) => x.slug === "men-topwear")
      );
      setMentopwear(men_topwear_products);
    };

    const fetchWomen = async () => {
      const women_products = products.filter((e) =>
        e.categories.some((x) => x.slug === "women")
      );
      setWomen(women_products);
    };
 

    Promise.all([
      fetchProducts(),
      fetchMen(),
      fetchMentopwear(),
      fetchWomen(),
      fetchCart(),
    ]).then(() => {
      setIsLoading(false);
    });
  }, [products]);

  if (isLoading) {
    return <Loading/>
  }
  console.log(cart)
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar handleUpdateCartQty={handleUpdateCartQty} handleRemoveItem={handleRemoveItem} cartItems = {cart} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mens/*" element={<Mens onAddToCart={handleAddToCart} products={men} />} />
          <Route path="/Womens" element={<Womens products={women} />} />
          <Route path="/Mentopwear" element={<Mentopwear products={mentopwear}/>} />
          <Route path="/checkout" element={<Checkout cartItems={cart} handleEmptyCart={handleEmptyCart}/>} />
          <Route path="/billing-address" element={<AddressInfo/>} />
          <Route path="/payment" element={<Payment/>}/>
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
