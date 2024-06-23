import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./navbar.css";

const Navbar = ({ aboutRef, contactRef, projectsRef, founderRef, overviewRef, homepageRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const controls = useAnimation();
  const scrollPositionRef = useRef(0); // Ref to store scroll position

  const handleScrollToSection = (ref, e) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    if (ref && ref.current) {
      scrollPositionRef.current = window.scrollY; // Store current scroll position
      closeMenu(); // Close the menu after clicking a menu item
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.menu-panel') && !e.target.closest('.burger-menu')) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('scroll', closeMenu);
    } else {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('scroll', closeMenu);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('scroll', closeMenu);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const homeScreenHeight = window.innerHeight;

      if (currentScrollY > homeScreenHeight) {
        if (currentScrollY > lastScrollY) {
          setScrollingUp(false);
        } else {
          setScrollingUp(true);
        }
      } else {
        setScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollingUp) {
      controls.start({ y: 0 });
    } else {
      controls.start({ y: '-100%' });
    }
  }, [scrollingUp, controls]);

  useEffect(() => {
    // Restore scroll position after a section is scrolled into view
    if (scrollPositionRef.current !== 0) {
      window.scrollTo({ top: scrollPositionRef.current, behavior: 'smooth' });
      scrollPositionRef.current = 0; // Reset scroll position ref
    }
  }, [homepageRef, aboutRef, projectsRef, overviewRef, founderRef, contactRef]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-20"
      initial={{ y: 0 }}
      animate={controls}
      transition={{ type: 'tween', duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between lg:justify-center items-center px-10 py-8">
        <div className='lg:hidden backdrop-blur-md backdrop-filter flex justify-between items-center px-5 rounded-lg border-[1px] border-gray-500'>
          <div className="lg:hidden text-2xl font-bold sm:w-[50%] md:w-[50%]">
            <img src="/logo-horizontal-light.png" alt="Logo" />
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl burger-menu">
              ☰
            </button>
          </div>
        </div>
        <ul className={`menu-panel lg:flex lg:items-center lg:justify-center rounded-lg gap-10 text-lg px-10 transition duration-300 ease-in-out hover:bg-white hover:text-black backdrop-blur-md backdrop-filter border-[1px] border-gray-500 ${isOpen ? 'flex flex-col mt-5 items-center absolute top-16 left-1/2 transform -translate-x-1/2 backdrop-blur-md backdrop-filter border-[1px] border-gray-500 rounded-lg shadow-lg p-5' : 'hidden'}`}>
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold hover:text-xl transition duration-100">
            <a href="#about" onClick={(e) => handleScrollToSection(aboutRef, e)}>About</a>
          </li>
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold hover:text-xl transition duration-100">
            <a href="#solution" onClick={(e) => handleScrollToSection(projectsRef, e)}>Solution</a>
          </li>
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold hover:text-xl transition duration-100">
            <a href="#features" onClick={(e) => handleScrollToSection(overviewRef, e)}>Features</a>
          </li>
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold hover:text-xl transition duration-100">
            <a href="#team" onClick={(e) => handleScrollToSection(founderRef, e)}>Team</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
