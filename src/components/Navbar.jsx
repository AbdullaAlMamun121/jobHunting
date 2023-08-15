import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { FcAbout,FcContacts } from 'react-icons/fc';
import { FiMoreHorizontal } from 'react-icons/fi';
const Navbar = () => {

    const {user} = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return ()=>{
        window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }

    return (
      <div className={`navbar bg-[#E1EEFF] container z-30 ${
        isScrolled ? "fixed top-0 bg-opacity-90 shadow-md" : ""
      }`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <Link to="/"> <AiFillHome></AiFillHome> Home</Link>
              </li>
              <li>
                <Link to="/about"> <FcAbout></FcAbout> About us</Link>
              </li>
              <li>
                <Link to="/contact"><FcContacts></FcContacts> Contact us</Link>
              </li>
              <li>
                <a  className={`font-bold ${isMenuOpen ? "animate-bounce" : ""}`}
                onClick={toggleMenu}
                ><FiMoreHorizontal></FiMoreHorizontal> More
                </a>
                <ul className={`p-2 ${isMenuOpen ? "visible" : "hidden"}`}>
                  <li>
                    <a>Job Seeker</a>
                  </li>
                  <li>
                    <a>Job poster</a>
                  </li>
                  <li>
                    <a>Fresher Jobs</a>
                  </li>
                  <li>
                    <a>Experienced Jobs</a>
                  </li>
                  <li>
                    <a>Top IT Companies</a>
                  </li>
                  <li>
                    <a>My Profile</a>
                  </li>
                  <li>
                    <a>Blog section</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">JobHunter</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="font-bold"><AiFillHome></AiFillHome> Home</Link>
            </li>
            <li>
              <Link to="/about" className="font-bold"><FcAbout></FcAbout> About us</Link>
            </li>
            <li>
              <Link to="/contact" className="font-bold"><FcContacts></FcContacts> Contact us</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className={`font-bold ${isMenuOpen ? "animate-bounce" : ""}`}
                onClick={toggleMenu}><FiMoreHorizontal></FiMoreHorizontal> More</summary>
                <ul className={`p-2 ${isMenuOpen ? "visible" : "hidden"} z-10`}>
                  <li>
                    <a>Job Seeker</a>
                  </li>
                  <li>
                    <a>Job poster</a>
                  </li>
                  <li>
                    <a>Fresher Jobs</a>
                  </li>
                  <li>
                    <a>Experienced Jobs</a>
                  </li>
                  <li>
                    <a>Top IT Companies</a>
                  </li>
                  <li>
                    <a>My Profile</a>
                  </li>
                  <li>
                    <a>Blog section</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn mr-5"> <BsFillPersonFill></BsFillPersonFill>Login</Link>
          <Link to="/signup" className="btn"> <MdOutlineManageAccounts></MdOutlineManageAccounts> SignUp</Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;


  




  
