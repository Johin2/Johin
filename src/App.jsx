import { ReactLenis } from 'lenis/react';
import { useEffect} from "react";
import gsap from 'gsap';
import { useRef } from "react";
import Aboutme from "./components/InfoComponents/Aboutme";
import Info from "./components/InfoComponents/Info";
import Resume from "./components/InfoComponents/Resume";
import Image from "./components/InfoComponents/Image";
import Education from "./components/InfoComponents/Education";
import TimelineCom from "./components/InfoComponents/TimelineCom";
import Certifications from "./components/InfoComponents/Certifications";
import Projects from "./components/ExperienceSkills/Projects";
import Experience from "./components/ExperienceSkills/Experience";
import Skills from "./components/ExperienceSkills/Skills";
import Contacts from "./components/ExperienceSkills/Contacts";

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <>
      <ReactLenis ref={lenisRef} autoRaf={false} root>
          <div className="custom-scrollbar mt-5 grid grid-rows-4 grid-cols-1 gap-5 mx-5 justify-center md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-3 lg:gap-10 lg:h-screen">
            <Aboutme />
            <Info />
            <Resume />
            <Image />
            <Education />
            <TimelineCom />
            <Certifications />
          </div>

          <div className="grid gap-5 mx-5 mt-2 lg:mt-10 md:grid-cols-2 lg:grid-cols-4 lg:h-screen lg:gap-10">
            <Projects />
            <Experience />
            <Skills />
          </div>

          <div className="grid md:grid-cols-2 md:mt-10 m-5">
            <Contacts />
          </div>
      </ReactLenis>
    </>
  );
};

export default App;