import React, { useState, useEffect } from "react";
import item_one from "../assets/item1.png";
import item_two from "../assets/item2.png";
import item_three from "../assets/item3.jpg";
import item_four from "../assets/item4.jpg";
import item_five from "../assets/item5.jpg";
import item_six from "../assets/item6.jpg";
import grease from "../assets/product/productone.jpg";
import engineOil from "../assets/product/producttwo.jpg";
import lubricatingGrease from "../assets/product/productthree.jpg";
import GearOil from "../assets/product/productfour.jpg";
import automobile from "../assets/product/productfive.jpg";
import blockqotes from "../assets/blockquotes.png";
import owner from "../assets/owner.webp";
import { Link } from "react-router";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: item_one },
    { id: 2, image: item_two },
    { id: 3, image: item_three },
    { id: 4, image: item_four },
    { id: 5, image: item_five },
    { id: 6, image: item_six },
  ];
  const products = [
    {
      id: 1,
      name: "Automotive Grease",
      image: automobile,
      route: "/products/automotive-grease",

    },
    {
      id: 2,
      name: "Engine Oil",
      image: engineOil,
      route: "/products/engine-oil",
    },
    {
      id: 3,
      name: "Gear Oil",
      image: GearOil,
      route: "/products/gear-oil",

    },
    {
      id: 4,
      name: "Grease Bucket",
      image: grease,
      route: "/products/grease-bucket",
    },
    {
      id: 5,
      name: "Lubricating Grease",
      image: lubricatingGrease,
      route: "/products/lubricating-grease",
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="">
      <div className="relative">
        <div className="carousel w-full lg:h-[85vh] md:h-[70vh] h-[60vh] relative overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              id={`slide${slide.id}`}
              className={`carousel-item absolute w-[100%] h-full transition-opacity duration-500 ${index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
                }`}
            >
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt={`Slide ${slide.id}`}
              />
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-transparent text-white text-[2rem] hover:text-gray-800   transition-colors"
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-5 top-1/2 bg-transparent text-white text-[2rem]"
            aria-label="Next slide"
          >
            ❯
          </button>

          {/* Navigation dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 ">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                    ? "bg-white w-6"
                    : "bg-white bg-opacity-50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="  sm:px-[4rem] lg:px-[8rem] xl:px-[8rem] 2xl:px-[10rem]  ">
        <div className="my-16 sm:my-20 md:my-24 lg:my-32 ">
          <h1 className="text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:w-full md:w-full w-[80%] font-bold mx-auto text-[#005f5a] mb-[6rem] relative group ">
            Our Products and Services
            <span className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] h-1.5 bg-[#84b5d3] w-1/6 transition-all duration-300 ease-in-out "></span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-10  place-items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col flex-wrap items-center w-full  hover:scale-105 transition-transform duration-300 cursor-pointer"              >
                <div className="aspect-square  size-50 rounded-full drop-shadow-lg p-4 overflow-hidden ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover "
                    loading="lazy"
                  />
                </div>
                <Link
                  to={product.route}
                  className="text-center font-bold text-lg sm:text-xl text-[#005f5a] md:text-2xl mt-3 sm:mt-4"
                >
                  {product.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <section className="flex flex-col lg:flex-row gap-8 md:gap-10 items-center my-16 sm:my-20 md:my-24 lg:my-20">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={owner}
              alt="Company owner"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left text-[#005f5a]">
              "Leading Provider" – Reliability and Trust
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#003a38] text-center lg:text-left">
              Customers don't just want products; they want assurance that
              they're partnering with the best. By striving to be the leading
              provider, the company positions itself as an industry
              authority—one that invests in research, quality, and customer
              satisfaction. For businesses relying on machinery and equipment,
              this means:
            </p>

            <ul className="space-y-3 pl-5">
              <li className="text-sm sm:text-base md:text-lg text-[#003a38]">
                <strong className="font-semibold">Dependable products:</strong>{" "}
                that minimize downtime.
              </li>
              <li className="text-sm sm:text-base md:text-lg text-[#003a38]">
                <strong className="font-semibold">Expert support:</strong> from
                a company that understands lubrication challenges deeply.
              </li>
              <li className="text-sm sm:text-base md:text-lg text-[#003a38]">
                <strong className="font-semibold">
                  Continuous improvement:
                </strong>{" "}
                that enhances product performance and customer satisfaction.
              </li>
            </ul>
          </div>
        </section>

        {/* quotes */}
        <div className="mt-16 sm:mt-20 md:mt-26 lg:mt-30 ">
          <h1 className="text-center lg:text-4xl md:text-3xl sm:text-2xl text-4xl lg:w-full md:w-full w-[80%] font-bold mx-auto text-[#005f5a] mb-[6rem] relative group">
            Lucid Lubricants – Redefining Excellence in Motion
            <span className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] h-1.5 bg-[#84b5d3] w-1/6 transition-all duration-300 ease-in-out "></span>
          </h1>

          {/* </blockquote>  */}
          <div className="relative min-h-[300px]">
            {" "}
            {/* Set minimum height */}
            {/* Background image */}
            <img
              src={blockqotes}
              alt=""
              className="absolute    top-[-100px] lg:w-[250px]  size-2/4  opacity-10 z-0"
            />
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center p-4 sm:p-8">
              <blockquote
                className="text-center text-md sm:text-xl text-[#005f5a] md:text-xl"
                style={{ lineHeight: "1.6" }}
              >
                <p className="mb-6 font-semibold italic">
                  "At Lucid, we don't just make lubricants - we engineer the
                  science of smooth performance."
                </p>

                <p className="mb-5">
                  Our advanced formulations are built to outlast, outperform,
                  and outpace - reducing downtime while minimizing environmental
                  impact.
                </p>

                <p className="font-medium">
                  <span className="text-[#003a38]">
                    Lucid: Powering Potential. Fluid by Fluid.
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-14 mb-20">
          <h2 className="text-md md:text-lg lg:text-xl text-[#005f5a] mb-4 text-center font-normal">Our Features</h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#005f5a] mb-20 text-center capitalize">Why Choose Our Lubricants</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-10 lg:mx-0 md:mx-0 sm:mx-0 sm:gap-8 lg:gap-12">
            {/* Quality Assurance */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#005f5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-xl font-bold text-[#005f5a]">Premium Quality</h3>
                <p className="text-gray-600">Rigorous testing ensures our lubricants meet the highest industry standards.</p>
              </div>
            </div>

            {/* Performance */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#005f5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-xl font-bold text-[#005f5a]">Enhanced Performance</h3>
                <p className="text-gray-600">Optimized formulas for maximum efficiency and equipment protection.</p>
              </div>
            </div>

            {/* Longevity */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#005f5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-xl font-bold text-[#005f5a]">Extended Lifespan</h3>
                <p className="text-gray-600">Reduce wear and tear to prolong your machinery's operational life.</p>
              </div>
            </div>

            {/* Technical Support */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#005f5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-xl font-bold text-[#005f5a]">Expert Support</h3>
                <p className="text-gray-600">Our lubrication specialists are always available to assist you.</p>
              </div>
            </div>
          </div>
        </section>
        {/* faq section */}
        <div class=" mx-auto  mb-20 sm:mb-24 md:mb-24 lg:mb-30 ">
          <h1 className="text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:w-full md:w-full w-[80%] font-bold mx-auto text-[#005f5a] mb-[6rem] relative group">
            FAQ Section
            <span className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] h-1.5 bg-[#84b5d3] w-1/6 transition-all duration-300 ease-in-out "></span>
          </h1>
          <div class="flex flex-col lg:flex-row  items-center gap-8">
            {/* <!-- Left: Heading --> */}
            <div className="flex flex-col  items-center gap-4 w-full">
              <div className="collapse collapse-arrow bg-white border border-base-300 ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-bold text-lg text-[#005f5a]">
                  How do I create an account?
                </div>
                <div className="collapse-content text-sm text-black">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-bold text-lg text-[#005f5a]">
                  I forgot my password. What should I do?
                </div>
                <div className="collapse-content text-sm text-black">
                  Click on "Forgot Password" on the login page and follow the
                  instructions sent to your email.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-bold text-lg text-[#005f5a]">
                  How do I update my profile information?
                </div>
                <div className="collapse-content text-sm text-black">
                  Go to "My Account" settings and select "Edit Profile" to make
                  changes.
                </div>
              </div>
            </div>
            {/* <!-- Right: FAQ Items --> */}
            {/* <div class="w-full lg:w-1/2 ">
              <h1 class="text-left text-6xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bdd9d7] to-[#005f5a]">
                Frequently Asked Questions
                <span class="absolute bottom-[-10px] left-0 h-1.5 bg-[#84b5d3] w-1/4 transition-all duration-300 ease-in-out"></span>
              </h1>
            </div> */}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
