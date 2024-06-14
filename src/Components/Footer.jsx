import React from "react";
import { HiMiniMapPin } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { footer1, footer2, footer3, logo } from "../assets";

function Footer() {
  return (
    <footer className="bg-white border-t-2 border-yellow pt-8 text-white text-center text-xl mt-8 ">
      <div className="flex flex-col lg:flex-row gap-4 justify-center w-full px-[5%]">
        <div className="p-4 w-full">
          <img src={logo} alt="" />
          <p className="text-xs font-medium mt-8 text-left text-[#080808]">
            SwiftCart .ng is one of the best e-commerce sites where you can get
            different items at affordable prices. Where Shopping meets
            Convenience Get different but quality brands on SwiftCart.ng.
          </p>
        </div>

        <div className=" p-4 w-full text-left">
          <h3 className="text-base font-bold text-[#080808]">
            IMPORTANT LINKS
          </h3>
          <ul className="text-xs font-medium mt-8  text-[#080808]">
            <li className="pb-2 ">Service Center</li>
            <li className="pb-2 ">Report a Product</li>
            <li className="pb-2 ">Returns and Refund Timeline</li>
            <li className="pb-2 ">Return Policy</li>
          </ul>
        </div>

        <div className=" w-full">
          <h1 className="text-base font-bold text-[#080808] text-left">
            NEW TO SWIFTCART?
          </h1>
          <p className="text-xs font-medium text-[#080808] text-left">
            Subscribe to our newsletter to get updates on our latest offer!
          </p>

          <div className="text-sm pt-4">
            <form action="submit" className="flex flex-col lg:flex-row gap-7">
              <input
                type="text"
                name="Email"
                id="email"
                placeholder="Enter your email address"
                className=" text-[#080808] outline-none py-2 border-grey border-[1px] lgss:w-[60%] px-2"
              />
              <button className="border-2  text-[#080808] px-3 py-2">
                Enter
              </button>
            </form>
          </div>

          <div className="flex lg:flex-row gap-4 text-sm pt-3 text-[#080808] text-left">
            <input type="checkbox" name="" id="" />
            <p>
              I agree to SwiftCart&apos;s Privacy and Cookie Policy. You can
              unsubscribe from newsletters at anytime.
            </p>
          </div>
          <p className="text-xs font-medium pl-7  text-[#E8AD0A] text-left">
            I accept the Legal Terms
          </p>
        </div>
      </div>

      <div className="flex flex-col lgss:flex-row gap-4 mt-12 border-t-2 py-8 font-semibold text-[20px] px-[5%]">
        <div className=" p-4 w-full">
          <h1 className="text-base font-bold text-[#080808] text-left">
            INFORMATION
          </h1>
          <ul className="text-[16px] font-medium pt-3 text-[#080808] text-left">
            <li>About Us</li>
            <li>Our Policies</li>
            <li>Contact Us</li>
            <li>Affiliate Dashboard</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="flex flex-col  gap-4 justify-center text-black h-full w-full">
          <div className="space-y-3 w-full">
            <h1 className="text-base font-bold text-left">PARTNER WITH US</h1>
            <p className="text-xs font-medium text-left flex flex-col">
              Contact: <span>partnerships@swiftcart.ng </span>
            </p>
          </div>
          <div className="space-y-2 w-full pt-8">
            <h1 className="text-base font-bold text-left">
              DO BUSINESS WITH US
            </h1>
            <p className="text-xs font-medium text-left flex flex-col">
              Contact: <span>partnerships@swiftcart.ng </span>
            </p>
          </div>
        </div>

        <div className="text-black w-full">
          <h1 className="text-base font-bold text-left">NEED HELP?</h1>
          <ul className="text-[16px] font-medium pt-4 text-left">
            <li>Chat with us</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div className="flex flex-col w-full gap-4 justify-start text-black">
          <div className="w-full">
            <h1 className="text-left">CONTACT INFO</h1>
            <div className="flex gap-2 pt-4">
              <HiMiniMapPin className="text-3xl" />
              <p className="text-[16px] text-left">
                No: 17 Alaba Road, Opp Zira Filling Station, Lagos State,
                Nigeria
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <FaPhone />
            <p className="text-[16px]">0808220699, 08145345667</p>
          </div>
          <div className="text-left pt-4 w-full">
            <h1>JOIN US ON </h1>
            <div className="flex gap-4 pt-3 text-3xl">
              <ImFacebook />
              <FaYoutube />
              <AiFillInstagram />
              <RiTwitterXLine />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green text-yellow w-full flex flex-col justify-center items-center gap-4 py-10 text[16px] lgss:text-xl font-semibold">
        <p>&copy; PAYMENT METHODS AND DELIVERY PARTNERS</p>
        <div className="flex gap-4 h-5">
          <img src={footer1} alt="" />
          <img src={footer2} alt="" />
          <img src={footer3} alt="" />
        </div>
        <p>ALl Rights @2024</p>
      </div>
    </footer>
  );
}

export default Footer;
