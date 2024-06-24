import React, { useState, useEffect, useRef } from 'react';
import Modal from './TestimonialModal'; // Adjust the import to the correct path

const TestimonialCarousel = ({ testimonials, interval = 10 }) => {
  const carouselRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const handleNext = () => {
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'transform 5s linear';
        carouselRef.current.style.transform = `translateX(-520px)`;
      }
    };

    if (isAnimating) {
      const intervalId = setInterval(handleNext, interval);
      return () => clearInterval(intervalId);
    }
  }, [isAnimating, interval]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = 'translateX(0)';
        const firstElement = carouselRef.current.children[0];
        carouselRef.current.appendChild(firstElement);
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, []);

  const handleReadMore = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsAnimating(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTestimonial(null);
    setIsAnimating(true);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={carouselRef} className="flex">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center px-4 py-8 mx-2 bg-gray-200 rounded-lg shadow-md"
            style={{ width: '500px' }}
          >
            <div className="bg-gray-100 p-2 md:p-8 flex flex-col gap-2">
              <div className='flex w-full justify-between font-semibold text-2xl'>
                <p className="text-lg font-medium text-gray-800">{testimonial.name}</p>
                <div className='flex space-x-2'>
                  {testimonial.productCategory.map((category, i) => {
                    const bgColor = category === "ZORA" ? 'bg-purple-500' : category === "ZOSS" ? 'bg-sky-500' : 'bg-purple-500';
                    return (
                      <div key={i} className={`rounded-md ${bgColor}`}>
                        <p className='px-3'>{category}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full">
                <p className="inline-block text-orange-700 opacity-70 rounded-md">{testimonial.title}</p>
              </div>
              <p className="text-gray-600 max-h-24 overflow-hidden">{testimonial.quote}</p>
              <button
                className="mt-4 text-purple-500 hover:text-purple-700"
                onClick={() => handleReadMore(testimonial)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && selectedTestimonial && (
        <Modal onClose={handleCloseModal}>
          <div className="flex flex-col">
            <div className='w-full justify-end'>
              <div className='flex space-x-2'>
                {selectedTestimonial.productCategory.map((category, i) => (
                  <p key={i} className='text-gray-500'>{category}</p>
                ))}
              </div>
            </div>
            <div>
              <div className="p-4">
                <p className="text-lg font-medium text-gray-800">{selectedTestimonial.name}</p>
                <p className="p-2 bg-blue-200">{selectedTestimonial.title}</p>
                <p className="text-gray-600">{selectedTestimonial.quote}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TestimonialCarousel;
