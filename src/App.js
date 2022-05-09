import { AboutUs } from "./components/products/pages/AboutUs";
import { ContactUs } from "./components/products/pages/ContactUs";
import { Foundation } from "./components/products/pages/Foundation";
import { HomePageUp } from "./components/products/pages/HomePageUp";
import { LipGloss } from "./components/products/pages/LipGloss";
import { ProductsAndServices } from "./components/products/pages/ProductsAndServices";
import Navbar2 from "./Home/Component/Navbar2";
import Title from "./Home/Component/Title";
import Home from "./Home/Pages/Home";
import { NavbarLink } from "./Navbar/Components/NavbarLink";
import { Navbar } from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Fotter/Fotter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Navbar2 />
      {/* <HomePageUp /> */}
      <Routes>
        <Route path="/" element={<HomePageUp />} />
        <Route path="/products" element={<ProductsAndServices />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/lip-gloss" element={<LipGloss />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
