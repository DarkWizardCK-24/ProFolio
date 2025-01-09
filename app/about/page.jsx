"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DiAndroid } from "react-icons/di";
import { FaGlobe, FaFlutter } from "react-icons/fa6";
import { LuCodeXml } from "react-icons/lu";
import { BsArrowDownRight } from "react-icons/bs";


const about = [
  {
    num: "01",
    icon: <FaGlobe />,
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, corrupti.",
    href: "",
  },
  {
    num: "02",
    icon: <LuCodeXml />,
    title: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, corrupti.",
    href: "",
  },
  {
    num: "03",
    icon: <FaFlutter />,
    title: "Flutter Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, corrupti.",
    href: "",
  },
  {
    num: "04",
    icon: <DiAndroid />,
    title: "Android Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, corrupti.",
    href: "",
  },
];

const About = () => {
  return (
    <section className="flex flex-col justify-center py-12 xl:py-0 min-h-[80vh]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {about.map((about, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {about.num}
                  </div>
                  <Link href={about.href} className="w-[45px] h-[45px] rounded-full bg-white group-hover:bg-accent transition-all flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-3xl text-primary"/>
                  </Link>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{about.title}</h2>
                  <div className="text-[40px] text-white group-hover:text-accent transition-all duration-500">{about.icon}</div>
                </div>
                <p>{about.description}</p>
                <div className="border-b w-full border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
