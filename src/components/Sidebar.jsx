/* eslint-disable */
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlineUserGroup,
  HiChat,
  HiMusicNote,
  HiOutlineMail,
  HiUser,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { useIsAuthenticated } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.png";
const links = [
  { name: "Discover", to: "/", icon: HiMusicNote },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
  { name: "Community", to: "/blog", icon: HiChat },
  { name: "About Us", to: "/about", icon: HiOutlineHome },
  { name: "Contact Us", to: "/contact", icon: HiOutlineMail },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-[#bb2649] "
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
const AuthNavLinks = ({ handleClick }) => {
  const navigate = useNavigate();
  const signOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated() ? (
    <>
      <NavLink
        key="Profile"
        to="/profile"
        className="flex flex-row justify-start items-center  text-sm font-medium text-gray-400  hover:text-[#bb2649]"
        onClick={() => handleClick && handleClick()}
      >
        <HiUser className="w-6 h-6 mr-2" />
        Profile
      </NavLink>
      <Link
        key="Logout"
        href="/logout"
        className="flex flex-row justify-start items-center cursor-pointer my-8 text-sm font-medium text-gray-400  hover:text-[#bb2649] "
        onClick={() => {
          signOut();
          navigate("/login");
        }}
      >
        <HiUser className="w-6 h-6 mr-2" />
        Logout
      </Link>
    </>
  ) : (
    <NavLink
      key="Login"
      to="/login"
      className="flex flex-row justify-start items-center  text-sm font-medium text-gray-400  hover:text-[#bb2649]"
      onClick={() => handleClick && handleClick()}
    >
      <HiUser className="w-6 h-6 mr-2" />
      Login
    </NavLink>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[200px] py-10 px-4 bg-[#1E1E1E] border-r-2 border-[#bb2649]">
        <img src={logo1} alt="logo" className="w-full h-36 object-contain" />
        <NavLinks />
        <AuthNavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div

        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#c9516d] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? "left-0" : "-left-full"
          }`}

      >
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain" /> */}
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
