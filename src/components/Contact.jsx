const Contact = () => {
  return (
    <div
      name="contact"
      className="  w-full h-screen bg-[#0a192f] flex justify-center items-center p-4  md:pt-[0px] pt-[500px] pb-[300px] md:pb-[0px] "
    >
      <form
        method="POST"
        action="https://getform.io/f/0d2863b1-312a-465c-86a0-11d46f7c7c26"
        className="flex flex-col max-w-[600px] w-full mt-[-100px]"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#a4de02] text-gray-300 ">
            Kontakt
          </p>
          <p className="py-4 text-gray-300">
            Wypełnij formę poniżej albo napisz mi email wojtekmitan91@gmail.com
            {/* Submit the form below or shoot me an email wojtekmitan91@gmail.com */}
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6] "
          type="text"
          //   placeholder="Name"
          placeholder="Imię"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className=" p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          //   placeholder="Message"
          placeholder="Wiadomość"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#a4de02] hover:border-[#a4de02] hover:text-black px-4 py-3 my-8 mx-auto flex items-center">
          {/* Let's Collaborate */}
          Współpracujmy!
        </button>
      </form>
    </div>
  );
};
export default Contact;
