import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const FormModal = ({ onClose }) => {
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
            .sendForm('service_dqxhc3u', 'template_fyhezq4', form.current, 'oPyOb5F87lB69PtAr')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    toast.success('Email sent successfully!');
                    onClose();  // Close modal on success
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send email.');
                }
            );
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gradient-to-t from-purple-900 to-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md border-purple-900 border-2">
                <div className="w-full flex justify-end items-center">
                    <button onClick={onClose} className="text-red-500">Close</button>
                </div>
                <img src="/logo-horizontal-light.png" alt="" className='pb-4' />
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
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
        </div>
    );
};

export default FormModal;
