const Section = ({ title, message, className }) => {
  return (
    <section>
      <div
        className={`${className} w-full h-screen pt-16 text-center text-black`}
      >
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="max-w-2xl mx-auto">{message}</p>
      </div>
    </section>
  );
};
export default Section;
