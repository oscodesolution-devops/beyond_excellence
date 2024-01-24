import React from 'react'
import image from '../../public/images/bgHeader.png'
import bg from '../../public/images/bg.png'
const Header = () => {
  return (
    <>
    <div style={{background:`URL(${bg})no-repeat`}} className="header-container flex items-center mb-10  w-screen flex-col-reverse  xl:py-[52px] xl:px-[70px] xl:flex-row">
    <div className="w-[90%] px-[20px] py-[0px] -mt-28 xl:mt-0 xl:py-0  xl:px-[70px]">
        <div className="text-[50px] leading-[55px] tracking-[0px] xl:text-[80px] xl:leading-[78px] mt-[100px] font-serif  font-medium text-theme-200"> 
Grow, Nurture, Retarget</div>
<div className="w-[80vw] xl:w-[500px] ml-4 mt-4 text-[15px] text-[#505050]">
Optimize the business performance, let it grow,
nurture the potential leads & retarget the existing
ones.</div>

    </div>
    <div className=" w-[100%]">
        <img className='' src={image} alt="" />
    </div>
    </div>
    </>
  )
}

export default Header