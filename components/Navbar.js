import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [navbarClass, setNavbarClass] = useState('bg-transparent');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Hide navbar when scrolling down by 100 pixels
      if (currentScrollPos > 250) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      // Change background color after scrolling past a certain point (e.g., 150 pixels)
      if (currentScrollPos > 150) {
        setNavbarClass('bg-black'); // Change to your desired color
      } else {
        setNavbarClass('bg-transparent');
      }

      // Show navbar when scrolling up
      if (currentScrollPos < prevScrollPos) {
        setIsNavbarVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <nav className={`transition-all duration-150 ease-linear fixed z-50 w-full top- ${isNavbarVisible ? '' : 'transform -translate-y-full'} ${navbarClass}`}>
      <div className="w-full sm:w-11/12 md:w-full max-w-7xl flex justify-between relative mx-auto py-5">

        {/* Navbar Logo */}
        <div className="flex items-center w-40 px-4">
          <Link href="/"><img className="w-full" src="/Humaya Logo.png" alt="" /></Link>
        </div>

        {/* Menu List */}
        <ul className="hidden sm:flex text-white font-bold items-center transition-all duration-1000 ease-[ease]">
          {/* <!-- Navbar Links --> */}
          <li className="relative uppercase px-4 py-4 mx-4 hover:text-orange-500 transition-all duration-500 ease-[ease] before:content-[''] before:absolute before:-bottom-px before:left-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-500 after:content-[''] after:absolute after:-bottom-px after:right-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:before:w-full hover:after:w-full hover:after:bg-transparent"><Link href='/'>Home</Link></li>
          <li className="relative uppercase px-4 py-4 mx-4 hover:text-orange-500 transition-all duration-500 ease-[ease] before:content-[''] before:absolute before:-bottom-px before:left-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-500 after:content-[''] after:absolute after:-bottom-px after:right-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:before:w-full hover:after:w-full hover:after:bg-transparent"><Link href='/about'>About</Link></li>
          <li className="relative uppercase px-4 py-4 mx-4 hover:text-orange-500 transition-all duration-500 ease-[ease] before:content-[''] before:absolute before:-bottom-px before:left-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-500 after:content-[''] after:absolute after:-bottom-px after:right-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:before:w-full hover:after:w-full hover:after:bg-transparent"><Link href='/blog'>Blog</Link></li>
          <li className="relative uppercase px-4 py-4 mx-4 hover:text-orange-500 transition-all duration-500 ease-[ease] before:content-[''] before:absolute before:-bottom-px before:left-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-500 after:content-[''] after:absolute after:-bottom-px after:right-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:before:w-full hover:after:w-full hover:after:bg-transparent"><Link href='/contact'>Contact</Link></li>
        </ul>

      </div>

      <div>
        {/* <!-- Menu Icon --> */}
        <div className={styles.menuIcon}>
          <span className={`${styles.icon} ${styles.icon_bars}`}></span>
          <span className={`${styles.icon} ${styles.icon_bars} ${styles.overlay}`}></span>
        </div>

        <div className={styles.overlay_menu}>
          <ul>
            {/* <!-- Navbar Links --> */}
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar

