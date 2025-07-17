import { BiLogoDevTo } from 'react-icons/bi';
import { FaCartShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="z-50 fixed bg-[#000] w-screen h-16 flex justify-around items-center">
      <a href="#home" className="text-white text-3xl">
        <BiLogoDevTo />
      </a>
      <nav className="text-white">
        <ul className="flex gap-20 text-lg font-bold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <button className="text-white">
        <a href="#cart" className="text-2xl">
          <FaCartShopping />
        </a>
      </button>
    </header>
  );
};
export default Header;
