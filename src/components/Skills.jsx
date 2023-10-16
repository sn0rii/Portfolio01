import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import TypeScript from "../assets/typescript.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="  w-full h-full md:h-screen bg-[#0a192f] text-gray-300 pt-[10px] md:pt-[0px]   "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-[100px] md:mt-[0px]  ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#a4de02] ">
            Umiejętności
            {/* Skills */}
          </p>
          <p className="py-4">
            {/* These are technologies I've worked with */}
            Techchnologie, z którymi obecnie pracuje
          </p>
          <p className="text-[12px] text-gray-600">
            Naciśnij po przekierowanie na github
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <a
            href="https://github.com/sn0rii/Projekt-1-"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </a>
          <a
            href="https://github.com/sn0rii/Projekt-2"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Css} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </a>

          <a
            href="https://github.com/sn0rii/1-PROJEKT-JS"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="Javascript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </a>

          <a
            href="https://github.com/sn0rii/react-projekt-2"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </a>
          <a
            href="https://github.com/sn0rii/Typescript-tutorial"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto"
              src={TypeScript}
              alt="Typescript icon"
            />
            <p className="my-4">TYPESCRIPT</p>
          </a>
          <a
            href="https://github.com/sn0rii"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GITHUB</p>
          </a>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">TAILWIND</p>
          </div>

          <a
            href="https://github.com/sn0rii/Redux"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Redux} alt="Redux icon" />
            <p className="my-4">REDUX</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Skills;
