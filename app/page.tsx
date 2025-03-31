"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CtaCard from "@/components/ui/CtaCard";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";

import {Suspense} from "react";

const Home = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-3">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Landing />
        <About />
        <ExperienceTimeline />
        <Projects />
        {/* <CtaCard /> */}
        {/* <Hero /> */}
        {/* <Grid />
        <RecentProjects /> */}
        <Clients />
        <Contact />
        {/* <Experience /> */}
        {/* <Approach /> */}
        <Footer />
      </div>
    </main> </Suspense>
  );
};

export default Home;
