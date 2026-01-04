import { useState , useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>

      <nav className={`flex items-center fixed  bg-white w-full z-20 justify-between border-2 px-6 md:px-12 p-2 shadow-md font-medium ${isScrolled ? "opacity-90" : "opacity-100"}`}>
        <div>logo</div>

        <ul className="hidden md:flex gap-9">
          <li className="nav-elements">Home</li>
          <li className="nav-elements">About</li>
          <li className="nav-elements">E-facilities</li>
          <li className="nav-elements">Recycle</li>
          <li className="nav-elements">Education</li>
          <li className="nav-elements">Contact us</li>
          <li className="nav-elements">Rules</li>
        </ul>


        <div className="hidden md:flex items-center gap-6">
          <p className="text-[#008B63] flex items-center gap-2">
            <IoLocationSharp /> Hyderabad, Telangana
          </p>
          <button className="border-2 px-5 font-bold text-[#33B16C] rounded-md hover:bg-[#33B16C] hover:text-white transition duration-300 border-[#33B16C] p-2">
            SIGNIN
          </button>
        </div>

        <button
          className="md:hidden text-3xl z-50"
          onClick={() => setIsOpen(true)}
        >
          <HiMenu />
        </button>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full bg-white z-50
        w-[50%] sm:w-[30%] md:w-[30%]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        <button
          className="text-3xl absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <HiX />
        </button>


        <div className="mt-16 h-full overflow-y-auto flex flex-col px-6 pb-6">
          <ul className="flex flex-col gap-6 font-medium">
            <li className="nav-elements">Home</li>
            <li className="nav-elements">About</li>
            <li className="nav-elements">E-facilities</li>
            <li className="nav-elements">Recycle</li>
            <li className="nav-elements">Education</li>
            <li className="nav-elements">Contact us</li>
            <li className="nav-elements">Rules</li>
          </ul>

          <p className="text-[#008B63] flex items-center gap-2 mt-6">
            <IoLocationSharp /> Hyderabad, Telangana
          </p>

          <button className="border-2 w-fit mt-4 px-6 font-bold text-[#33B16C] rounded-md hover:bg-[#33B16C] hover:text-white transition duration-300 border-[#33B16C] p-3">
            SIGNIN
          </button>
        </div>
      </div>
    </>
  );
}
