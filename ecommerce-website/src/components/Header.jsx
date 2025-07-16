function Header() {
  return (
    <header className="fixed bg-[#000] w-screen h-16 flex justify-around items-center">
      <a className="text-white" href="#home">
        Logo
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
        <a href="#cart">Cart</a>
      </button>
    </header>
  );
}
export default Header;
