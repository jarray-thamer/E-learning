const HeroSection = () => {
  return (
    <div className="hero flex flex-col min-h-screen  text-white bg-center ">
      {/*   Hero-section-NavBar    */}
      <header className=" bg-transparent mt-16">
        <section className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-0">
          <img src="logo.png" alt="logo" />
          <div>
            <button
              id="mobile-open-button"
              className="text-3xl lg:hidden focus:outline-none"
            >
              &#9776;
            </button>
            <nav className="hidden lg:block space-x-7 text-2xl text-white">
              <a href="#Home" className="poppins  font-bold hover:opacity-80">
                Home
              </a>
              <a href="#AboutUs" className="poppins font-bold hover:opacity-80">
                AboutUs
              </a>
              <a href="#Lab" className="poppins font-bold hover:opacity-80">
                Lab
              </a>
              <a
                href="#Services"
                className="poppins font-bold hover:opacity-80"
              >
                Services
              </a>
              <a href="#Contact" className="poppins font-bold hover:opacity-80">
                Contact
              </a>
            </nav>
          </div>
        </section>
      </header>
      {/*   hero-section-Content    */}
      <div className=" mt-44 flex-1 flex items-center flex-col justify-center">
        <div className="flex flex-col text-center align-items-center mx-60">
          <h1 className="poppins text-5xl font-bold mb-14">
            enter the blockchain universe from its widest doors
          </h1>
          <p className="nunito font-bold text-4xl  ">
            GCL is an interesting platform that will teach you in more an
            interactive way more than just a university
          </p>
        </div>
        <div className="flex-1 flex mt-12 flex-wrap">
          <button className="button primary-button">Get Started</button>
          <button className="button secondary-button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
