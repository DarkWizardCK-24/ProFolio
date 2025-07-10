"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { IoLogoNodejs, IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { LuFileJson } from "react-icons/lu";
import { MdOutlineWork, MdSchool } from "react-icons/md";
import {
  TbApi,
  TbCertificate,
  TbFileTypeXml,
  TbDatabase,
} from "react-icons/tb";
import {
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiKotlin,
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, laboriosam voluptates impedit non cupiditate id, dolore porro doloribus corporis.",
  info: [
    {
      fieldname: "Name",
      fieldvalue: "Chaitanya Katare",
    },
    {
      fieldname: "Alias",
      fieldvalue: "Dark Wizãrd",
    },
    {
      fieldname: "Experience",
      fieldvalue: "2+ Years",
    },
    {
      fieldname: "Email",
      fieldvalue: "chaitanyask103@gmail.com",
    },
    {
      fieldname: "Phone",
      fieldvalue: "+91-9324375100",
    },
    {
      fieldname: "Languages",
      fieldvalue: "English, Marathi, Hindi, French",
    },
    {
      fieldname: "Location",
      fieldvalue: "Mumbai, Maharashtra",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "Indian",
    },
  ],
};

const experience = {
  title: "My Experience",
  description: "",
  items: [
    {
      company: "Prosoft Informatics Pvt Ltd",
      position: "Flutter Developer",
      duration: "May 2025 - Pres*",
      skills: "Flutter, Dart, Firebase, APIs, Nodejs",
    },
    {
      company: "LawCrust Global Consultancy",
      position: "Flutter Developer Intern",
      duration: "Jan 2025 - May 2025",
      skills: "Flutter, Dart, Firebase, APIs, Nodejs",
    },
    {
      company: "Jio Platforms Limited",
      position: "Frontend Dev Intern",
      duration: "Jan 2024 - May 2024",
      skills: "HTML, CSS, JS, React, APIs",
    },
    {
      company: "IEEE-PCE(Student Chapter)",
      position: "Joint Tech Head",
      duration: "Apr 2023 - Apr 2024",
      skills: "Leadership, Teamwork, Team-Management",
    },
    {
      company: "IEEE-PCE(Student Chapter)",
      position: "Tech team Volunteer",
      duration: "Sept 2022 - Mar 2023",
      skills: "Google-forms, Teamwork, Data-Handling, Workshops",
    },
  ],
};

const education = {
  title: "My Education",
  description: "",
  items: [
    {
      board: "BTech in Electronics and Computer Science",
      institute: "Pillai College of Engineering",
      duration: "Nov 2020 - May 2024",
      grade: "8.09/10",
    },
    {
      board: "HSC - Central Board of Secondary Education",
      institute: "DAV Public School New Panvel",
      duration: "Jun 2018 - Apr 2020",
      grade: "75.4%",
    },
    {
      board: "SSC - Central Board of Secondary Education",
      institute: "DAV Public School New Panvel",
      duration: "Mar 2005 - Apr 2018",
      grade: "88.4%",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      icon: <IoLogoHtml5 />,
      name: "HTML",
    },
    {
      icon: <IoLogoCss3 />,
      name: "CSS",
    },
    {
      icon: <IoLogoJavascript />,
      name: "Javascript",
    },
    {
      icon: <SiReact />,
      name: "React js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <TbDatabase />,
      name: "SQL",
    },
    {
      icon: <TbFileTypeXml />,
      name: "XML",
    },
    {
      icon: <LuFileJson />,
      name: "NoSQL",
    },
    {
      icon: <TbApi />,
      name: "RESTful API",
    },
    {
      icon: <IoLogoNodejs />,
      name: "Node js",
    }
  ],
};

const certificates = {
  title: "My Credentials",
  description: "",
  certify: [
    {
      organisation: "Udemy",
      title: "Android 14 and Kotlin Development",
      duration: "Sept 2024 - Pres",
      skills: "Kotlin, Firebase, APIs",
    },
    {
      organisation: "Great Learning",
      title: "My SQL Basics",
      duration: "Oct 2024 - Nov 2024",
      skills: "SQL",
    },
    {
      organisation: "Great Learning",
      title: "Python MySQL",
      duration: "Nov 2024 - Nov 2024",
      skills: "Python, MySQL",
    },
    {
      organisation: "Great Learning",
      title: "Introduction to JavaScript",
      duration: "Nov 2024 - Nov 2024",
      skills: "Javascript",
    },
    {
      organisation: "Great Learning",
      title: "Frontend Development - CSS",
      duration: "Nov 2024 - Nov 2024",
      skills: "CSS",
    },
    {
      organisation: "Great Learning",
      title: "Frontend Development - HTML",
      duration: "Nov 2024 - Nov 2024",
      skills: "HTML",
    },
    {
      organisation: "Great Learning",
      title: "Flutter Basics",
      duration: "Oct 2024 - Nov 2024",
      skills: "Flutter",
    },
    {
      organisation: "Udemy",
      title: "Flutter Masterclass",
      duration: "December 2024 - January 2025",
      skills: "Flutter, Firebase, APIs",
    },
    {
      organisation: "Udemy",
      title: "Flutter and Dart",
      duration: "July 2023 - Sept 2024",
      skills: "Flutter, Firebase, APIs",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center min-h-[80vh] py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certify">Certificaton</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="mx-auto text-white/60 max-w-[600px] xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-accent">{item.fieldname}</span>
                        <span className="text-lg">{item.fieldvalue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="experience"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="mx-auto text-white/60 max-w-[600px] xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[275px] min-h-[5px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 py-2">
                            <span className="text-accent text-base">
                              <MdOutlineWork />
                            </span>
                            <p className="text-white text-sm">
                              {item.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-accent text-sm">Skill:</span>
                            <p className="text-white text-sm">{item.skills}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="education"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="mx-auto text-white/60 max-w-[600px] xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[55px] text-center lg:text-left">
                            {item.board}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="text-accent text-3xl">
                              <MdSchool />
                            </span>
                            <p className="text-white/60 text-base">
                              {item.institute}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-accent text-base">
                              Grade:
                            </span>
                            <p className="text-white text-base">{item.grade}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="skills"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{skills.title}</h3>
                <p className="mx-auto text-white/60 max-w-[600px] xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider duration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                                <div className="flex text-5xl group-hover:text-accent tranisition-all duration-300">
                                  {skill.icon}
                                </div>
                                <div className="flex text-lg text-accent">
                                  {skill.name}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white font-bold text-slate-950">
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="certify"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{certificates.title}</h3>
                <p className="mx-auto text-white/60 max-w-[600px] xl:mx-0">
                  {certificates.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {certificates.certify.map((certify, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {certify.duration}
                          </span>
                          <h3 className="text-lg max-w-[260px] min-h-[55px] text-center lg:text-left">
                            {certify.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="text-accent text-2xl">
                              <TbCertificate />
                            </span>
                            <h3 className="text-white/60 text-base">
                              {certify.organisation}
                            </h3>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-accent text-base">
                              Skills:
                            </span>
                            <p className="text-white text-sm">
                              {certify.skills}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
