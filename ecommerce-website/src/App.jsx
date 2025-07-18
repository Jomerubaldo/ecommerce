import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <Home />
        <Products />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;
