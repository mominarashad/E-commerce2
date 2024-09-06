
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Vegetable from './components/Vegetable';
import Fruits from './components/Fruits';
import Crockery from './components/Crockery';
import Sports from './components/Sports';
import Dresses from './components/Dresses';
import Meat from './components/Meat';
import Shoes from './components/Shoes';
import Jewel from './components/Jewel';
import Accessories from './components/Accessories';
import Signup from './components/Signup';
import Login from './components/Login';
import CartContext, { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
function App() {
  const appStyle = {
    backgroundImage: 'url("https://wallpaperaccess.com/full/4754292.jpg")', // Update this path to your actual image location
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
   textAlign:'center'
  };
  return (
    <div  style={appStyle}>
    <CartProvider>
    <Header/>
    <Routes>
    
      <Route>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path="/products/vegetables" element={<Vegetable />} />
        <Route path="/products/fruits" element={<Fruits/>} />
        <Route path="/products/crockery" element={<Crockery/>} />
        <Route path="/products/sports" element={<Sports/>} />
        <Route path="/products/dresses" element={<Dresses/>} />
        <Route path="/products/meat" element={<Meat/>} />
        <Route path="/products/shoes" element={<Shoes/>} />
        <Route path="/products/jewel" element={<Jewel/>} />
        <Route path="/products/accessories" element={<Accessories/>} />
        <Route path='/CartContext' element={<CartContext/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Route>
    </Routes>
     <Footer/>
     </CartProvider>
    </div>
  );
}

export default App;
