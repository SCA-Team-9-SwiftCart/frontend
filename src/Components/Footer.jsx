import React from 'react';
import PhoneIcon from './icons/PhoneIcon';

function Footer() {
  return (
  
    <footer className="bg-#FFF-500 p-4 text-white text-center mt-8 ">
      
      <div className='flex flex-col lg:flex-row gap-4 justify-center w-full'>      
        <div className='p-4 w-full'>
          <img src="/src/assets/images/SwiftCart.png" alt="" />
          <p className='text-xs font-medium mt-8 text-left text-[#080808]'>SwiftCart .ng is one of the best e-commerce sites where you can get different items at affordable prices.
              Where Shopping meets Convenience Get different but quality brands on SwiftCart.ng. </p>
        </div>

        <div className=' p-4 w-full text-left'>
          <h3 className='text-base font-bold text-[#080808]'>IMPORTANT LINKS</h3>
           <ul className='text-xs font-medium mt-8  text-[#080808]'>
            <li className='pb-2 '>
              Service Center
            </li>
            <li className='pb-2 '>
              Report a Product
            </li>
            <li className='pb-2 '>
              Returns and Refund Timeline
            </li>
             <li className='pb-2 '>
              Return Policy
            </li>
          </ul>
        </div>
          
        <div className=' w-full'>
          <h1 className='text-base font-bold text-[#080808] text-left'>NEW TO SWIFTCART?</h1>
          <p  className='text-xs font-medium mt-8  text-[#080808] text-left'>Subscribe to ournewsletter to get updates on our latest offer!</p>
          
          <div className='flex flex-col lg:flex-row gap-10 text-sm mt-8 '>
            <form action="submit" className=' '>
            <input type="text" name="Email" id="email" placeholder='Enter your email address' className=' text-[#080808] outline-none py-3 border-2 p-6 '/>
          </form>
          <form action="sumbit" >
            <button className='border-2 p-6  text-[#080808]  py-3' > Enter</button>
          </form>
          </div >
            
          <div className='flex flex-col lg:flex-row gap-4 text-sm mt-8  text-[#080808]  text-left'>
              <input type="checkbox" name="" id="" />
              <p>I agree to SwiftCart’s Privacy and Cookie Policy. You can unsubscribe from newsletters at anytime.</p>
           </div>
           <p  className='text-xs font-medium pl-7  text-[#E8AD0A] text-left'>I accept the Legal Terms</p>
       
        </div>
    </div>
     
        <div className='flex flex-col lg:flex-row gap-4 justify-center mt-8'>
          <div className=' p-4 w-full'>
            <h1 className='text-base font-bold text-[#080808] text-left'>INFORMATION</h1>
            <ul className='text-xs font-medium mt-8  text-[#080808] text-left'>
              <li className='pb-2 '>About Us</li>
              <li className='pb-2 '>Our Policies</li>
              <li className='pb-2 '>Contact Us</li>
              <li className='pb-2 '>Affiliate Dashboard</li>
              <li className='pb-2 '>FAQs</li>
            </ul>
          </div>

          <div className='flex flex-col  gap-4 justify-center h-full w-full'>
             <div className=' w-full'>
              <h1 className='text-base font-bold text-[#080808] text-left'>PARTNER WITH US</h1>
                <p className='text-xs font-medium mt-8 text-left text-[#080808]'>Contact: </p>
                <p className='text-xs font-medium  text-left text-[#080808]'> partnerships @swiftcart.ng</p>
            </div>
             <div className=' w-full'>
              <h1 className='text-base font-bold text-[#080808] text-left'>DO BUSINESS WITH US</h1>
                <p className='text-xs font-medium mt-8 text-left text-[#080808]'>Contact: </p>
                <p  className='text-xs font-medium  text-left text-[#080808]'> partnerships @swiftcart.ng</p>
          </div>
          </div>
         
          <div className=' w-full'>
            <h1  className='text-base font-bold text-[#080808] text-left'>NEED HELP?</h1>
            <ul  className='text-xs font-medium mt-8  text-[#080808] text-left'>
              <li className='pb-2 '>Chat with us</li>
              <li className='pb-2 '>Help Center</li>
            </ul>
           
          </div>

          <div className='flex flex-col w-full gap-4 justify-center'>
            <div className='w-full'>
              <h1 className='text-base font-bold text-[#080808] text-left'>CONTACT INFO</h1>
              <img src="/src/assets/images/footerIcons/location.svg" alt="locationicon" />
            <p className='text-xs font-medium mt-8 text-left text-[#080808]'> N0: 17 Alaba Road, Opp Zira Filling Station, Lagos State, Nigeria </p>
            </div>
{/* flex flex-col */}
            <div className=' bg-gray-400  w-full'>
               <PhoneIcon />
             <p className='text-xs font-medium mt-8 text-left text-[#080808]'>0808220699, 08145345667</p>
            </div>
            <div className=' bg-gray-400 p-4 w-full'>
              <h1>JOIN US ON </h1>
            </div>
          </div>
          

            
          

        </div>
        
      <p>&copy; PAYMENT METHODS AND DELIVERY PARTNERS</p>
      <p>ALl Rights @2024</p>
    </footer>
  );
}

export default Footer;