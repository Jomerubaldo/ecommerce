import imgAbout from '../assets/about-picture-removebg-preview.png';

const About = () => {
  return (
    <section>
      <div className="bg-white w-full h-screen pt-11 text-center text-black">
        <h1 className="text-4xl font-bold">ABOUT</h1>
        <div className=" flex justify-around items-center">
          <div className="bg-gray-500 rounded-md mt-5">
            <img src={imgAbout} />
          </div>
        </div>
        <p className="text-wrap text-lg font-semibold mt-5 px-10">
          Welcome to [Your Store Name] — your trusted online destination for
          quality products and unbeatable service. We are passionate about
          bringing you a wide range of [insert your niche, e.g., fashion,
          electronics, home essentials] at affordable prices. Founded in [Year],
          our mission is to make online shopping simple, secure, and enjoyable.
          We value customer satisfaction above all, offering fast delivery, easy
          returns, and responsive support. At [Your Store Name], you're not just
          a customer — you're part of our growing family.
        </p>
      </div>
    </section>
  );
};
export default About;
