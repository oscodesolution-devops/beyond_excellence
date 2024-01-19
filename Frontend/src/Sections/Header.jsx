import React from 'react'
import image from '../../public/images/Header.png'
const Header = () => {
  return (
    <>
    <div className="header-container flex  w-screen flex-col-reverse  xl:py-[52px] xl:px-[70px] xl:flex-row">
    <div className="w-[90%] px-[20px] py-[0px] -mt-28 xl:mt-0 xl:py-0  xl:px-[70px]">
        <div className="text-[50px] leading-[55px] tracking-[0px] xl:text-[128px] xl:leading-[120px] mt-[100px] font-serif xl:tracking-[-10px] font-medium text-theme-200">Beyond 
Excellence</div>
<div className="w-[80vw] xl:w-[500px] ml-4 text-[15px] text-[#505050]">Welcome to Beyond Excellence, your gateway to linguistic prowess and cultural immersion. We believe language learning isn't just about memorizing words..... 
</div>
<div className="w-[90vw] xl:w-[400px] flex flex-row items-center justify-between pt-6">
    <button className='xl:py-[15px] xl:px-[48px] px-[30px] py-[10px] rounded-md bg-theme-200 text-white'>Buy Courses</button>
    <button className='xl:py-[15px] xl:px-[48px] px-[30px] py-[10px]  rounded-md text-theme-200 border-2 border-theme-200'>Buy Courses</button>
</div>
    </div>
    <div className=" w-[100%]">
        <img className='' src={image} alt="" />
    </div>
    </div>
    </>
  )
}

export default Header