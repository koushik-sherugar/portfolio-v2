import React from "react";
import { TechIconCloud } from "./TechIconCloud";
import { Cover } from "./ui/Cover";

const About = () => {
  return (
    <div className="py-6 ">
      <div className="container m-auto  px-6  md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12">
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold md:text-4xl">
              Hi, I'm Koushik Sherugar
            </h2>

            <p className="mt-6 ">
              A full-stack developer with a passion for building software that
              is scalable, maintainable, and user-friendly. I have experience in
              building web applications using modern technologies like React,
              Next.js, Node.js, and Express.js. I am also proficient in mobile
              app development using Flutter and Android. I am a quick learner
              and a team player who is always eager to learn new technologies
              and work on challenging projects. I am looking for opportunities
              to work on exciting projects and contribute to the success of the
              organization.
            </p>
            {/* Acheievements */}
            <p className="mt-4 text-bold my-2">Acheievements</p>
            <section className="flex gap-4 ">
              {/* Projects done */}
              <div className="flex flex-col gap-2 ">
                <p className="text-xl">
                  50 <span className="text-sm text-cyan-400">+</span>
                </p>
                <p>Projects done</p>
              </div>
              {/* Experience years */}
              <div className="flex flex-col gap-2 ">
                <p className="text-xl">
                  5 <span className="text-sm text-cyan-400">+</span>
                </p>
                <p>Experience years</p>
              </div>
              {/* cleints served */}
              <div className="flex flex-col gap-2 ">
                <p className="text-xl">
                  20 <span className="text-sm text-cyan-400">+</span>
                </p>
                <p>Clients served</p>
              </div>
            </section>
          </div>
          <div className="md:5/12 lg:w-5/12">
            {/* <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            /> */}
            <TechIconCloud />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import { Cover } from "./ui/Cover";

// const About = () => {
//   return (
//     <div classNameName="w-full ">
//       <div classNameName="max-w-3/4 flex flex-col gap-2 p-3 rounded-md bg-gray-700">
//         <h2 classNameName="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl">
//           I'm <span classNameName="text-emerald-300">Koushik Sherugar</span>
//         </h2>
//         <h1 classNameName="text-3xl md:text-3xl lg:text-5xl font-semibold  relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
//           I build softwares <br /> at <Cover>warp speed</Cover>
//         </h1>
//         {/* desc */}
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
//           perferendis quos a optio? Maiores officiis quasi perferendis esse
//           assumenda. Hic optio provident mollitia vitae debitis labore similique
//           placeat, tempore voluptatum adipisci quia iusto ut, neque, facilis
//           facere minima autem reiciendis ducimus expedita voluptates. Dicta
//           totam iure earum nesciunt officia ducimus repellat sint dolores velit
//           soluta molestiae tempora, vero fugiat ullam. Quos iusto minus, enim
//           recusandae molestiae, accusantium aliquid adipisci, delectus
//           dignissimos repellat accusamus porro consequatur!
//         </p>
//         <TechIconCloud />
//       </div>
//     </div>
//   );
// };

// export default About;
