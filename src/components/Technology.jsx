import { useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import "../layout/layout.css";


const Technology = () => {
    const ref = useRef(null); // Create a ref using useRef

    const { scrollYProgress } = useScroll({
        target: ref, // Access the DOM element using ref.current
        offset: ["0 1.5", "0.8 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    return (

        <div className='py-20'>
            <div className="px-4 lg:px-12 text-center flex flex-col justify-center">
                <div className='pb-20'>
                    <h1 className="text-3xl lg:text-5xl leading-relaxed font-normal bg-gradient-custom bg-clip-text text-transparent lg:leading-relaxed">
                        Discover <span className="animate-slide bg-gradient-to-r from-sky-400/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-sky-700 rounded-none focus:outline-none ml-3">Cutting</span> Edge
                        <span className="animate-slide bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">Technology</span>
                    </h1>
                </div>
            </div>
            <section className="xlg:px-5 flex flex-col lg:flex-row gap-5">
                {[
                    {
                        imgSrc: "/lock.png",
                        imgWidth: 90,
                        imgHeight: 90,
                        title: "Security",
                        description: "ZebiOps SmartHome Solution",
                        text: "Both ZORA and ZOSS are built with a strong focus on security. Data encryption, secure access controls, and regular security updates ensure that user information is protected from unauthorized access and cyber threats."
                    },
                    {
                        imgSrc: "/connection1.png",
                        imgWidth: 70,
                        imgHeight: 70,
                        title: "Cutting-Edge AI",
                        description: "ZebiOps SmartHome Solution",
                        text: "ZORA and ZOSS leverage the latest advancements in artificial intelligence and machine learning to deliver personalized and efficient services. By learning user preferences and behavior patterns, these systems provide tailored responses and anticipate user needs."
                    },
                    {
                        imgSrc: "/fingerprint.png",
                        imgWidth: 70,
                        imgHeight: 70,
                        title: "Privacy",
                        description: "ZebiOps SmartHome Solution",
                        text: "User privacy is a top priority for ZebiOps Technology. ZORA and ZOSS adhere to strict privacy policies, ensuring that personal data is handled with the utmost care. Users have full control over their data, including options for anonymization and the ability to manage data-sharing preferences."
                    }
                ].map((item, index) => (
                    <div key={index} className="flex-1">
                        <div className="p-5 xlg:px-1 h-full">
                            <div className="border-[1px] border-gray-700 rounded-lg bg-gradient-to-t from-transparent to-white/10 h-full flex flex-col justify-between">
                                <div className="flex flex-col items-center text-center p-5 xlg:px-20">
                                    <img src={item.imgSrc} alt="" width={item.imgWidth} height={item.imgHeight} />
                                    <h2 className="text-5xl bg-gradient-custom bg-clip-text text-transparent mt-5">{item.title}</h2>
                                    <p className='text-xl mt-2'>{item.description}</p>
                                    <p className='text-gray-300 mt-5'>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>


    );
}

export default Technology;
