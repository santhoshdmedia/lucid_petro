import React, { useEffect, useRef, useState } from 'react';
import aboutVideo from '../assets/video/about.mp4';
import ownerImg from "../assets/owner.jpg";
import aboutImg from '../assets/employees/emp2.webp'
import { AppBreadcrumbs } from '../components/layout';
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";

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
          <AppBreadcrumbs />
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#034a9a] mb-8 text-center lg:text-left">
              Lubricants that Power the Threads of Industry
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 indent-8 text-justify">
              Founded in 2016, Lucid Petro Chemical is a leading Indian manufacturer of high-performance lubricants and greases, serving industries like automotive, industrial machinery, and energy. We specialize in eco-friendly formulations that enhance efficiency while minimizing environmental impact. Beyond lubrication, we pioneer sustainable emission-reduction technologies for diesel engines, industrial boilers, and power plants. Our cost-effective solutions help businesses lower their carbon footprint without compromising performance. Committed to innovation and sustainability, Lucid Petro Chemical bridges cutting-edge technology with industrial reliability, ensuring cleaner operations and longer equipment life across global markets.
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
                      className="bg-[#034a9a] h-2.5 rounded-full transition-all duration-1000 ease-out"
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
      <section className="container mx-auto w-full px-4 sm:px-6 pb-16 lg:pb-24 py-12 rounded-xl leader__section">
        <WhoWeAre/>
      </section>
      
      <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
            <div className="p-6 flex flex-col items-center text-center h-full">
              <TbTargetArrow className='text-6xl text-[#034a9a] mb-4 group-hover:text-[#00857e] transition-colors' />
              <h3 className="text-xl font-semibold mb-2 text-[#034a9a]">Vision</h3>
              <p className="text-gray-700">Global leader in innovative, eco-friendly lubricants enhancing performance and sustainability</p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
            <div className="p-6 flex flex-col items-center text-center h-full">
              <FaEye className='text-6xl text-[#034a9a] mb-4 group-hover:text-[#00857e] transition-colors' />
              <h3 className="text-xl font-semibold mb-2 text-[#034a9a]">Mission</h3>
              <p className="text-gray-700">Deliver high-quality lubrication solutions while reducing environmental impact</p>
            </div>
          </div>

          {/* Values Card */}
          <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
            <div className="p-6 flex flex-col items-center text-center h-full">
              <FaHandHoldingHeart className='text-6xl text-[#034a9a] mb-4 group-hover:text-[#00857e] transition-colors' />
              <h3 className="text-xl font-semibold mb-2 text-[#034a9a]">Values</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <p className="text-gray-700">
                  Innovation | Sustainability | Quality | Customer Trust | Environmental Responsibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const WhoWeAre = () => {
  return (
    <section className=" bg-white">
      <div className="w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#034a9a] mb-8 text-center">
          Who We Are
        </h2>
        
        <div className="bg-[#f9f9f9] rounded-xl p-8 md:p-10 shadow-md">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Established in 2016, our leadership team brings decades of combined experience in the 
            petrochemical industry. With manufacturing facilities across India, we operate under 
            the core values of innovation, sustainability, quality, and environmental responsibility.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
           Lucid Petro Chemical is a trusted manufacturer and supplier of premium-grade lubricants, oils, and greases, crafted under a technology license agreement with Baldwin Petroleum Technologies, Canada. Headquartered in Trichy, Tamil Nadu, we are committed to delivering superior lubrication solutions that enhance machinery performance, improve fuel efficiency, and extend equipment life.
          </p>
          
        
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#034a9a] text-white p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">10+ Years</h3>
              <p className="text-[#bdd9d7]">Industry Experience</p>
            </div>
            
            <div className="bg-[#034a9a] text-white p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">3+ Locations</h3>
              <p className="text-[#bdd9d7]">Across India</p>
            </div>
            
            <div className="bg-[#034a9a] text-white p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">100+ Clients</h3>
              <p className="text-[#bdd9d7]">Served Globally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default AboutUs;
