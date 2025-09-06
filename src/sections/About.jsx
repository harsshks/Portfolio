import { useRef } from "react";

import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets\pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[1.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Harsh Kumar</p>
            <p className="subtext">
              Hi, I’m Harsh Kumar, a passionate Web Developer and Tech Enthusiast exploring the world of Technology . I love turning ideas into interactive digital experiences, building impactful projects, and continuously learning to stay ahead in the tech space.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-300">
              IDEAS INTO CODE
              <span className="text-7xl text-white animate-pulse">.</span>
              
            </p>
            
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-blue-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I work with a versatile stack of technologies to craft scalable and engaging web applications.

              <li>Frontend: HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS</li>

              <li>Backend: Node.js, Express.js</li>

              <li>Database: MongoDB, MySQL</li>

              <li>Tools & Platforms: Git, GitHub, VS Code, </li>

              <ul>Other Interests: API integration and experimenting with Three.js for 3D web experiences</ul>
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
