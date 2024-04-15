import Image from 'next/image'
import React from 'react'

const PromotionCard = ({ data }: any) => {
    return (
        <>
            <div className="md:w-[20rem] md:h-[30rem] w-[12rem] h-[18rem]">
                <Image
                    src={data?.img}
                    alt='ads'
                    className='w-[100%] h-[100%]'
                />
            </div>
        </>
    )
}

export default PromotionCard