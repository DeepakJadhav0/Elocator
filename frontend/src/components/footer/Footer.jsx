import {  IoIosSend } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai"; 

export default function Footer() {
  return (
<footer className="bg-[#F5FFFC] text-gray-800 shadow-md">
       <hr className="bg-emerald-200 mt-10 p-[1px]" />
  <div className="max-w-6xl mx-auto px-3 py-2">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 p-5">
      
      {/* Column 1 */}
      <div className="w-full md:w-auto">
        <h2 className="text-2xl py-3 font-semibold text-green-600 mb-4">ELocate</h2>
        <p className="text-sm leading-relaxed font-bold mb-4">
          Elocater : Revolutionizing e-waste management through technological innovation.
          Our platform connects you with certified recycling facilities, empowering your journey toward environmental 
          responsibility and sustainable electronics disposal.
        </p>

        <div className="flex flex-col sm:flex-row border border-gray-700 rounded-md p-1.5 gap-2">
          <input
            type="email"
            placeholder="Join sustainability newsletter"
            className="rounded-l-md px-3 py-2 text-sm w-full bg-transparent focus:outline-none"
          />
          <button className="bg-green-500 text-white px-2 rounded-md flex items-center justify-center">
            <IoIosSend className="text-white text-2xl"/>
          </button>
        </div>
      </div>

      {/* Column 2 */}
      <div className="w-full md:w-[200px] pr-10 font-semibold">
        <h3 className="text-2xl font-bold mb-4">Recycling Solutions</h3>
        <ul className="space-y-3 text-sm">
          <li><a className="footer-elements">Smartphone Recycling</a></li>
          <li><a className="footer-elements">Laptop & Computer Recycling</a></li>
          <li><a className="footer-elements">Electronics Accessories</a></li>
          <li><a className="footer-elements">Television & Display Recycling</a></li>
          <li><a className="footer-elements">Refrigerator & Cooling Appliances</a></li>
          <li><a className="footer-elements">Household Appliance Recycling</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="w-full md:w-[200px] font-semibold">
        <h3 className="text-2xl font-bold mb-4">ELocate Platform</h3>
        <ul className="space-y-5 text-sm">
          <li><a className="footer-elements">Our Mission & Vision</a></li>
          <li><a className="footer-elements">E-Waste Education Center</a></li>
          <li><a className="footer-elements">Certified Recycling Network</a></li>
          <li><a className="footer-elements">Sustainability News</a></li>
          <li><a className="footer-elements">Insights & Resources</a></li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="w-full md:w-auto">
        <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
        <ul className="space-y-3 font-semibold text-sm">
          <li className="flex items-center gap-2"><IoLocation className="text-2xl"/> Chh. Hydrabad, Telengana, India</li>
          <li className="flex items-center gap-2"><IoIosCall className="text-2xl"/> +91 123 456 7890</li>
          <li className="flex items-center gap-2"><IoMdMail className="text-xl"/> contact@elocate.com</li>
        </ul>

        <hr className="mt-7 border-black"/>
        
        <ul className="flex flex-wrap gap-3 mt-6">
            <li className="border footer-icons border-black p-2 rounded"><a><FaInstagram/></a></li>
            <li className="border footer-icons border-black p-2 rounded"><a><FaLinkedinIn/></a></li>
            <li className="border footer-icons border-black p-2 rounded"><a><FaWhatsapp/></a></li>
            <li className="border footer-icons border-black p-2 rounded"><a><AiOutlineTwitter/></a></li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-black mt-2 p-3 pb-6 flex flex-col md:flex-row justify-between items-center font-semibold text-sm">
      <p>© 2023 ELocate | All Rights Reserved by <span className="text-green-600">Deepak Jadhav</span></p>
      <div className="flex gap-6 mt-3 md:mt-0">
        <span><a className="footer-elements">Privacy Policy</a></span>
        <span><a className="footer-elements">Terms of Service</a></span>
      </div>
    </div>
  </div>
</footer>

  )
}
