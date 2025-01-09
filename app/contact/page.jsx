"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { FaLocationDot, FaLinkedinIn } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <SiGmail />,
    title: "Gmail",
    description: "chaitanyask103@gmail.com",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    description: "Chaitanya Katare",
  },
  {
    icon: <FaLocationDot />,
    title: "Home",
    description: "Mumbai, Maharashtra, India",
  },
];

const Contact = () => {
  const apiKey = process.env.API_KEY
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="order-2 xl:h-[54%] xl:order-none">
            <form className="flex flex-col gap-6 p-10 rounded-xl bg-[#27272c]" onSubmit={onSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate eaque ipsa rem sunt minus cupiditate nulla voluptas pariatur fugit!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" required/>
                <Input type="lastname" placeholder="Last Name" required/>
                <Input type="email" placeholder="Email address" required/>
                <Input type="phone" placeholder="Phone number" required/>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-lg">Select a service</SelectLabel>
                    <SelectItem value="est" className="text-lg">Web Development</SelectItem>
                    <SelectItem value="mst" className="text-lg">Frontend Development</SelectItem>
                    <SelectItem value="lst" className="text-lg">Flutter Development</SelectItem>
                    <SelectItem value="wst" className="text-lg">Android Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Enter your message" />
              <Button size="md" className="max-w-40 text-lg font-bold" type="submit">Send Message</Button>
            </form>
            <span>{result}</span>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272C] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[32px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
