import Image from 'next/image'
import React from 'react'

const OfferBanner = ({ data }: any) => {
    return (
        <>
            <section className="px-6 md:px-32 grid grid-cols-12 md:grid-rows-2 grid-row-3 w-full h-auto md:h-[35rem] gap-4 ">
                <div className="w-[100%] h-[100%] md:row-start-1 md:row-end-2 md:col-start-1 md:col-span-3 col-start-7 col-end-13 row-start-0 row-end-1">

                    <Image
                        src={data[0].src}
                        alt='Offer Banner'
                        width={689} height={377}
                        className='w-[100%] h-[100%]'

                    />
                </div>
                <div className="w-[100%] h-[100%] md:row-start-2 md:row-end-3 md:col-start-1 md:col-span-3 col-start-1 col-end-7 row-start-0 row-end-1">

                    <Image
                        src={data[0].src}
                        alt='Offer Banner'
                        width={689} height={377}
                        className='w-[100%] h-[100%]'
                    />

                </div>
                <div className="w-[100%] h-[100%] md:row-start-2 md:row-end-3 md:col-start-4 md:col-span-3 col-start-1 col-end-13 row-start-1 row-end-2">

                    <Image
                        src={data[0].src}
                        alt='Offer Banner'
                        width={689} height={377}
                        className='w-[100%] h-[100%]'
                    />

                </div>
                <div className="w-[100%] h-[100%] md:row-start-1 md:row-end-2 md:col-start-4 md:col-span-3 col-start-1 col-end-7 row-start-2 row-end-3">

                    <Image
                        src={data[0].src}
                        alt='Offer Banner'
                        width={689} height={377}
                        className='w-[100%] h-[100%]'
                    />

                </div>
                <div className="w-[100%] h-[100%] md:row-start-1 md:row-end-3 md:col-start-7 md:col-span-6 col-start-7 col-end-13 row-start-2 row-end-3">

                    <Image
                        src={data[0].src}
                        alt='Offer Banner'
                        width={689} height={377}
                        className='w-[100%] h-[100%]'
                    />

                </div>


            </section>
        </>
    )
}

export default OfferBanner