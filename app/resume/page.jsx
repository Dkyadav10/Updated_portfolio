"use client";

import { calcGeneratorDuration } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiDjango, } from "react-icons/si";

// about
const about = {
  title: "About Me",

  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis? Inventore cupiditate maxime sed voluptates. Fugit, cumque quo. Rerum voluptatum itaque iure nulla sunt corporis reiciendis, eaque deserunt accusamus distinctio.",

  info: [ 
    {
      fieldName: "Name",
      fieldValue: "Dharmendra Kumar Yadav"
    },
    {
      fieldName: "Phone",
      fieldValue: "9462490009"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years"
    },
    {
      fieldName: "Linkdin",
      fieldValue: "d-k-yadav-3a49011a3"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "dishantyadav839@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName : "Language",
      fieldValue : "English, Hindi, Kannada"
    },
  ]
};

// Experience
const experience = {
  icon: " /assets/resume/",
  title: "My experience",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum sit saepe, eaque ratione velit possimus impedit ad est nesciunt iste non! Impedit atque ducimus id architecto fuga nisi quia",

  items: [
    {
      company: "Mukundra Toughen Glass",
      position: "Backend + DBMS Intern",
      duration: "2020-2021"
    },
    {
      company: "Mukundra Toughen Glass",
      position: "Backend Developer",
      duration: "2021-2022"
    },
    {
      company: "Aaima Web Solutions",
      position: "Backend Developer",
      duration: "2022-2024"
    },
    {
      company: "Inspiring Wave Infotech",
      position: "Full Stack Developer",
      duration: "2024-2025"
    },
  ],
};

// education
const education = {
  icon: " /assets/resume/",
  title: "My education",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum sit saepe, eaque ratione velit possimus impedit ad est nesciunt iste non! Impedit atque ducimus id architecto fuga nisi quia",

  items: [
    
    {
      institution: "Rajasthan Technical University",
      degree: "Master's Computer Science",
      Duration: "2025-ongoing"
    },

    {
      institution: "Udemy",
      degree: "Full-Stack-Developer",
      Duration: "2023-2024"
    },

    {
      institution: "Online",
      degree : "Programming Course",
      Duration : "2021-2022"
    },

    {
      institution: "CodeAcademy",
      degree: "Backend developer",
      Duration: "2020-2021"
    },

    {
      institution: "Bacherlors of Technology",
      degree: "Aeronautical Engineer",
      Duration: "2016-2020"
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga sequi nostrum voluptates sint pariatur blanditiis suscipit, minus eveniet expedita veniam officia quo eligendi ipsam, esse aspernatur minima numquam molestias",
  skillList : [
    {
      icon: <FaHtml5 />,
      name : "Html 5"
    },
    {
      icon : <FaCss3 />,
      name : "Css 3"
    },
    {
      icon : <FaJs />,
      name : "Javascript"
    },
    {
      icon : <FaReact />,
      name : "react.js"
    },
    {
      icon : <SiNextdotjs />,
      name : "next.js"
    },
    {
      icon : <SiTailwindcss />,
      name : "tailwind.css"
    },
    {
      icon : <FaNodeJs />,
      name : "node.css"
    },
    {
      icon : <FaFigma />,
      name : "figma"
    },
    {
      icon : <SiDjango />,
      name : "Django"
    },
    {
      icon : <SiMysql />,
      name : "Mysql"
    },
    {
      icon : <FaDatabase />,
      name : "RDBMS"
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import { Love_Light } from "next/font/google";


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity:0}}
      animate = {{
        opacity : 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className = "container mx-auto">
          <Tabs defaultValue = "experience" className = "flex flex-col xl:flex-row gap-[60px]">
            
            <TabsList className = "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">

              <TabsTrigger value = "experience"> Experience </TabsTrigger>
              <TabsTrigger value = "education"> Education </TabsTrigger>
              <TabsTrigger value = "skills"> Skills </TabsTrigger>
              <TabsTrigger value = "about"> About Me </TabsTrigger>

            </TabsList>

            {/* content */}
            <div className = "min-h-[70vh] w-full">

              {/* experience */}
              <TabsContent value = "experience" className = "w-full">
                <div className = "flex flex-col gap-[30px] text-center xl:text-left">

                  <h3 className = "text-4xl font-bold">{experience.title}</h3>
                  <p className= "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>

                  <ScrollArea className ="h-[400px]">

                    <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return(
                          
                          <li key={index} className= "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">

                            <span className = "text-[#00ff99]">{item.duration}</span>
                            <h3 className = "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>

                            <div className = "flex items-center gap-3">
                              {/* dot */}
                              <span className = "w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                              <p className = "text-white/60">{item.company}</p>
                            </div>

                          </li>

                        );

                      })}
                    </ul>

                  </ScrollArea>

                </div>
              </TabsContent>

              {/* education */}
              <TabsContent value = "education" className = "w-full">
                <div className = "flex flex-col gap-[30px] text-center xl:text-left">

                  <h3 className = "text-4xl font-bold">{education.title}</h3>
                  <p className= "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>

                  <ScrollArea className ="h-[400px]">

                    <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return(
                          
                          <li key={index} className= "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">

                            <span className = "text-[#00ff99]">{item.Duration}</span>
                            <h3 className = "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>

                            <div className = "flex items-center gap-3">
                              {/* dot */}
                              <span className = "w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                              <p className = "text-white/60">{item.institution}</p>
                            </div>

                          </li>

                        );

                      })}
                    </ul>

                  </ScrollArea>

                </div>
              </TabsContent>

              {/* skills */}
              <TabsContent value = "skills" className = "w-full h-full">
                <div className = "flex flex-col gap-[30px]">
                  <div className = "flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className = "text-4xl font-bold">{skills.title}</h3>
                    <p className="">{skills.description}</p>
                  </div>
                  <ul className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return( 
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            
                            <TooltipTrigger className = "w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className = "text-6xl group-hover:text-[#00ff99] transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <div>
                                <p className="capitalize">{skill.name}</p>
                              </div>
                            </TooltipContent>

                          </Tooltip>
                        </TooltipProvider>
                      </li> 
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              {/* about */}
              <TabsContent 
              value = "about" 
              className = "w-full text-center xl:text-left">

                <div className = "flex flex-col gap-[30px]">
                  <h3 className = "text-4xl font-bold">
                    {about.title}
                  </h3>
                  <p className = "max w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className= "grid grid-cols-1 xl:grid-cols-2 gap-y-8 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index) =>{
                      return (
                        <li key={index} className = "flex items-center justify-center xl:justify-start gap-6">
                          <span className= "text-white/60 gap-20">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

            </div>
          </Tabs>
        </div>
    </motion.div>

  );
};

export default Resume;