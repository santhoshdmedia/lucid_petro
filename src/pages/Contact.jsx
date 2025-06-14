import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaParking, FaClock, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBreadcrumbs } from '../components/layout';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        to: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://lucid-server01.onrender.com/send-email', formData);
            toast.success(response.data.message || 'Message sent successfully!');
            setFormData({
                name: '',
                to: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error(error.response?.data?.message || 'Failed to send message. Please try again later.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className=''>
            <header className="w-full py-10  about__section" >
                <div className="container mx-auto px-4  z-40 relative ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f7f7] ">
                        Get In Touch
                    </h1>
                    <AppBreadcrumbs />
                </div>
            </header>

            <section className='px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-40'>
  {/* Contact Header */}
  <div className="text-center my-12">
    
    <p className=" text-[#034a9a] font-bold mx-auto text-lg lg:text-2xl md:text-xl ">
      Have questions about our products or services? Our team is ready to help you with expert advice and solutions tailored to your needs.
    </p>
  </div>

  {/* Contact Container */}
  <section className="flex flex-col lg:flex-row items-center gap-8 justify-between text-[#034a9a] my-8 sm:my-12 md:my-16 lg:my-20 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-[#1482aa] to-white">
    {/* Contact Info Section */}
    <div className="w-full h-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Contact Information</h2>
      <p className="text-[#034a9a] mb-8 text-lg leading-relaxed">
        Whether you need technical support, product information, or want to discuss partnership opportunities, we're here to assist you.
      </p>

      <div className="space-y-6">
        <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-[#1482aa] p-3 rounded-full mr-4">
            <FaPhoneAlt className="h-5 w-5 text-[#ffffff]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Phone</h3>
            <p className="text-gray-700">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500 mt-1">Mon-Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-[#1482aa] p-3 rounded-full mr-4">
            <FaEnvelope className="h-5 w-5 text-[#ffffff]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Email</h3>
            <p className="text-gray-700">info@example.com</p>
            <p className="text-gray-700">support@example.com</p>
            <p className="text-sm text-gray-500 mt-1">Typically replies within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-[#1482aa] p-3 rounded-full mr-4">
            <FaMapMarkerAlt className="h-5 w-5 text-[#ffffff]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
            <address className="not-italic text-gray-700">
              79/5 6 Muthaiyampalaiyam Road, <br />
              Kottathur Village Thuraiyur Taluk, <br />
              Thuraiyur, Srirangam, Tiruchirappalli-621004, <br />
              Tamil Nadu, India
            </address>
            <p className="text-sm text-gray-500 mt-2">Open in Google Maps</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          {[FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map((Icon, index) => (
            <a 
              key={index} 
              href="#" 
              className="bg-white p-3 rounded-full shadow-sm text-[#034a9a] hover:bg-teal-100 transition-colors"
              aria-label={`Follow us on ${Icon.name.replace('Fa', '')}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Form Section */}
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-12 space-y-6 rounded-2xl shadow-lg  "
      aria-labelledby="form-title"
    >
      <h3 id="form-title" className="text-2xl font-bold text-[#034a9a] mb-2">Send us a message</h3>
      <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="to"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
            placeholder="your.email@example.com"
            value={formData.to}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
            placeholder="+1 (555) 123-4567"
            value={formData.phone || ''}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
            value={formData.subject}
            onChange={handleInputChange}
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Information">Product Information</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          className="h-4 w-4 text-[#034a9a] focus:ring-[#034a9a] border-gray-300 rounded"
          required
        />
        <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
          I agree to the privacy policy and terms of service
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-[#034a9a] hover:bg-[#034a9a] text-white font-medium py-3 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#034a9a] focus:ring-offset-2 flex items-center justify-center"
      >
        <FaPaperPlane className="mr-2" />
        Send Message
      </button>
    </form>
  </section>

  {/* Map Section with Additional Info */}
  <section className="my-12 mb-[4rem] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
    <div className="bg-[#034a9a] text-white p-6">
      <h2 className="text-2xl font-bold mb-2">Visit Our Facility</h2>
      <p className="mb-4">We welcome visitors by appointment. Contact us to schedule a tour of our manufacturing plant.</p>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center">
          <FaClock className="mr-2" />
          <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
        </div>
        <div className="flex items-center">
          <FaParking className="mr-2" />
          <span>Free parking available</span>
        </div>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30569.202990640013!2d78.65442050358216!3d11.1144443688747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa559b75a3d891%3A0x3714f2b156f464cd!2sLucid%20petro%20chemical!5e0!3m2!1sen!2sin!4v1749189203946!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Lucid Petro Chemical Location Map"
      className="border-t border-gray-200"
    ></iframe>
  </section>
</section>

            <ToastContainer position="top-center" autoClose={5000} />
        </div>
    );
};

export default Contact;
