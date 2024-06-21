import { useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import "../layout/layout.css";


const SolutionPage = () => {

    const ref = useRef(null); // Create a ref using useRef

    const { scrollYProgress } = useScroll({
        target: ref, // Access the DOM element using ref.current
        offset: ["0 1.5", "0.5 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])


    return (

        <div className='flex flex-col gap-14 p-4 lg:p-12'>
            <div className="text-center flex justify-center">
                <div className='w-full lg:w-[80%]'>
                    <h1 className="text-3xl lg:text-5xl font-normal bg-gradient-custom bg-clip-text text-transparent leading-relaxed lg:leading-relaxed">

                        <span className="animate-slide bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3"> ZORA and ZOSS</span>
                        together creates seamless
                        <span className="animate-slide bg-gradient-to-r from-orange-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-orange-700 rounded-none focus:outline-none ml-3">Intelligent ecosystem </span>
                    </h1>
                </div>
            </div>
            <motion.div
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: scaleProgress
                }}>
                <div className='flex flex-col gap-5'>
                    <div className="border-[1px] border-gray-700 rounded-lg">
                        <div className="rounded-lg bg-gradient-to-t from-transparent to-white/10">
                            <div className="flex flex-col lg:flex-row">
                                <div className="p-5 lg:pl-5 lg:pr-10 lg:pt-5 lg:pb-10 w-full lg:w-[50%] lg:p-20">
                                    <div className="flex-1 flex flex-col gap-10">
                                        <div className='flex justify-center lg:justify-start'>
                                            <img src="/i1.png" alt="" width={70} height={70} />
                                        </div>
                                        <section className='flex flex-col gap-4'>
                                            <h2>
                                                <span className='text-5xl lg:text-7xl bg-gradient-custom bg-clip-text text-transparent'>ZORA</span>
                                            </h2>
                                            <p className='text-xl lg:text-3xl'>ZebiOps Real-Time Assistant</p>
                                        </section>
                                        <section className='flex flex-col gap-5'>
                                            <div>
                                                <span className="bg-gray-200 font-semibold text-gray-950 px-2 rounded-sm text-base lg:text-xl mr-2">Overview</span>
                                            </div>
                                            <p className='text-gray-300'>
                                                ZORA uses Generative AI and is trained to have human-like conversations. It also has the capability to provide real-time data similar to existing search engines. By combining AI with various mobile apps, ZORA creates a comprehensive solution to address all the digital needs of customers. ZORA listens, learns, and adapts to user preferences, offering a truly personalized experience.
                                            </p>
                                            <div>
                                                <span className="bg-gray-200 font-semibold text-gray-950 px-2 rounded-sm text-base lg:text-xl">How it Works</span>
                                            </div>
                                            <p className='text-gray-300 pt-3'>
                                                ZORA (ZebiOps Real-time Assistant) is an advanced AI personal assistant designed to manage various aspects of your digital life efficiently. By integrating AI with search engines, social media, and mobile apps, ZORA aims to transform personal productivity and interaction with technology. The initial launch will focus on two main features: Email Management and Call Management.
                                            </p>
                                        </section>
                                    </div>
                                </div>
                                <div className="flex-1 p-5 lg:p-10 bg-gray-600">
                                    <div className="bg-red-50 h-[200px] lg:h-[100%] rounded-lg overflow-hidden">
                                        <img src="/p5.png" alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-[1px] border-gray-700 rounded-lg">
                        <div className="rounded-lg bg-gradient-to-t from-transparent to-white/10">
                            <div className="flex flex-col lg:flex-row">
                                <div className="p-5 lg:pl-5 lg:pr-10 lg:pt-5 lg:pb-10 w-full lg:w-[50%] lg:p-20">
                                    <div className="flex-1 flex flex-col gap-10">
                                        <div className='flex justify-center lg:justify-start'>
                                            <img src="/i2.png" alt="" width={70} height={70} />
                                        </div>
                                        <section className='flex flex-col gap-4'>
                                            <h2>
                                                <span className='text-5xl lg:text-7xl bg-gradient-custom bg-clip-text text-transparent'>ZOSS</span>
                                            </h2>
                                            <p className='text-xl lg:text-3xl'>ZebiOps SmartHome Solution</p>
                                        </section>
                                        <section className='flex flex-col gap-5'>
                                            <div>
                                                <span className="bg-gray-200 font-semibold text-gray-950 px-2 rounded-sm text-base lg:text-xl mr-2">Overview</span>
                                            </div>
                                            <p className='text-gray-300'>
                                                ZOSS (ZebiOps SmartHome Solution) aims to create intelligent living spaces that converge IoT, AI/ML, and Deep Tech to anticipate and respond intelligently, targeting the premium segment.
                                            </p>
                                            <div>
                                                <span className="bg-gray-200 font-semibold text-gray-950 px-2 rounded-sm text-base lg:text-xl">How it Works</span>
                                            </div>
                                            <p className='text-gray-300 pt-3'>
                                                Equipped with state-of-the-art sensors and detectors, including an advanced IR sensor and gas sensors, ZOSS prioritizes your safety and well-being at all times. The ZORA voice assistant for human-like conversations and real-time updates on stocks, weather, sports, news, and more. Additionally, the ZORA mobile app enables remote monitoring and control of home automation, ensuring a seamless and integrated smart home experience.
                                            </p>
                                        </section>
                                    </div>
                                </div>
                                <div className="flex-1 p-5 lg:p-10 bg-gray-600">
                                    <div className="bg-red-50 h-[200px] lg:h-[100%] rounded-lg overflow-hidden">
                                        <img src="/p2.png" alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
        </div>


    )
}

export default SolutionPage
