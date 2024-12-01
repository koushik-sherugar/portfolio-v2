import Image from "next/image";
import React, { useRef } from "react";
import profileImg from "../public/assets/images/memoji-avatar-1.png";
import grainImage from "../public/assets/images/grain.jpg";
import StarIcon from "../public/assets/icons/star.svg";
import SparkleIcon from "../public/assets/icons/sparkle.svg";
import { IoMdArrowDown } from "react-icons/io";
import { HeroOrbit } from "./HeroOrbit";
import { AnimatedModal } from "./AnimatedModal";

const Landing = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  function scrollToNextSection() {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip ">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8), transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/* Rings */}
        <div className=" size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>
        {/* star icons */}
        {/* <Image
          alt="star"
          src={StarIcon}
          height={10}
          width={7}
          className="size-32 text-emerald-300"
        /> */}
        {/* shouldOrbit = false, shouldSpin = false, orbitDuration, spinDuration, */}
        {/* sparkle icon */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-3 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-3  text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s">
          <SparkleIcon className="size-3 text-emerald-300/20" />
        </HeroOrbit>
        {/* Circles */}
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          // shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        {/* Profile section */}
        <div className="flex flex-col items-center">
          <Image
            src={profileImg}
            className="size-[100px]"
            alt="profile image"
          />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 items-center gap-4 rounded-lg inline-flex">
            <div className="bg-green-500 rounded-full size-2.5 relative ">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-semibold">Let's build together</div>
          </div>
        </div>
        {/* texts */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl mt-8 md:text-5xl text-center tracking-wide">
            Koushik Sherugar
          </h1>
          <p className="text-center mt-4 text-white/60 md:text-lg">
            An experienced developer with experience in for building awesome
            applications for both startups and enterprises.
          </p>
          {/* buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button className="cursor-pointer inline-flex items-center gap-2 border-2 border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Scroll Down</span>
              <span>
                <IoMdArrowDown />
              </span>
            </button>
            <AnimatedModal />
            {/* <button
              onClick={() => {
                // openModal();
                console.log("test");
                setIsModalOpen(true);
              }}
              className="z-50 cursor-pointer inline-flex items-center gap-2 border-2 bg-white border-white text-gray-900 px-6 h-12 rounded-xl"
            >
              <span>👋</span>
              <span className="font-semibold">Let's connecttt</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
