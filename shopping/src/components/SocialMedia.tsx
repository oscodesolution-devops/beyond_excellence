import React from 'react'
import Defualt from "@/Images/Products/download.png"
import Image from 'next/image'

const SocialMedia = () => {
    return (
        <>
            <section className="px-6 md:px-32  w-full h-[7rem] md:h-[10rem] overflow-hidden">
                <Image
                    src={Defualt}
                    alt='Product Img'
                    className='w-[100%] h-[100%]'
                />
            </section>
        </>
    )
}

export default SocialMedia