import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { abhaya, dunzoClone, nms, quickerkart } from "../public/assets/images/projectImages/index";

const Projects = () => {
  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
};

export default Projects;

// dunzo clone:
// Abhaya: //abhaya.vercel.app/
// explovid
// blogging buzz
// NMS: https://nss-management-system.vercel.app/
// flipkart clone : https://flipkart-clone-tan.vercel.app/
// https://github.com/koushik-sherugar/listen-and-forget
// https://listen-and-forget.vercel.app/

export const products = [
  {
    title: "Abhaya",
    discription: "A women safety application with SOS and nearby location businesses & helpline automatic help asking features.",
    appLink: "https://abhaya.vercel.app/",
    githubLink: "https://abhaya1",
    thumbnail: abhaya
  },
  {
    title: "Quickerkart",
    discription: "QR based self ordering system for restaurants.",
    appLink: "https://amogha-sagar.vercel.app/",
    githubLink: "https://github.com/koushik-sherugar/",
    thumbnail: quickerkart
  },
  {
    title: "dunzo clone",
    discription: "A clone of dunzo with all the features like ordering and tracking the order.",
    appLink: "https://github.com/koushik-sherugar/delivery-app",
    githubLink: "https://github.com/koushik-sherugar/delivery-app",
    thumbnail: dunzoClone,
  },
  {
    title: "NSS Management System",
    discription: "A management system for NSS volunteers and admins to manage their activities and events.",
    appLink: "https://github.com/koushik-sherugar/NSS-Management-System",
    githubLink: "https://github.com/koushik-sherugar/NSS-Management-System",
    thumbnail: nms,
  },
  {
    title: "Abhaya",
    discription: "A women safety application with SOS and nearby location businesses & helpline automatic help asking features.",
    appLink: "https://abhaya.vercel.app/",
    githubLink: "https://abhaya1",
    thumbnail: abhaya
  },
  {
    title: "Quickerkart",
    discription: "QR based self ordering system for restaurants.",
    appLink: "https://amogha-sagar.vercel.app/",
    githubLink: "https://github.com/koushik-sherugar/",
    thumbnail: quickerkart
  },
  {
    title: "dunzo clone",
    discription: "A clone of dunzo with all the features like ordering and tracking the order.",
    appLink: "https://github.com/koushik-sherugar/delivery-app",
    githubLink: "https://github.com/koushik-sherugar/delivery-app",
    thumbnail: dunzoClone,
  },
  {
    title: "NSS Management System",
    discription: "A management system for NSS volunteers and admins to manage their activities and events.",
    appLink: "https://github.com/koushik-sherugar/NSS-Management-System",
    githubLink: "https://github.com/koushik-sherugar/NSS-Management-System",
    thumbnail: nms,
  }
];
