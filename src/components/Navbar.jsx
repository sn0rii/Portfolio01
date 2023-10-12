import { useState } from "react";
import logo1 from "../assets/logo1.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          className="hover:rotate-[360deg] duration-500 "
          src={logo1}
          alt="logo"
          style={{ width: "50px" }}
        />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            O mnie
            {/* About */}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Umiejętności
            {/* Skills */}
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            {/* Work */}
            Projekty
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            {/* Contact */}
            Kontakt
          </Link>
        </li>
      </ul>

      {/* HAMBURGER */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center  "
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {/* About */}O mnie
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {/* Skills */}
            Umiejętności
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            {/* Work */}
            Projekty
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {/* Contact */}
            Kontakt
          </Link>
        </li>
      </ul>

      {/* SOCIAL MEDIA */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/wojciech-mitan-b51878291/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sn0rii"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" smooth={true} duration={1}>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc294]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/contact"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
