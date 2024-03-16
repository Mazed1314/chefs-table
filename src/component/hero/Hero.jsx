const Hero = () => {
  return (
    <div
      className="hero h-10/12 md:h-[500px] rounded-3xl"
      style={{
        backgroundImage:
          "url(https://assets.mobilebaymag.com/uploads/2020/11/cooking.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-10 justify-center">
            <button className="btn bg-green-400 border-0 rounded-3xl font-semibold">
              Explore Now
            </button>
            <button className="btn bg-transparent text-white rounded-3xl font-semibold">
              Out Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
