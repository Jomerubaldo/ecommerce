import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <Section
          title="HOME"
          message="Our homepage is under development. Stay tuned!"
        />
        <Section
          title="PRODUCTS"
          message="Explore a variety of quality items tailored to your lifestyle. New
          products will be available soon!"
        />
        <Section
          title="CART"
          message="Your selected items will appear here. Checkout and payment features
          are coming soon!"
        />
        <Section
          title="ABOUT"
          message="We're a small team passionate about providing a smooth and stylish
          online shopping experience."
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
