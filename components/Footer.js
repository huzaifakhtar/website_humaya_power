import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={`pt-28 relative font-[sans-serif] text-white bg-black`}>
            <div className={`relative -mt-[9rem] mx-auto sm:px-4`}>
                <div className={`bg-orange-600 shadow-[-20px_-20px_0px_0px_rgba(52,58,64,0.2)] p-5 w-4/5 mx-auto block md:flex items-center !px-12`}>
                    <div>
                        <h2 className={`text-[2rem]`}>Ready for a next project?</h2>
                        <h3 className={`mb-2 text-gray-900 text-[1.25rem]`}>Let&apos;s get started!</h3>
                    </div>
                    <div className="ml-auto">
                        <Link href="#" className="inline-block bg-[#343a40] hover:bg-[#212529] py-4 px-12">Contact us</Link>
                    </div>
                </div>
                <div className={`w-full max-w-screen-xl mx-auto p-4 md:py-8`}>
                    <div className="sm:flex px-10 mb-3 sm:items-center sm:justify-between">
                        <Link href="" className="flex items-center mb-4 sm:mb-0">
                            <Image width={150} height={100} src="/Humaya Logo.png" className="" alt="Flowbite Logo" />
                        </Link>
                        <ul className="flex text-[1.2rem] flex-wrap items-center mb-6 font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li><Link href="#" className="mr-4 md:mr-8 text-[#666873] hover:text-white ">Home</Link></li>
                            <li><Link href="#" className="mr-4 md:mr-8 text-[#666873] hover:text-white">About</Link></li>
                            <li><Link href="#" className="mr-4 md:mr-8 text-[#666873] hover:text-white">Blogs</Link></li>
                            <li><Link href="#" className="text-[#666873] hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-8" /><span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <span className="text-[#bdbdbd]">Humaya Power™ </span> All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer