import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const HomeEng = () => {
  return (
    <div name="home" className="w-full  h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#a4de02]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Wojtek
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I'm frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[600px]">
          specializing in web development. Currently, I am concentrating on
          expanding my knowledge in the field of full-stack
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className=" group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#a4de02] hover:border-[#a4de02] hover:text-[#0a192f]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeEng;
