import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "../layout/layout.css";


const Founders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const founders = [
    {
      name: 'Prashant S B',
      title: 'Founder & CEO',
      image: './ceo.jpg',
      description: `Prashant S B, the visionary founder of ZebiOps Technology Private Limited, brings over 21 years of corporate experience to the table. With an impressive educational background, holding an MBA in General Management and a BTech in Computer Science and Engineering, Prashant has honed his expertise across diverse industries.`,
      additionalInfo: `He has held pivotal roles in renowned companies such as Amazon, EMC Data Storage Systems, Honeywell, McAfee, BAeHAL, and Spirent Communications. His extensive domain experience spans Embedded Systems, Aerospace, Storage, Antivirus, Networking, and Ecommerce, making him a dynamic and seasoned leader in the tech industry. Under Prashant's guidance, ZebiOps Technology is poised to revolutionize personal productivity and home automation with its cutting-edge AI solutions, ZORA and ZOSS. His unwavering commitment to innovation and excellence drives the company's mission to create intelligent, user-centric technologies that transform everyday interactions.`
    },
    {
      name: 'Vishruth',
      title: 'Data Scientist',
      image: './founder.jpg',
      description: `Meet Vishruth, a seasoned data science and artificial intelligence professional. With a Master's degree in Data Science, Vishruth excels at turning complex datasets into clear, actionable insights. His skills extend beyond data analysis to a deep passion for machine learning and deep learning algorithms.`,
      additionalInfo: `Vishruth is part of a forward-thinking ZebiOps team at the forefront of AI innovation. He specializes in tackling challenging problems and developing intelligent, scalable AI solutions that significantly enhance model refinement. Always staying updated with the latest technological trends, He is ready to take on new challenges in the ever-evolving landscape of data science, making the journey through data both insightful and enjoyable.`
    },
    {
      name: 'Kishor Kumar Naik P',
      title: 'Co-founder',
      image: './dev.jpg',
      description: `Introducing Kishor Kumar Naik P, a distinguished professional in the field of data science and artificial intelligence. With a Master's degree in Data Science, Kishor possesses a remarkable ability to convert complex datasets into actionable insights. His expertise extends beyond data analysis, with a strong enthusiasm for machine learning and deep learning algorithms and a penchant for crafting the perfect cup of coffee.`,
      additionalInfo: `At ZebiOps Technology, I'm honored to be part of a pioneering team that is cutting edge on AI innovation. He excels in addressing challenging problems and developing intelligent, scalable AI solutions that have a tangible impact on refining models and staying abreast of the latest technological trends, consistently ready to embrace new adventures in the ever-evolving landscape of data science.`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [founders.length]);

  return (
    <div className="p-5">
      <div className="px-4 lg:px-12 text-center flex flex-col justify-center">
        <div className='pb-10 lg:pb-20'>
          <h1 className="text-3xl lg:text-5xl leading-relaxed font-normal bg-gradient-custom bg-clip-text text-transparent lg:leading-relaxed">
            Behind
            <span className="animate-slide bg-gradient-to-r from-sky-400/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-sky-700 rounded-none focus:outline-none ml-3">Innovation: </span>
            Meet Our
            <span className="animate-slide bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">Founder</span>
          </h1>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <motion.div 
          className="flex"
          style={{ 
            width: `${founders.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / founders.length)}%)`
          }}
          transition={{ duration: 1.5, type: 'tween' }}
        >
          {founders.map((founder, index) => (
            <motion.div 
              key={index}
              className="w-full flex-shrink-0"
              style={{ width: `${100 / founders.length}%` }}
            >
              <div className="flex flex-col lg:flex-row bg-gray-200 items-center">
                <div className="lg:w-1/2 p-10 flex justify-center items-center">
                  <div className="aspect-w-3 aspect-h-4 relative">
                    <img src={founder.image} alt={founder.name} className="object-cover rounded-lg shadow-lg" />
                  </div>
                </div>
                <div className="lg:w-1/2 text-gray-800 flex flex-col p-5 lg:p-10 lg:py-5">
                  <div className='mb-8 lg:mb-10'>
                    <img src="/logo-horizontal-dark.png" alt="Company Logo" />
                    <div className='h-[5px] bg-emerald-600'></div>
                  </div>
                  <section className='py-6 lg:px-6'>
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-semibold capitalize bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-300 mb-2">{founder.name}</h1>
                      <p className='text-lg lg:text-xl font-light mb-4'>{founder.title}</p>
                      <p className='text-base lg:text-lg leading-relaxed'>
                        {founder.description}
                      </p>
                      <p className='text-base lg:text-lg leading-relaxed mt-4'>
                        {founder.additionalInfo}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Founders;