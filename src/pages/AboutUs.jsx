import React, { useEffect, useRef, useState } from 'react';
import aboutVideo from '../assets/video/about.mp4';
import ownerImg from "../assets/owner.jpg";
import aboutImg from '../assets/employees/emp2.webp'
import { AppBreadcrumbs } from '../components/layout';

const progressItems = [
  { label: 'Quality Control', value: 100 },
  { label: 'Professional Team', value: 100 },
  { label: 'Quality Machine', value: 100 },
];

const AboutUs = () => {
  const progressRef = useRef(null);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stop observing after first intersection
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = progressRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="w-full py-10  about__section" >
        <div className="container mx-auto px-4  z-40 relative ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f7f7] ">
            About Us
          </h1>
          <AppBreadcrumbs/>
        </div>
      </header>
      {/* About Content Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-14 ">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Owner Image */}
          <div className="w-full lg:w-1/2">
            <img src={ownerImg} alt="Company Owner" className="object-cover w-full h-full rounded-xl drop-shadow-lg" />
          </div>

          {/* Text Content & Progress Bars */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#005f5a] mb-8 text-center lg:text-left">
              Lubricants that Power the Threads of Industry
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 indent-8 text-justify">
              Established in 2004, Lucid Petro Chemical is a forward-thinking lubricant and grease manufacturing company headquartered in India. We serve a diverse range of industries—automotive, industrial, energy, and more—offering environmentally responsible, high-performance oils and greases.We are also an environmental technology company offering cost-effective, sustainable solutions to reduce emissions in diesel engines, industrial boilers, and power plants.
            </p>


            {/* Progress Bars */}
            {/* <div ref={progressRef} className="space-y-6">
              {progressItems.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="text-xl font-medium text-gray-700">{label}</span>
                    <span className="text-xl font-medium text-gray-700">{value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#005f5a] h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: visible ? `${value}%` : '0%' }}
                      aria-label={`${label} progress`}
                    />
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

     
      </section>

     {/* Intro Video Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-14">
      <div className="w-full h-[450px] lg:h-[600px] relative rounded-2xl overflow-hidden shadow-lg group">
        {/* Video element */}
        <video
          src={aboutVideo}
          className="w-full h-full object-cover"
          poster="https://lucid-lubricants.com/wp-content/uploads/2023/10/lucid-lubricants-about-us.jpg"
          muted
          loop
          playsInline
          aria-label="About our company"
         autoPlay
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
          
         
        </div>
      </div>
    </section>
    <section className="container mx-auto px-4 sm:px-6 pb-16 lg:pb-24 py-12 rounded-xl">
  <h2 className="text-3xl font-bold text-center text-[#005f5a] mb-12">Our Environmental Leadership Pathway</h2>
  
  <div className="relative  mx-auto">
    {/* Timeline line */}
    <div className="absolute left-1/2 w-1 h-full bg-[#BDD9D7] transform -translate-x-1/2"></div>
    
    {[
      "Emulsified diesel fuel solutions reducing emissions",
      "Industrial boiler fuel innovations",
      "Global lubrication consulting network",
      "Training programs & knowledge sharing"
    ].map((item, index) => (
      <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
        <div className="w-6 h-6 rounded-full bg-[#005f5a] border-4 border-white z-10"></div>
        <div className={`w-5/12 p-4 rounded-lg ${index % 2 === 0 ? 'ml-4' : 'mr-4'} bg-white shadow-md`}>
          <p className="text-gray-800 text-sm lg:text-lg font-bold">{item}</p>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};


export default AboutUs;
