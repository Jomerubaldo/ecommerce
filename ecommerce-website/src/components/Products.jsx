import Tshirt1 from '../assets/gray-tshirt-removebg-preview.png';
import Tshirt2 from '../assets/white-tshirt-removebg-preview.png';
import Tshirt3 from '../assets/black-tshirt-removebg-preview.png';

const Products = () => {
  return (
    <section>
      <div className="bg-black w-full h-screen pt-16 text-center text-white">
        <div>
          <h1 className="text-4xl font-bold">PRODUCTS</h1>
          <div className="flex justify-around items-center mt-10">
            <div className="bg-white w-auto h-auto rounded-md">
              <img src={Tshirt1} alt="Gray-Tshirt" />
            </div>
            <div className="bg-white w-96 h-[360px] rounded-md">
              <img src={Tshirt2} alt="White-Tshirt" />
            </div>
            <div className="bg-white w-96 h-[360px] rounded-md">
              <img src={Tshirt3} alt="Black-Tshirt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
