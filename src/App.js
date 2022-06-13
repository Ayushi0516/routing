import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Products from "./component/Products";
import Product from "./component/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* use this  */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        {/* or this */}
        {/* <Route path="/products/*" element={<Products />}>
          <Route path=":id" element={<Product />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
