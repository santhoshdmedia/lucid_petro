import React, { useEffect, useRef, useState } from 'react';
import aboutVideo from '../assets/video/about.mp4';
import ownerImg from "../assets/ownerAbout.JPG";


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
      <header className="w-full py-10  ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005f5a]">
            About Us
          </h1>
        </div>
      </header>

      {/* Intro Video Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-14">
        <div className="w-full h-[450px] lg:h-[600px] relative rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gray-500 opacity-10 z-0" />
          <video
            src={aboutVideo}
            className="w-full h-full object-cover relative z-10"
            poster="https://lucid-lubricants.com/wp-content/uploads/2023/10/lucid-lubricants-about-us.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-label="About our company"
          />
        </div>
      </section>

      {/* About Content Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-14 ">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Owner Image */}
          <div className="w-full lg:w-1/2">
            <img src={ownerImg} alt="Company Owner" className="object-cover w-full h-full rounded-xl shadow-md" />
          </div>

          {/* Text Content & Progress Bars */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#005f5a] mb-8 text-center">
              Lubricants that Power the Threads of Industry
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 indent-8 text-justify">
              In every engine, gear, and mechanism, there's a silent force at work—lubricants. They are the unsung heroes behind every moving part, reducing friction, enhancing performance, and extending machine life.
            </p>


            {/* Progress Bars */}
            <div ref={progressRef} className="space-y-6">
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
            </div>
          </div>
        </div>

     
      </section>

      {/* advantage section */}

   {/* Advantage Section */}

    </div>
  );
};


export default AboutUs;
