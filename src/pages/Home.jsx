import React, { useState, useEffect } from "react";
import engineOil from "../assets/product/engine_oil.png";
import lubricatingGrease from "../assets/product/lubegrease.jpg";
import GearOil from "../assets/product/gearoil.jpg";
import automobile from "../assets/product/grease2.jpg";
import blockqotes from "../assets/blockquotes.png";
import entrance from "../assets/employees/entrnace.webp";
import { Link } from "react-router";
import { motion } from "motion/react";
import intro from '../assets/video/drone.mp4';
import slide_two from '../assets/slide_2.jpg';
import slide_three from '../assets/slide_3.webp';
import slide_four from '../assets/slide_4.webp';
import slide_five from '../assets/slide_5.webp';
import slide_six from '../assets/slide_6.jpg';
import Production_video_one from "../assets/video/production_one.mp4"
import Production_video_two from "../assets/video/production_two.mp4"

import {
  FaWeightHanging,
  FaOilCan,
  FaIndustry,
  FaBoxes,
  FaTruck,
  FaFlask,
  FaUserTie,
  FaShippingFast,
  FaLeaf,
  FaWarehouse
} from 'react-icons/fa';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: Production_video_one, type: "video" },
    { id: 2, image: Production_video_two, type: "video" },
    { id: 3, image: intro, type: "video" },
    // { id: 2, image: slide_one, type: "image " },
    { id: 4, image: slide_two, type: "image" },
    { id: 5, image: slide_three, type: "image" },
    { id: 6, image: slide_four, type: "image" },
    { id: 7, image: slide_five, type: "image" },
    { id: 8, image: slide_six, type: "image" },
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
      name: "Lubricating Grease",
      image: lubricatingGrease,
      route: "/products/lubricating-grease",
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
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

  const iconPop = (duration) => ({
    initial: { y: 0, scale: 1 },
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: duration,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "loop",
      }
    }
  });

  return (
    <div className="">
      {/* slider */}
      <div className="relative">
        <div className="carousel w-full lg:h-[85.5vh] md:h-[70vh] h-[30vh] relative overflow-hidden">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              id={`slide-${slide.id}`}
              className={`carousel-item absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide
                ? "opacity-100 z-10"
                : "opacity-0 pointer-events-none"
                }`}
              aria-hidden={index !== currentSlide}
            >
              {slide.type === "video" ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`Video slide ${index + 1}`}
                >
                  <source src={slide.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slide.image}
                  className="w-full h-full "
                  alt={`Slide ${index + 1}`}
                  loading={index === currentSlide ? "eager" : "lazy"}
                />
              )}
            </div>
          ))}

          {/* Navigation arrows */}
          <div className="absolute inset-0 flex items-center justify-between z-20 pointer-events-none">
            <button
              onClick={goToPrevSlide}
              className="pointer-events-auto ml-4 p-2  text-white text-2xl rounded-full hover:bg-opacity-50 transition-all"
              aria-label="Previous slide"
            >
              ❮
            </button>
            <button
              onClick={goToNextSlide}
              className="pointer-events-auto mr-4 p-2  text-white text-2xl rounded-full hover:bg-opacity-50 transition-all"
              aria-label="Next slide"
            >
              ❯
            </button>
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "bg-white w-6"
                  : "bg-white bg-opacity-50 hover:bg-opacity-70"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>
        </div>
      </div>
      {/* about content */}
      <div className="  sm:px-[4rem] lg:px-[8rem] xl:px-[8rem] 2xl:px-[10rem] overflow-x-hidden ">
        <div className="my-16 sm:my-20 md:my-24 lg:my-32 ">
          <h1 className="text-center lg:text-5xl md:text-4xl sm:text-4xl text-3xl lg:w-full md:w-full w-[80%] font-bold mx-auto text-[#005f5a] mb-[2rem] relative group ">
            Our Products and Services
            <span className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] h-1.5 bg-[#84b5d3] w-1/6 transition-all duration-300 ease-in-out "></span>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 place-items-center">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="flex flex-col items-center w-full cursor-pointer group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="rounded-lg p-4 overflow-hidden"
                  whileHover={iconPop(0.3)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-auto h-30 lg:h-55 md:h-40 object-contain"
                    loading="lazy"
                  />
                </motion.div>

                <Link
                  to={product.route}
                  className="text-center font-bold text-lg sm:text-xl text-[#005f5a] md:text-2xl mt-3 sm:mt-4 group-hover:text-[#003d3a] transition-colors"
                >
                  {product.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <section className="flex flex-col lg:flex-row gap-8 md:gap-10 items-center my-16 sm:my-20 md:my-24 lg:my-20 mx-10 lg:mx-0 md:mx-0 sm:mx-0 overflow-x-hidden">
          <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={entrance}
              alt="Company owner"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-center lg:text-left md:text-left lg:text-4xl md:text-4xl sm:text-4xl text-3xl lg:w-full md:w-full  font-bold mx-auto text-[#005f5a] mb-[2rem] relative group ">
              Welcome to Lucid Petro Chemical
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#003a38]  leading-6 lg:leading-10 md:leading-6 text-justify  indent-10">
              Since 2004, Lucid Petro Chemical has been a leading innovator in the lubricants and grease manufacturing industry. We specialize in high-performance automotive and industrial solutions, crafting tailor-made products that meet stringent quality, environmental, and operational standards.  
            </p>

            <blockquote className="border-l-4 lg:border-[#005f5a] md:border-[#005f5a] border-none pl-4 italic text-lg sm:text-lg md:text-xl lg:text-2xl text-[#042524] lg:ml-[30%] md:ml-[30%] ml-8">
              “Driven by Performance. Powered by Innovation.”
            </blockquote>
          </motion.div>
        </section>

        {/* quotes */}
        <motion.div initial={{ opacity: 0, y: -200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="mt-16 sm:mt-20 md:mt-26 lg:mt-30 overflow-x-hidden">
          <h1 className="text-center   lg:text-5xl md:text-4xl sm:text-4xl text-3xl lg:w-full md:w-full font-bold mx-auto text-[#005f5a] mb-[2rem] relative group bg-transparent">
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
              className="absolute top-[-100px] left-[10%] lg:w-[250px]  size-3/4  opacity-10 z-0"
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
        </motion.div>


      </div>
      {/* why choose us section */}
      <section className=" sm:px-[4rem] lg:px-[8rem] xl:px-[8rem] 2xl:px-[10rem] bg-[#bdd8d6] overflow-x-hidden">
        <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-14 pb-20 relative ">

          <h2 className="text-md md:text-lg lg:text-xl text-[#005f5a] mb-4 text-center font-normal">Our Features</h2>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#005f5a] mb-20 text-center capitalize">Why Choose Our Lubricants</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-10 lg:mx-0 md:mx-0 sm:mx-0 sm:gap-8 lg:gap-12">
            {/* Vendor-Neutral Consulting */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group h-[250px]">

              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-[#005f5a] transition-colors duration-300 group-hover:text-[#00857e]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 15l3-3m-3 3l-3-3m3 3v-2m3 3h-2m-4 0H7m4 0h2m5-6V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1m12 12v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1" />
              </svg>

              {/* Title */}
              <h3 className="text-xl text-center font-bold text-[#005f5a] group-hover:text-[#00857e] transition-colors duration-300">
                Vendor-Neutral Consulting
              </h3>

              {/* Hidden paragraph that appears on hover */}
              <p className="text-gray-600 text-center absolute inset-0 flex items-center justify-center border-2 border-dashed m-5 rounded-2xl border-[#005f5a] bg-[#ffffff] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-xl">
                We recommend what's right, not what we sell
              </p>

              {/* Animated border */}
            </div>
            {/* Global Presence */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group h-[250px]">

              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-[#005f5a] group-hover:text-[#00857e] transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              {/* Title */}
              <h3 className="text-xl text-center font-bold text-[#005f5a] group-hover:text-[#00857e] transition-colors duration-300">
                 Global Presence
              </h3>

              {/* Hidden paragraph that appears on hover */}
              <p className="text-gray-600 text-center absolute inset-0 flex items-center justify-center bg-[#ffffff] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-xl border-2 border-dashed m-5 rounded-2xl">
                 We work worldwide in multiple languages
              </p>

              {/* Animated border */}
            </div>

                      {/* Education-First Approach */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group h-[250px]">

              {/* Icon */}
               <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-[#005f5a] group-hover:text-[#00857e] transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {/* Title */}
              <h3 className="text-xl text-center font-bold text-[#005f5a] group-hover:text-[#00857e] transition-colors duration-300">
                  Education-First Approach
              </h3>

              {/* Hidden paragraph that appears on hover */}
              <p className="text-gray-600 text-center absolute inset-0 flex items-center justify-center bg-[#ffffff] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-xl border-2 border-dashed m-5 rounded-2xl">
                  Our focus is knowledge and support, not just products.
              </p>

              {/* Animated border */}
            </div>

                 {/* Expertise You Can Trust */}     
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group h-[250px]">

              {/* Icon */}
               <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-[#005f5a] group-hover:text-[#00857e] transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {/* Title */}
              <h3 className="text-xl text-center font-bold text-[#005f5a] group-hover:text-[#00857e] transition-colors duration-300">
                  Education-First Approach
              </h3>

              {/* Hidden paragraph that appears on hover */}
              <p className="text-gray-600 text-center absolute inset-0 flex items-center justify-center bg-[#ffffff] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-xl border-2 border-dashed m-5 rounded-2xl">
                 Decades of experience since 2004
              </p>

              
            </div>
          </div>
        </section>
      </section>
      <section className=" sm:px-[4rem] lg:px-[8rem] xl:px-[8rem] 2xl:px-[10rem]  py-16 lg:py-20 md:py-20 sm:py-16 relative overflow-x-hidden">

        <div className="object-cover w-full h-full absolute top-0 left-0 z-0 infrastructure__section" />
        {/* faq section */}
        <div className="mx-auto  z-10 relative">
          <h1 className="text-center lg:text-5xl md:text-4xl sm:text-4xl text-3xl lg:w-full md:w-full w-[80%] font-bold mx-auto text-[#ffffff] mb-[6rem] relative group">
            Our Infrastructure & Facilities
            {/* <span className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] h-1.5 bg-[#84b5d3] w-1/6 transition-all duration-300 ease-in-out"></span> */}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-12 px-4">
            {/* Item 1 - Capacity */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#005f5a] p-3 rounded-lg text-white">
                  <FaWeightHanging className="text-2xl" />
                </div>
                <p className="text-lg font-bold text-[#ffffff]">2000 tons/month blending, packing & distribution capacity</p>
              </div>
            </motion.div>

            {/* Item 2 - Oil Blending */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaOilCan className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">Semi-automatic oil blending line</p>
              </div>
            </motion.div>

            {/* Item 3 - Grease Production */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#005f5a] p-3 rounded-lg text-white">
                  <FaIndustry className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">New grease production unit</p>
              </div>
            </motion.div>

            {/* Item 4 - Packing Line */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaBoxes className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">Fully automatic packing line – 3500 L/hr</p>
              </div>
            </motion.div>

            {/* Item 5 - Storage Tanks */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#005f5a] p-3 rounded-lg text-white">
                  <FaWarehouse className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">Additional storage tanks</p>
              </div>
            </motion.div>

            {/* Item 6 - Fleet */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaTruck className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">Own fleet for distribution</p>
              </div>
            </motion.div>

            {/* Item 7 - QC Lab */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#005f5a] p-3 rounded-lg text-white">
                  <FaFlask className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">Advanced QC laboratory</p>
              </div>
            </motion.div>

            {/* Item 8 - Personnel */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaUserTie className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">Experienced technical personnel</p>
              </div>
            </motion.div>

            {/* Item 9 - Delivery */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#005f5a] p-3 rounded-lg text-white">
                  <FaShippingFast className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">Flexible delivery systems</p>
              </div>
            </motion.div>

            {/* Item 10 - Eco-friendly */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(10,31,10,0.58)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaLeaf className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">100% government-compliant, eco-friendly gas-based plant</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
