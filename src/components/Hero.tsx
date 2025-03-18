// array of object of images

const brandLogos = [
  { name: databitzLogo },
  { name: audiophilLogo },
  { name: meetLogo },
  { name: makerLogo },
];

const Hero = () => {
  return (
    <>
      <section className=" font-epilogue grid md:grid-cols-2 md:grid-flow-col grid-flow-row h-fit max-w-6xl mx-auto px-4">
        {/* Mobile view */}
        <div className=" md:hidden">
          <img src={heroBgMobile} alt="" className="" />
        </div>
        {/* Left content */}
        <div className="  col-span-1  px-20 ">
          <div className="flex flex-col space-y-10">
            <span className="text-6xl font-bold mt-[125px] leading-16 md:max-w-fit max-w-full">
              {/* Desktop view */}
              <h1 className="hidden md:block">Make</h1>
              <h2 className="hidden md:block">remote work</h2>
              {/* Mobile view */}
              <h1 className="md:hidden text-4xl text-center">
                Make remote work
              </h1>
            </span>
            {/* Paragraph */}
            <p className=" text-lg mx-auto md:mx-0 font-sans md:text-left text-center leading-8 max-w-[400px]">
              Get your team in sync, no matter your location. Streamline
              processes. Create team rituals and watch Productivity soar
            </p>

            <div className="md:items-start flex justify-center md:justify-start">
              <button className="border border-gray-600 mb-20 font-bold bg-black text-white rounded-lg w-[8rem] py-2 hover:bg-white cursor-pointer hover:border-black hover:text-black">
                Learn more
              </button>
            </div>

            {/* Brand logos */}
            <div className="hidden md:flex md:items-center gap-8 max-w-[600px]">
              {brandLogos.map((logo, index) => (
                <span key={index} className="">
                  <img src={logo.name} alt="" className="" />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className=" hidden md:flex md:col-span-1 px-8">
          <img src={heroBg} alt="hero image" className=" h-[620px]" />
        </div>
      </section>
    </>
  );
};

export default Hero;

import databitzLogo from "../assets/intro-section-with-dropdown-navigation-main/images/client-databiz.svg";
import audiophilLogo from "../assets/intro-section-with-dropdown-navigation-main/images/client-audiophile.svg";
import meetLogo from "../assets/intro-section-with-dropdown-navigation-main/images/client-meet.svg";
import makerLogo from "../assets/intro-section-with-dropdown-navigation-main/images/client-maker.svg";

import heroBg from "../assets/intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png";
import heroBgMobile from "../assets/intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png";
