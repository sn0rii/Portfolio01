const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 pb-[50px] md:pb-[0px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-[50px]">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#a4de02]">
              O mnie
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Cześć, jestem Wojtek, miło Cię poznać</p>
          </div>
          <div>
            <p>
              Jestem ciągle rozwijającym swoje umiejętności Frontend
              developerem. Temat ten pochłonął mnie na wskroś i za
              każdym krokiem widze kolejne smaczki usprawniające dotychczasowe
              projekty. Prywatnie dużą część wolnego czasu poza programowaniem
              spędzam trenując oraz piekąc różne ciasta co dla
              wielu może być sprzecznością
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
