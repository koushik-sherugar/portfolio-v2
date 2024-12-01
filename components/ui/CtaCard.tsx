import React, { useState } from "react";
import Lottie from "react-lottie";
import MagicButton from "../MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";
import { BackgroundGradientAnimation } from "./GradientBg";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
const CtaCard = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "koushiksherugar.contact@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    console.log("btn clicked");
    // after 3 seconds, set copied to false
    // setTimeout(() => {
    //   setCopied(false);
    // }, 3000);
  };

  return (
    // <BackgroundGradientAnimation>
    // <section className="  mx-10 bg-red-200 ">
    //   <div className="flex flex-col items-center z-50">
    //     <p>Cta title</p>
    //     <div
    //       className={`absolute -bottom-5 right-0 left-0 flex justify-center items-center ${
    //         copied ? "block" : "block"
    //       }`}
    //     >
    //       {/* <img src="/confetti.gif" alt="confetti" /> */}
    //       <Lottie options={defaultOptions} height={200} width={400} />
    //     </div>

    //     <MagicButton
    //       title={copied ? "Email is Copied!" : "Copy my email address"}
    //       icon={<IoCopyOutline />}
    //       position="left"
    //       handleClick={handleCopy}
    //       otherClasses="!bg-[#161A31]"
    //     />
    //   </div>
    // </section>
    <BackgroundBeamsWithCollision>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        {/* <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Gradients X Animations
        </p> */}
        <div className="flex flex-col gap-3 ">
          <p>contact us</p>
          <div
            className={`absolute -bottom-5 right-0 left-0 z-50 flex justify-center items-center ${
              copied ? "block" : "block"
            }`}
          >
            {/* <img src="/confetti.gif" alt="confetti" /> */}
            <Lottie options={defaultOptions} height={200} width={400} />
          </div>

          <button
            onClick={() => {
              handleCopy();
            }}
          >
            {copied ? "Email is Copied!" : "Copy my email address"}
          </button>
          {/* <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31]"
          /> */}
        </div>
      </div>
    </BackgroundBeamsWithCollision>

    // </BackgroundGradientAnimation>
    // <div className="mt-5 flex flex-col relative w-full mx-10 border border-red-400">
    //   {/* button border magic from tailwind css buttons  */}
    //   {/* add rounded-md h-8 md:h-8, remove rounded-full */}
    //   {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
    //   {/* add handleCopy() for the copy the text */}

    //   <p>CTA section title</p>
  );
};

export default CtaCard;
