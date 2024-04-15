import React from 'react'
import Defualt from "@/Images/Products/defult.jpg"
import Image from 'next/image'

const Ads = () => {
    return (
        <>
            <section className='px-6 md:px-32 grid grid-cols-12 w-full h-[25rem] grid-rows-2 gap-4' >
                <div className="w-[100%] h-[100%] bg-theme md:col-start-0 md:col-span-8 overflow-hidden md:row-start-1 md:row-end-3 col-start-1 col-end-13 row-start-1 row-end-2">
                    <Image
                        src={Defualt}
                        alt='product image'
                        className='w-[100%] h-[100%]'
                    />
                </div>
                <div className="w-[100%] h-[100%]  md:col-start-9 md:col-span-4 md:row-start-1 md:row-end-2 row-start-2 row-end-3 col-start-7 col-end-13">
                    <Image
                        src={Defualt}
                        alt='product image'
                        className='w-[100%] h-[100%]'
                    />
                </div>
                <div className="w-[100%] h-[100%] md:col-start-9 md:col-span-4 md:row-start-2 md:row-end-3 row-start-2 row-end-3 col-start-1 col-end-7">
                    <Image
                        src={Defualt}
                        alt='product image'
                        className='w-[100%] h-[100%]'
                    /></div>

            </section>

        </>
    )
}

export default Ads