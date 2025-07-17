import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <Home />
        <Products />
        <Cart />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;
