const Section = (props) => {
  return (
    <section id="home">
      <div className="bg-[#fffffe] w-full h-screen pt-16 text-center text-black">
        <h1 className="text-5xl font-bold mb-4">{props.title}</h1>
        <p className="max-w-2xl mx-auto">{props.message}</p>
      </div>
    </section>
  );
};
export default Section;
