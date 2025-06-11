import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            const response = await axios.post('http://localhost:3000/send-email', formData);
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
        <div className='px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-40'>
            <h1 className="text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:w-full md:w-full w-[80%] font-bold mx-auto text-[#005f5a] mb-[6rem] relative group mt-[4rem]">
                Get in Touch
                <span className="absolute inset-x-0 bottom-[-30px] h-1 w-[30%] bg-teal-900 rounded-full left-[50%] transform -translate-x-1/2 "></span>
            </h1>

            <section className="flex flex-col lg:flex-row items-center gap-8 justify-between text-teal-900 my-8 sm:my-12 md:my-16 lg:my-20 rounded-2xl shadow-lg overflow-hidden p-6 sm:p-8 lg:p-12">
                {/* Contact Info Section */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-teal-800 mb-6 text-lg">We'd love to hear from you!</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <FaPhoneAlt className="h-5 w-5 text-teal-900 mr-3" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="h-5 w-5 text-teal-900 mr-3" />
                            <span>info@example.com</span>
                        </div>
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="h-5 w-5 text-teal-900 mr-3 mt-1" />
                            <span>
                                79/5 6 Muthaiyampalaiyam Road, <br /> 
                                Kottathur Village Thuraiyur Taluk, <br /> 
                                Thuraiyur, Srirangam, Tiruchirappalli-621004, <br /> 
                                Tamil Nadu, India
                            </span>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <form 
                    onSubmit={handleSubmit} 
                    className="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-12 space-y-6 rounded-2xl shadow-lg"
                    aria-labelledby="form-title"
                >
                    <h3 id="form-title" className="text-xl font-semibold text-gray-800">Send us a message</h3>
                    
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-900 focus:border-teal-900 transition focus:outline-none"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="to"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-900 focus:border-teal-900 transition focus:outline-none"
                                placeholder="your.email@example.com"
                                value={formData.to}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-900 focus:border-teal-900 transition focus:outline-none"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-900 focus:border-teal-900 transition focus:outline-none"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-900 hover:bg-teal-800 text-white font-medium py-3 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-900 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Map Section */}
            <section className="my-12 mb-[4rem] rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30569.202990640013!2d78.65442050358216!3d11.1144443688747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa559b75a3d891%3A0x3714f2b156f464cd!2sLucid%20petro%20chemical!5e0!3m2!1sen!2sin!4v1749189203946!5m2!1sen!2sin"
                    width="100%" 
                    height="600" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dmedia Location Map"
                ></iframe>
            </section>

            <ToastContainer position="top-center" autoClose={5000} />
        </div>
    );
};

export default Contact;
