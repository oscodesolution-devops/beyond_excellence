import React from 'react'

const Heading = ({ title, para }: any) => {
    return (
        <>

            <div className="px-6 md:px-32 min-w-full py-6 md:py-12 flex flex-row justify-between items-center">
                <div className="w-[22%] h-[3px] bg-theme"></div>
                <div className="flex flex-col justify-between items-center">
                    <h1 className='text-[35px] font-bold'>{title}</h1>
                    <p className='text-md text-para'>{para}</p>
                </div>
                <div className="w-[22%] h-[3px] bg-theme"></div>
            </div>

        </>
    )
}

export default Heading