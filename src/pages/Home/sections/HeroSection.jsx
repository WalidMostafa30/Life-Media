import heroImg from "../../../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <article
      style={{ backgroundImage: `url(${heroImg})` }}
      className="h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-end">
        <div className="max-w-xl mb-20 flex flex-col items-center lg:items-start text-center mx-auto lg:mx-0 lg:text-left gap-4 text-white">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Ready to Take Your Brand to the Next Level?
          </h1>
          <p className="text-lg">
            We help clinics, restaurants, banks, and events grow through smart
            marketing, creative content, and bold digital strategies. From
            branding to execution — we make it happen.
          </p>
          <div className="flex gap-4">
            <button className="mainBtn">15-min Free consultation</button>
            <button className="mainBtn">See Projects</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;
