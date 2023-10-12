const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-dull h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#a4de02]">
              {/* About */}O mnie
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Cześć, jestem Wojtek, miło Cię poznać</p>
            {/* <p>Hi, I'm Wojtek, nice to meet you. Please take a look around.</p> */}
          </div>
          <div>
            <p>
              Jestem ciągle rozwijającym swoje umiejętności Frontend
              developerem. Temat ten pochłonął mnie na wskroś i za
              każdym krokiem widze kolejne smaczki usprawniające dotychczasowe
              projekty. Prywatnie dużą część wolnego czasu poza programowaniem
              spędzam trenując oraz piekąc różne ciasta co dla
              wielu może być sprzecznością
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem omnis rem quia. Velit assumenda sapiente cupiditate
              sunt eaque odit ipsa eligendi veniam fugit ipsum aliquam
              consequuntur, earum omnis aut nesciunt? Lorem ipsum, dolor sit */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
