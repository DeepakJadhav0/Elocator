import { useState, useEffect, useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useLocation } from "./Location";
import Logout from "../profile/Profile";
import "./navbar.css";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "E-facilities", path: "/facility" },
  { name: "Recycle", path: "/recycle" },
  { name: "Education", path: "/education" },
  { name: "Contact us", path: "/contact" },
  { name: "Rules", path: "/rule" },
];

const PRIMARY_COLOR = "#33B16C";
const PRIMARY_HOVER = "#2f9d61";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoutMsg, setShowLogoutMsg] = useState(false);

  const { city, state } = useLocation();
  const userAuth = useSelector((state) => state.user);

  // Handle scroll event for navbar shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoized location display
  const LocationTag = useMemo(
    () => (
      <div className="flex items-center gap-2 text-sm" style={{ color: PRIMARY_COLOR }}>
        <IoLocationSharp className="shrink-0" size={18} />
        <span className="truncate max-w-[150px]">
          {city}
          {state ? `, ${state}` : ""}
        </span>
      </div>
    ),
    [city, state]
  );

  // Handle logout action
  const handleLogout = useCallback(() => {
    setShowLogoutMsg(true);
    setTimeout(() => setShowLogoutMsg(false), 3000);
  }, []);



  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 border-b flex items-center justify-between px-6 md:px-12 py-4 bg-white/95 backdrop-blur-sm ${
          isScrolled ? "shadow-md py-3" : "shadow-sm"
        }`}
      >
        {/* Logo */}
        <NavLink to={"/"} className="font-bold text-2xl tracking-tight text-green-600 ">E-Locator</NavLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-6 xl:gap-9">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="nav-elements font-semibold text-sm uppercase tracking-wide"
            >
              {link.name}
            </NavLink>
          ))}
        </ul>

        {/* Desktop Right Section: Location + Auth */}
        <div className="hidden md:flex items-center gap-6">
          {LocationTag}
          {userAuth?.isAuth ? (
            <RiLogoutBoxRLine
              onClick={handleLogout}
              className="text-2xl cursor-pointer transition-colors hover:opacity-70"
              style={{ color: PRIMARY_COLOR }}
            />
          ) : (
            <button
              className="border-2 px-5 py-1.5 font-bold rounded-md transition-colors"
              style={{
                borderColor: PRIMARY_COLOR,
                color: PRIMARY_COLOR,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = PRIMARY_COLOR;
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = PRIMARY_COLOR;
              }}
            >
              SIGN IN
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-3xl transition-colors hover:opacity-70"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu />
        </button>

        {/* Logout Notification */}
        {showLogoutMsg && <Logout logout={showLogoutMsg} />}
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
        role="presentation"
      >
        <div
          className={`absolute right-0 top-0 h-full bg-white w-3/4 sm:w-1/2 p-8 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-3xl transition-colors hover:opacity-70"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX />
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-6 mt-12">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium border-b border-gray-100 pb-2 transition-colors hover:opacity-70"
              >
                {link.name}
              </NavLink>
            ))}
          </ul>

          {/* Mobile Logout Component */}
          <div className="mt-8">
            <Logout logout={showLogoutMsg} />
          </div>

          {/* Mobile Location + Auth Section */}
          <div className="mt-8 flex flex-col gap-6 border-t pt-6">
            {LocationTag}
            {userAuth?.isAuth ? (
              <RiLogoutBoxRLine
                onClick={handleLogout}
                className="text-2xl cursor-pointer transition-colors hover:opacity-70"
                style={{ color: PRIMARY_COLOR }}
              />
            ) : (
              <button
                className="border-2 px-4 py-2 font-bold rounded-md transition-colors"
                style={{
                  borderColor: PRIMARY_COLOR,
                  color: PRIMARY_COLOR,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = PRIMARY_COLOR;
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = PRIMARY_COLOR;
                }}
              >
                SIGN IN
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}