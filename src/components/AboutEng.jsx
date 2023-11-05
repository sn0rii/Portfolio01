const AboutEng = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 pb-[50px] md:pb-[0px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-[50px]">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#a4de02]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Wojtek, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a Frontend developer constantly developing my skills. This
              topic absorbed me through and through, and with each step I see
              new tidbits that improve existing projects. Privately, I spend a
              lot of my free time, apart from programming, training and baking
              various cakes, which may be a contradiction for many people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutEng;
