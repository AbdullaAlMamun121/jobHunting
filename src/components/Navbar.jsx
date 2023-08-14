import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

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
      <div className={`navbar bg-[#E1EEFF] container ${
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
                <a>Home</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a  className={`font-bold ${isMenuOpen ? "animate-bounce" : ""}`}
                onClick={toggleMenu}
                >Parent
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
              <a className="font-bold">Home</a>
            </li>
            <li>
              <a className="font-bold">About us</a>
            </li>
            <li>
              <a className="font-bold">Contact us</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className={`font-bold ${isMenuOpen ? "animate-bounce" : ""}`}
                onClick={toggleMenu}>Parent</summary>
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
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
          <a className="btn">SignUp</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;


  




  
