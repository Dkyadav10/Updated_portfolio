"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num : "01",
    category : "frontend",
    title : "project 1",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil voluptates nisi minus harum cumque nobis delectus, ratione fugit, corrupti assumenda atque aspernatur dolores nam quia veniam doloremque! Vel, corporis.",
    stack : [
    {name : "Html 5"}, { name : "Css 3"}, { name : "JavaScript" }], 
    image : '/assets/work/thumb1.png',
    live : "",
    github : "",  
  },

  {
    num : "02",
    category : "fullstack",
    title : "project 2",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil voluptates nisi minus harum cumque nobis delectus, ratione fugit, corrupti assumenda atque aspernatur dolores nam quia veniam doloremque! Vel, corporis.",
    stack : [
    {name : "Next.js"}, { name : "Tailwind.css"}, { name : "Node.js" }], 
    image : '/assets/work/thumb2.png',
    live : "",
    github : "",  
  },

  {
    num : "03",
    category : "frontend",
    title : "project 3",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil voluptates nisi minus harum cumque nobis delectus, ratione fugit, corrupti assumenda atque aspernatur dolores nam quia veniam doloremque! Vel, corporis.",
    stack : [{name : "Next.js"}, { name : "Tailwind.css"}], 
    image : '/assets/work/thumb3.png',
    live : "",
    github : "",  
  },

  {
    num : "04",
    category : "fullstack",
    title : "project 4",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil voluptates nisi minus harum cumque nobis delectus, ratione fugit, corrupti assumenda atque aspernatur dolores nam quia veniam doloremque! Vel, corporis.",
    stack : [
    {name : "Next.js"}, { name : "Tailwind.css"}, { name : "Node.js" }], 
    image : '/assets/work/thumb4.png',
    live : "",
    github : "",  
  },

  {
    num : "05",
    category : "fullstack",
    title : "project 5",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil voluptates nisi minus harum cumque nobis delectus, ratione fugit, corrupti assumenda atque aspernatur dolores nam quia veniam doloremque! Vel, corporis.",
    stack : [
    {name : "Next.js"}, { name : "Tailwind.css"}, { name : "Node.js" }], 
    image : '/assets/work/thumb5.png',
    live : "",
    github : "",  
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update poject state based on current slide index
    setProject(projects[currentIndex]);

  };

  return (
   <motion.section 
   initial ={{opacity : 0}} 
   animate={{opacity : 1}} 
   className= "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">

    <div className = "container mx-auto">
      <div className = "flex flex-col xl:flex-row xl:gap-[30px]">

        <div className = "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className = "flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className= "text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
            
              {/* Project Category */}
              <h2 className = "text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize">
                {project.category} 
              </h2>

              {/* Project Description */}
              <p className = "text-white/60">{project.description}</p>

              {/* Stack */}
              <ul className = "flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                  <li key ={index} className= "text-xl text-[#00ff99]">
                    {item.name},

                    {/* remove the last comma */}

                    {index !== project.stack.length - 1 && " ,"}
                  </li>
                  )
                })}
              </ul>
              
              {/*border */}
              <div className = "border border-white/20">

              {/* buttons */}
              <div className = "flex items-center gap-4">

                {/* live Project button  */}
                <Link href = {project.live}>
                  <TooltipProvider delayDuration = {100}>
                    <Tooltip>
                      <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">

                        <BsArrowUpRight  className = " text-white text-3xl group-hover:text-[#00ff99]"/>
                      
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github Project button */}
                <Link href = {project.github}>
                  <TooltipProvider delayDuration = {100}>
                    <Tooltip>
                      <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">

                        <BsGithub className = " text-white text-3xl group-hover:text-[#00ff99]"/>
                      
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Github repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div className = "w-full xl:w-[50%]">
          <Swiper 
            spaceBetween = {30}
            slidesPerView = {1}
            className = "xl:h-[520px] mb-12"
            onSlideChange = {handleSlideChange}
          >
            {projects.map((project, index) => {
              return (
              <SwiperSlide key = {index} className = "w-full">
                <div className = "h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                  {/* overlay */}
                  <div className = "absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                    
                  </div>

                  {/* image */}
                  <div className = "relative w-full h-full">
                    <Image
                      src = {project.image}
                      fill
                      className = "object-cover"
                      alt=""
                    />
                  </div>
                </div> 
              </SwiperSlide>
              );
            })}
            {/* slider button */}
            <WorkSliderBtns  containerStyles = "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnStyles = "bg-[#00ff99] hover:bg-[#00ff99]-hover text-[#1c1c22] text-[22px] w-[44px]h-[44px] flex justify-center items-center transition-all" />
          </Swiper>
        </div>
      </div>
    </div>
   </motion.section>
  );
};

export default Work;