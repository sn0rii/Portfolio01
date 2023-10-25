import projectTailwind from "../assets/project/ProjektTailwind01.jpg";
import projectCss from "../assets/project/ProjektCss01.jpg";
import projectReact from "../assets/project/Projekt1React.jpg";
import projectJS from "../assets/project/Projekt1JS.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="bg-[#0a192f] w-full   md:h-screen text-gray-300 pt-[100px] md:pt-[0px] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex  flex-col justify-center w-full h-full   ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#a4de02]">
            Projekty
            {/* Work */}
          </p>
          <p className="py-6">
            {/* Check out some of my recent work */}
            Sprawdź niektóre z projektów
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${projectTailwind})` }}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tailwind Projekt
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://projektbank.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/sn0rii/testProject"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {/* Code */}
                    Kod
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${projectCss})` }}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                CSS Projekt
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://projekt-2-future-collars.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/sn0rii/Projekt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {/* Code */}
                    Kod
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${projectReact})` }}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Projekt
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://react-projekt-2-future.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/sn0rii/react-projekt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {/* Code */}
                    Kod
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${projectJS})` }}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Javascript Projekt
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://1-projekt-js.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/sn0rii/1-PROJEKT-JS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {/* Code */}
                    Kod
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
