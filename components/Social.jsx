import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaBitbucket,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const socials = [
  {
    name: "Github",
    icon: <FaGithub />,
    path: "https://github.com/DarkWizardCK-24",
  },
  {
    name: "Bitbucket",
    icon: <FaBitbucket />,
    path: "https://bitbucket.org/dark_wizard/workspace/overview/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    path: "",
  },
  {
    name: "Linktree",
    icon: <SiLinktree />,
    path: "https://linktr.ee/DarkWizard_CK",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <TooltipProvider key={index} duration={100}>
            <Tooltip>
              <Link href={item.path} className={iconStyles}>
                <TooltipTrigger>
                  {item.icon}
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{item.name}</p>
                </TooltipContent>
              </Link>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default Social;
