// import About from "./components/About";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
// import Work from "./components/Work";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Work />
//       <Contact />
//     </div>
//   );
// }

// export default App;

import Polish from "./language/polish";
import English from "./language/english";
import React, { useState } from "react";

function App() {
  const [language, setLanguage] = useState(true);

  const toggleLanguage = () => {
    setLanguage(!language);
  };
  return (
    <>
      <button
        className={
          language
            ? `  fixed z-50 bottom-[18px] right-[16px] british-flag `
            : "  fixed z-50 bottom-[18px] right-[16px] polish-flag "
        }
        onClick={toggleLanguage}
      ></button>
      {language ? <Polish /> : <English />}
    </>
  );
}

export default App;
