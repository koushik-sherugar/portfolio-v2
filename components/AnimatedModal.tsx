"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
  useOutsideClick,
} from "@/components/ui/animated-modal";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

import emailLogo from "../public/assets/icons/socialIcons/mail_icon.png";
import linkedInLogo from "../public/assets/icons/socialIcons/linkedin_icon.png";
import githubLogo from "../public/assets/icons/socialIcons/github_icon.png";
import twitterLogo from "../public/assets/icons/socialIcons/twitter_icon.png";
import instagramLogo from "../public/assets/icons/socialIcons/instagram_icon.png";
import whatsAppLogo from "../public/assets/icons/socialIcons/whatsapp_icon.png";
import { link } from "fs";

export function AnimatedModal() {
  // const modalRef = useRef(null);
  // const { setOpen } = useModal();

  interface Social {
    link: string;
    imgSrc: StaticImageData;
  }

  const socials: Social[] = [
    {
      link: "https://www.instagram.com/kaushik_sherugar_007/",
      imgSrc: instagramLogo,
    },
    {
      link: "https://linkedin.com/in/koushik-sherugar/",
      imgSrc: linkedInLogo,
    },
    {
      link: "mailto:koushiksherugar.contact@gmail.com",
      imgSrc: emailLogo,
    },
    {
      link: "https://github.com/koushik-sherugar",
      imgSrc: githubLogo,
    },
  ];

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Let&apos;s Connect
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white ">
            🤝
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="modal-content text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Reach me via 🚀
            </h4>
            <div className="flex justify-center items-center">
              {socials.map((eachSocial, idx): any => (
                <motion.div
                  onClick={() => {
                    window.open(eachSocial.link, "_blank");
                  }}
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl cursor-pointer -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={eachSocial?.imgSrc}
                    alt="social images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            {/* <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <MicIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div>
            </div> */}
          </ModalContent>
          {/* <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button
              onClick={() => {
                useOutsideClick(modalRef, () => false);
              }}
              className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
            >
              Close
            </button>
          </ModalFooter> */}
        </ModalBody>
      </Modal>
    </div>
  );
}
