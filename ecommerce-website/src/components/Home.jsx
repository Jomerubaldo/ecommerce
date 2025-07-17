import Hero from '../assets/hero-picture-removebg-preview.png';

const Home = () => {
  return (
    <section>
      <div className="bg-white w-full h-screen pt-16 text-center text-black">
        <div className="flex justify-around items-center">
          <div className="space-y-4 textt-wrap relative left-32">
            <h1 className="font-bold text-5xl">
              Sana maging Software Engineer
            </h1>
            <p className="relative left-[-90px] font-bold">
              Mag aral ng mga skills na kailangan mo para maging Software
              Engineer.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#000] font-bold text-green-500 px-5 py-1 rounded-md">
                True
              </button>
              <button className="bg-[#000] font-bold text-red-500 px-5 py-1 rounded-md">
                False
              </button>
            </div>
          </div>
          <div>
            <img src={Hero} alt="Hero" width="535px" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
