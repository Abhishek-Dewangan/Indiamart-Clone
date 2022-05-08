import { AboutUs } from './components/products/pages/AboutUs';
import { ContactUs } from './components/products/pages/ContactUs';
import { Foundation } from './components/products/pages/Foundation';
import { LipGloss } from './components/products/pages/LipGloss';
import { ProductsAndServices } from './components/products/pages/ProductsAndServices';
import Footer from './Fotter/Fotter';
import { Navbar } from './Navbar/Navbar';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Foundation />
      <LipGloss />
      <ProductsAndServices />
      <ContactUs />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
