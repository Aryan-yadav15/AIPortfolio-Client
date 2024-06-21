import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ children, onClose }) => {
    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const backdropVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modalVariants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: '100vh', opacity: 0 },
    };

    return (
        <div className='w-screen h-screen '>
            <motion.div
                className="fixed top-0 left-0  h-screen px-10 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={handleClose}
            >
                <motion.div
                    className="bg-white w-full max-w-md p-4 rounded-lg shadow-md"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {children}
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400" onClick={onClose}>
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Modal;
