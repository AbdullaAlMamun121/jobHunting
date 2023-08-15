import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FcAbout, FcContacts } from "react-icons/fc";
import { FiMoreHorizontal } from "react-icons/fi";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`navbar bg-[#E1EEFF] container z-30 ${
        isScrolled ? "fixed top-0 bg-opacity-90 shadow-md" : ""
      }`}
    >
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
              <Link to="/">
                {" "}
                <AiFillHome></AiFillHome> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                {" "}
                <FcAbout></FcAbout> About us
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FcContacts></FcContacts> Contact us
              </Link>
            </li>
            <li>
              <a
                className={`font-bold ${isMenuOpen ? "animate-bounce" : ""}`}
                onClick={toggleMenu}
              >
                <FiMoreHorizontal></FiMoreHorizontal> More
              </a>
              <ul className={`p-2 ${isMenuOpen ? "visible" : "hidden"}`}>
                <li>
                  <Link to="/">Job Seeker</Link>
                </li>
                <li>
                  <Link to="/dashboard/adminLogin">Job poster</Link>
                </li>
                <li>
                  <button onClick={() => scrollToSection("fresherSection")}>
                    Fresher Jobs
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("experienceSection")}>
                    Experience Job
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("itCompany")}>
                    TOP IT Company
                  </button>
                </li>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
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
            <Link to="/" className="font-bold">
              <AiFillHome></AiFillHome> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-bold">
              <FcAbout></FcAbout> About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-bold">
              <FcContacts></FcContacts> Contact us
            </Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary
                className={`font-bold ${isMenuOpen ? "animate-bounce" : ""}`}
                onClick={toggleMenu}
              >
                <FiMoreHorizontal></FiMoreHorizontal> More
              </summary>
              <ul className={`p-2 ${isMenuOpen ? "visible" : "hidden"} z-10`}>
                <li>
                  <Link to="/">Job Seeker</Link>
                </li>
                <li>
                  <Link to="/dashboard/adminLogin">Job poster</Link>
                </li>
                <li>
                  <button onClick={() => scrollToSection("fresherSection")}>
                    Fresher Jobs
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("experienceSection")}>
                    Experience Job
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("itCompany")}>
                    TOP IT Company
                  </button>
                </li>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {/* login and logout */}
       <div className="navbar-end">
        {user ? (
          // Show Logout button if user is logged in
          <button className="btn mr-5" onClick={logOut}>
            Logout
          </button>
        ) : (
          // Show Login and SignUp buttons if user is not logged in
          <>
            <Link to="/login" className="btn mr-5">
              <BsFillPersonFill></BsFillPersonFill>Login
            </Link>
            <Link to="/signup" className="btn">
              <MdOutlineManageAccounts></MdOutlineManageAccounts> SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
