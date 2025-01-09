"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of Experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 14,
    text: "Skills used",
  },
  {
    num: 9,
    text: "Licensed Credential",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                <CountUp
                  end={item.num}
                  delay={2}
                  duration={5}
                  className="text-4xl xl:text-6xl font-bold"
                />
                <p className={`${item.text.length < 12 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
