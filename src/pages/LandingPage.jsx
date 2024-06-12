import React from 'react'
import { logo } from '../assets'
import { RiUserLine } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { MdHelpOutline } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import NavLinks from '../Components/NavLinks';

const LandingPage = () => {
  return (
    <div className='h-[100vh] w-full bg-white text-black pt-10 px-[5%] flex'>
      <nav className='flex w-full items-center justify-between gap-8 h-[60px]'>
        <div className="w-full lgss:w-[50%] flex justify-between gap-7">
          <img src={logo} alt="" className='w-[40%] lgss:w-[30%] lgss:h-11' />
          <input type="text" className='py- px-2 w-[60%] outline-none border border-black' placeholder='Search products...' />
        </div>
        <div className="lgss:w-[30%] hidden lgss:flex gap-12 justify-center items-center">
          <NavLinks link={"Account"} icon1={RiUserLine} icon2={LiaAngleDownSolid}/>
          <NavLinks link={"Help"} icon1={MdHelpOutline} icon2={LiaAngleDownSolid}/>
          <NavLinks link={"Cart"} icon1={CgShoppingCart}/>
        </div>
      </nav>
    </div>
  )
}

export default LandingPage