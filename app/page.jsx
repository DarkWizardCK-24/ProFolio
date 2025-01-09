import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Hi I'm <br />
              <span className="text-accent">Chaitanya Katare</span>
            </h1>
            <p className="mb-9 text-white/80 max-w-[500px]">
              The Dark <span className="text-accent">Wizãrd</span>.
              I'm a proficient digital sorcerer, wielding the power of 
              code to craft breathtaking online experiences. My spells 
              are forged from a potent blend of skills and experience.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline">
                <span>Download CV </span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center
                items-center text-accent text-2xl hover:bg-accent hover:text-primary 
                hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
