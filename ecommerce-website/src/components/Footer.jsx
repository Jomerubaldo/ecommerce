import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#fffffe] flex justify-around w-full text-wrap">
        <ul>
          <p className="font-bold text-[20px] mb-3">Help</p>
          <hr />
          <li>
            <a className="font-bold hover:text-gray-500" href="#contact-us">
              Contact Us
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-gray-500" href="#faq">
              FAQ
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-gray-500" href="#accessibility">
              Accessibility
            </a>
          </li>
          <li>
            <a
              className="font-bold hover:text-gray-500"
              href="#customer-support"
            >
              Customer Support
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-gray-500" href="#user-guides">
              User Guides
            </a>
          </li>
        </ul>
        <ul>
          <p class="font-bold text-[20px] mb-3">About</p>
          <hr />
          <li>
            <a className="font-bold hover:text-gray-500" href="#our-story">
              Our Story
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-gray-500" href="#mission">
              Mission
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-gray-500" href="#careers">
              Careers
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-gray-500" href="#press">
              Press
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-gray-500" href="#news">
              News
            </a>
          </li>
        </ul>
        <ul>
          <p className="font-bold text-[20px] mb-3">Service</p>
          <hr />
          <li>
            <a className="font-bold hover:text-gray-500" href="#secure-payment">
              Secure Payment
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-gray-500" href="#custom-orders">
              Custom Orders
            </a>
          </li>
          <li>
            <a
              className="font-bold hover:text-gray-500"
              href="#loyalty-program"
            >
              Loyalty Program
            </a>
          </li>
          <li>
            <a
              className="font-bold hover:text-gray-500"
              href="#customer-support"
            >
              Customer Support
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-gray-500" href="#5">
              Free Shipping
            </a>
          </li>
        </ul>
        <p className="font-bold pt-13">
          &copy; 2025 E-Commerce. Built with love and learning. All rights
          <br />
          <div className="flex gap-2 pt-2 text-2xl">
            <a href="#" className="hover:text-gray-500">
              <FaFacebookSquare />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FaInstagramSquare />
            </a>
            <a href="#" className="hover:text-gray-500">
              <AiFillTikTok />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FaSquareXTwitter />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FaWhatsappSquare />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FaGithubSquare />
            </a>
          </div>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
