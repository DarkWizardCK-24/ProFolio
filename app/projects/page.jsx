"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoLogoGithub, IoLogoBitbucket, IoOpenOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlider from "@/components/WorkSlider";

const projects = [
  {
    num: "01",
    name: "Portfolio-Nextjs",
    category: "Web Project",
    image: "/project/10.png",
    title: "project 1",
    description:
      "A web responsive portfolio built using Nextjs framewoork and Javascript with animation and deployed using Vercel.",
    stack: [{ name: "Next js" }, { name: "Javascript" }],
    live: "",
    github: "https://github.com/DarkWizardCK-24/Portfolio-Next.js",
    bitbucket: "",
  },
  {
    num: "02",
    name: "URL Shortner",
    category: "Web Project",
    image: "/project/09.png",
    title: "project 2",
    description:
      "A URL shortner application built using Nextjs and MongoDB with free service of links trimming and hosted using Vercel.",
    stack: [{ name: "Next js" }, { name: "MongoDB" }, { name: "Javascript" }],
    live: "https://bitlinks-zeta.vercel.app",
    github: "https://github.com/DarkWizardCK-24/Bitlinks",
    bitbucket: "https://bitbucket.org/dark_wizard/bitlinks/src/main/",
  },
  {
    num: "03",
    name: "ToDo Web",
    category: "Web Project",
    image: "/project/10.png",
    title: "project 3",
    description:
      "A Todo web application built using react framework and javascript functions and hosted using Vercel.",
    stack: [{ name: "Vite React" }, { name: "CSS" }, { name: "Javascript" }],
    live: "https://i-tasks-web.vercel.app/",
    github: "https://github.com/DarkWizardCK-24/iTasks-Web",
    bitbucket: "https://bitbucket.org/dark_wizard/itask-web/src/main/",
  },
  {
    num: "04",
    name: "Bittree-Clone_Linktree",
    category: "Web Project",
    image: "/project/09.png",
    title: "project 4",
    description:
      "A clone of Linktree is built with simple features of creating link tree and add links and store data using MongoDB.",
    stack: [{ name: "Next js" }, { name: "MongoDB" }, { name: "Javascript" }],
    live: "",
    github: "https://github.com/DarkWizardCK-24/Bittree_Clone-Linktree",
    bitbucket: "https://bitbucket.org/dark_wizard/bittree_clone-linktree/src/main/",
  },
  {
    num: "05",
    name: "Recipe-App",
    category: "Mobile Project",
    image: "/project/10.png",
    title: "project 5",
    description:
      "A simple recipe app built using kotlin basics and API integration using retrofit library.",
    stack: [{ name: "Kotlin" }],
    live: "",
    github: "https://github.com/DarkWizardCK-24/Recipe-App",
    bitbucket: "https://bitbucket.org/dark_wizard/recipe-app/src/main/",
  },
  {
    num: "06",
    name: "Shopping List",
    category: "Mobile Project",
    image: "/project/09.png",
    title: "project 6",
    description:
      "A simple and basic application to add , update and delete items from the list using Kotlin basics without advanced database system.",
    stack: [{ name: "Kotlin" }],
    live: "",
    github: "https://github.com/DarkWizardCK-24/Shopping_List",
    bitbucket: "https://bitbucket.org/dark_wizard/shopping-list/src/main/",
  },
  {
    num: "07",
    name: "Captain Game",
    category: "Mobile Project",
    image: "/project/10.png",
    title: "project 7",
    description:
      "A simple and basic sailor game built using basic concepts of Kotlin.",
    stack: [{ name: "Kotlin" }],
    live: "",
    github: "https://github.com/DarkWizardCK-24/Captain_Game",
    bitbucket: "https://bitbucket.org/dark_wizard/captain-game/src/main/",
  },
  {
    num: "08",
    name: "Portfolio",
    category: "Mobile Project",
    image: "/project/09.png",
    title: "project 8",
    description:
      "A perfect responsive portfolio built using flutter web with dart concepts.",
    stack: [{ name: "Flutter" }],
    live: "",
    github: "https://github.com/DarkWizardCK-24/Portfolio",
    bitbucket: "https://bitbucket.org/dark_wizard/portfolio/src/main/",
  },
  {
    num: "09",
    name: "Airline-Management-System",
    category: "Desktop Project",
    image: "/project/10.png",
    title: "project 9",
    description:
      "GUI interface using tkinter in python and connecting to MySQL using Python-MySQL connectivity.",
    stack: [{ name: "Python" }, { name: "MySQL" },],
    live: "",
    github: "https://github.com/DarkWizardCK-24/Airline-Management-System ",
    bitbucket: "",
  },
  {
    num: "10",
    name: "Black-Caps-NZ",
    category: "Desktop Project",
    image: "/project/09.png",
    title: "project 10",
    description: "A database of all players with their roles played or playing in New Zealand Cricket Team or have been part of the squad using XML and Excel.",
    stack: [{ name: "XML" }, { name: "SQL" }, { name: "HTML" } ],
    live: "",
    github: "https://github.com/DarkWizardCK-24/Airport-Management-System ",
    bitbucket: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      initial={{ opacity: 0 }}
      className="flex flex-col justify-center py-12 xl:px-0 min-h-[80vh]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full order-2 flex flex-col xl:order-none xl:justify-between xl:w-[50%] xl:h-[460px]">
            <div className="w-72 flex flex-row gap-12">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <div className=" font-bold leading-none text-accent text-3xl flex justify-center items-center">
              {project.name}
            </div>
            </div>
            <h2 className="font-bold leading-none text-white text-[42px] group-hover:text-accent transition-all duration-500 capitalize">
              {project.category}
            </h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4 py-3">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-lg text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4 py-3">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center group rounded-full bg-white/5 h-[60px] w-[60px]">
                      <IoOpenOutline className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center group rounded-full bg-white/5 h-[60px] w-[60px]">
                      <IoLogoGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.bitbucket}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center group rounded-full bg-white/5 h-[60px] w-[60px]">
                      <IoLogoBitbucket className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Bitbucket Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="flex justify-center items-center h-[460px] relative group bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="dsc"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSlider containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full 
              justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary flex justify-center 
              items-center text-[22px] w-[44px] h-[44px] transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
