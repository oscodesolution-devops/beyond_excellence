import React from 'react'
import Navbar from './Navbar'
import { FiShoppingCart } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";

import Logo from "@/Images/Logo/Logo.png"
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <header className=' px-4 md:px-32  min-w-full md:flex  md:flex-row md:justify-between md:items-center bg-theme h-[65px]  grid grid-cols-3 items-center place-content-end'>
                <div className=' block md:hidden cursor-pointer'>
                    <RiMenu2Fill size={30} />
                </div>
                <div className="">
                    <Link href={"/"}> <Image
                        src={Logo}
                        alt='Logo'
                        width={100}
                        height={50}
                    />
                    </Link>

                </div>

                <div className="md:block hidden">
                    <div className="font-sans hidden text-black w-[35rem]  rounded bg-white md:flex items-center justify-center" >
                        <div className="border w-[100%] h-[45px] rounded overflow-hidden flex" style={{ border: "none" }}>
                            <button className="flex items-center  justify-center px-4 " style={{ background: "#fff" }}>
                                <svg className="h-6 w-6 text-grey-dark bg-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                            </button>
                            <input type="text" className="px-4 w-[100%] py-2" placeholder="Search..." />

                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 justify-end">
                    <FiShoppingCart className=' cursor-pointer' size={20} />
                    <Link href={"/Login"}><FiUserPlus className=' cursor-pointer' size={20} /></Link>
                </div>

            </header>
            <Navbar />
        </>
    )
}

export default Header