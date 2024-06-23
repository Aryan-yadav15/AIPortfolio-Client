import { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";
import SolutionPage from "../components/SolutionPage";
import Technology from "../components/Technology";
import Overview from "../components/Overview";
import Founders from "../components/Founders";
import { Testimonial } from "../components/Testimonial";
import Preloader from "../components/sections/PreLoader";
import "./layout.css";

const Layout = () => {
    const [loading, setLoading] = useState(true);

    const homepageRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projectsRef = useRef(null);
    const founderRef = useRef(null);
    const overviewRef = useRef(null);

    useEffect(() => {
        // Simulate a loading period
        setTimeout(() => {
            setLoading(false);
        }, 5000); // Adjust the timeout as needed
    }, []);

    return (
        <motion.div className="relative">
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Navbar
                            aboutRef={aboutRef}
                            contactRef={contactRef}
                            projectsRef={projectsRef}
                            founderRef={founderRef}
                            overviewRef={overviewRef}
                        />
                        <div className="px-5 lg:px-16 xlg:px-32 py-5 sm:flex sm:flex-col">
                            <div ref={homepageRef}>
                                <Homepage
                                    contactRef={contactRef}
                                    homepageRef={homepageRef}
                                    overviewRef={overviewRef}
                                />
                            </div>
                            <div ref={aboutRef}>
                                <AboutPage
                                    founderRef={founderRef}
                                />
                            </div>

                            <div ref={projectsRef}>
                                <SolutionPage />
                            </div>

                            <div ref={overviewRef}>
                                <Overview />
                            </div>

                            <Technology />

                            <div ref={founderRef}>
                                <Founders />
                            </div>

                            <Testimonial />
                        </div>
                        <div ref={contactRef}>
                            <Footer
                                aboutRef={aboutRef}
                                contactRef={contactRef}
                                projectsRef={projectsRef}
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </motion.div >
    );
};

export default Layout;
