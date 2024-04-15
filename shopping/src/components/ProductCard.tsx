import Image from 'next/image'
import React from 'react'
import Defualt from "@/Images/Products/defult.jpg"

const ProductCard = ({ item }: any) => {
    return (
        <>
            <div className="flex md:w-[14rem] mb-8 md:my-0 flex-col w-[8rem] h-[8rem] md:h-[14rem]   justify-center items-center ">
                <div className="w-[80%] h-[80%] rounded-full overflow-hidden">
                    <Image
                        src={item.img.src}
                        alt='Product Img'
                        width={320} height={320}
                    />

                </div>
                <div className="w-[100%] h-[20%] text-center p-3 md:text-xl text-[12px]">{item.name}</div>
            </div>
        </>
    )
}

export default ProductCard