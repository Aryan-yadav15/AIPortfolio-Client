import React, { useRef, useState } from 'react'
import Modal from './sections/Modal';
import emailjs from '@emailjs/browser';

const Footer = ({ aboutRef, contactRef, projectsRef }) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleViewMoreClick = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_uid66jz', 'template_431qapa', form.current, 'uXWBgZT1nRdMB3EwV')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send email.');
                }
            );
    };

    return (
        <>
            <footer>
                <div className="flex flex-col lg:flex-row lg:gap-5">
                    <div className="flex flex-col justify-center items-center flex-2 bg-gradient-to-b from-gray-200 to-purple-300 rounded-t-3xl">
                        <section className='flex flex-col'>
                            <div className="pb-10">
                                <div className='flex flex-col gap-7 justify-center items-center pt-20 p-10 text-gray-900 text-center'>
                                    <h1 className='text-6xl lg:text-8xl font-Montserrat font-semibold'>Contact us?</h1>
                                    <div className="flex">
                                        <p className='text-2xl lg:text-3xl'>We'd love to hear from you!</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="container mx-auto px-4 lg:px-10 py-8 lg:py-16 bg-gray-100 rounded-lg shadow-md">
                            <h2 className="text-3xl text-center text-gray-800 font-medium mb-8">What We Offer</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-lg p-4 hover:shadow-lg bg-gradient-to-r from-purple-100 to-purple-200 relative overflow-hidden">
                                    <i className="fas fa-info-circle text-4xl text-purple-500 z-10"></i>
                                    <h3 className="text-xl text-gray-800 font-medium mt-2 z-10">Our Info</h3>
                                    <p className="text-gray-600 text-sm text-center italic z-10">Discover more about us</p>
                                    <div className="text-gray-600 text-base w-full z-10">
                                        <div className="flex flex-col gap-4">
                                            <p className="text-lg lg:text-xl font-medium hover:bg-gray-100 p-2 rounded">
                                                <i className="fas fa-user text-purple-500 mr-2"></i>
                                                <a href="#" onClick={() => handleScroll(aboutRef)}>About</a>
                                            </p>
                                            <p className="text-lg lg:text-xl font-medium hover:bg-gray-100 p-2 rounded">
                                                <i className="fas fa-envelope text-purple-500 mr-2"></i>
                                                <a href="#" onClick={() => handleScroll(contactRef)}>Contact</a>
                                            </p>
                                            <p className="text-lg lg:text-xl font-medium hover:bg-gray-100 p-2 rounded">
                                                <i className="fas fa-lightbulb text-purple-500 mr-2"></i>
                                                <a href="#" onClick={() => handleScroll(projectsRef)}>Solution</a>
                                            </p>
                                        </div>
                                    </div>
                                    <svg className="absolute inset-0 w-full h-full opacity-20 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#fff" fillOpacity="1" d="M0,160L60,154.7C120,149,240,139,360,138.7C480,139,600,149,720,144C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                                    </svg>
                                </div>

                                <div className="flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-lg p-4 hover:shadow-lg bg-gradient-to-r from-sky-100 to-sky-200 relative overflow-hidden">
                                    <i className="fas fa-book-open text-4xl text-red-500 z-10"></i>
                                    <h3 className="text-xl text-gray-800 font-medium mt-2 z-10">Our Page</h3>
                                    <div className="text-gray-600 text-base w-full z-10">
                                        <div className="flex flex-col gap-4">
                                            <p className="text-lg lg:text-md hover:bg-gray-100 p-2 rounded font-normal">support@zebiops.com                                            </p>
                                            <p className="text-lg lg:text-xmd hover:bg-gray-100 p-2 rounded font-normal">+91-7892329518</p>
                                            <p className="text-lg lg:text-sm hover:bg-gray-100 p-2 rounded font-normal">Bootstart CoWork, No51, 2nd Floor, Rishab Arcade, Sanjay Nagar Main Road, RMV 2nd Stage, Landmark above Nirmal Jewellers building, Bengaluru, Karnataka 560094</p>
                                        </div>
                                    </div>
                                    <svg className="absolute inset-0 w-full h-full opacity-20 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#fff" fillOpacity="1" d="M0,160L60,154.7C120,149,240,139,360,138.7C480,139,600,149,720,144C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                                    </svg>
                                </div>

                                <div className="flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-lg p-4 hover:shadow-lg bg-gradient-to-r from-purple-100 to-purple-200 relative overflow-hidden">
                                    <i className="fas fa-book-open text-4xl text-purple-500 z-10"></i>
                                    <h3 className="text-xl text-gray-800 font-medium mt-2 z-10">Our Page</h3>
                                    <p className="text-gray-600 text-base z-10">Learn more about us and our mission.</p>

                                    <div className="w-full flex items-center justify-center mt-4 z-10">
                                        <form ref={form} onSubmit={sendEmail} className="w-full max-w-md flex flex-col gap-4">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="rounded-lg p-3 border text-customDarkGray border-gray-300 focus:border-gray-500 focus:outline-none"
                                            />
                                            <input
                                                type="tel"
                                                name="number"
                                                placeholder="Enter your number"
                                                value={formData.number}
                                                onChange={handleChange}
                                                className="rounded-lg p-3 border text-customDarkGray border-gray-300 focus:border-gray-500 focus:outline-none"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="rounded-lg p-3 border text-customDarkGray border-gray-300 focus:border-gray-500 focus:outline-none"
                                            />
                                            <input
                                                type="submit"
                                                value="Submit"
                                                className="bg-purple-800 text-white p-3 rounded-lg hover:bg-purple-900 cursor-pointer"
                                            />
                                        </form>
                                    </div>

                                    <svg className="absolute inset-0 w-full h-full opacity-20 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#fff" fillOpacity="1" d="M0,160L60,154.7C120,149,240,139,360,138.7C480,139,600,149,720,144C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                                    </svg>
                                </div>

                            </div>
                        </section>

                    </div>
                    <div>
                        <div className="h-full flex-1  w-full flex flex-col bg-gradient-to-b from-gray-200 to-purple-300 lg:rounded-tl-3xl pb-20 sm:pb-0">
                            <div className="rounded-t-2xl">
                                <div className="flex flex-col gap-10 justify-center items-center pt-20 p-10 text-gray-900 text-center">
                                    <div className='w-full'>
                                        <img src="/logo-horizontal-dark.png" alt="Logo" className="w-full h-auto lg:max-w-56 mx-auto" />
                                        <div className="w-full flex justify-center items-center">
                                            <div className='h-[5px] w-[90%] bg-emerald-600'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section className='flex flex-col '>
                                <div className="p-2">
                                    <div className="border-t-2 border-gray-300">
                                        <div className="flex flex-row justify-center pt-4">
                                            <p className='text-2xl text-gray-500'>Our Socials</p>
                                        </div>
                                        <div>
                                            <ul className="flex flex-row justify-center gap-4 pt-5">
                                                <li className="mr-4">
                                                    <a href="https://www.instagram.com/zebiops_technology/" target="_blank" rel="noopener noreferrer">
                                                        <img src="/github.png" alt="" width={30} height={30} />
                                                    </a>
                                                </li>
                                                <li className="mr-4">
                                                    <a href="https://www.instagram.com/zebiops_technology/" target="_blank" rel="noopener noreferrer">
                                                        <img src="/instagram.png" alt="" width={30} height={30} />
                                                    </a>
                                                </li>
                                                <li className="mr-4">
                                                    <a href="https://www.linkedin.com/company/zebiops" target="_blank" rel="noopener noreferrer">
                                                        <img src="/linkedin.png" alt="" width={30} height={30} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://x.com/zebiops" target="_blank" rel="noopener noreferrer">
                                                        <img src="/twitter.png" alt="" width={30} height={30} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-10">
                                    <div className="flex flex-col gap-2 justify-center items-center">
                                        <h1 className='text-2xl text-gray-500 font-light text-center'>Our Office</h1>
                                        <div>
                                            <p className="text-black font-regular text-center w-[200px]" > Bootstart CoWork, No51, 2nd Floor, Rishab Arcade,  Bengaluru, Karnataka 560094
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </section>
                            <section>
                                <div className="w-full flex flex-col justify-center items-center mt-10 lg:mt-20">
                                    <p className='text-xl text-gray-600'>
                                        Terms and Conditions

                                    </p>
                                    <a href="#" onClick={handleViewMoreClick} className='text-sm underline text-gray-600'>View More</a>
                                </div>

                                {/* Modal */}
                                <Modal
                                    isOpen={isModalOpen}
                                    onClose={handleCloseModal}
                                />
                            </section>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer