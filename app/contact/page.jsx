"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
  
const info = [
  {
    icon : <FaPhoneAlt />,
    title : "Phone",
    description : "9462490009"
  },
  {
    icon : <FaEnvelope />,
    title : "Email",
    description : "dishantyadav839@gmail.com"
  },
  {
    icon : <FaMapMarkerAlt />,
    title : "Address",
    description : "210-B R.K Puram kota Rajasthan"
  },
];

import { motion } from "framer-motion"

const contact = () => {
  return (
    <motion.section 
      initial = {{ opacity : 0 }} 
      animate = {{
        opacity : 1,
        transition : { delay : 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className ="py-6"
    >
      <div className="container mx-auto">
        <div container="flex flex-col xl:flex-row gap-[30px]">

          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-[#00ff99]">let's work together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus porro soluta eligendi accusantium expedita deserunt necessitatibus commodi tempora optio, ea veniam laboriosam labore placeat vel quaerat exercitationem est suscipit?
              </p>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input type="firstname" placeholder="Firstname" />
                <input type="lastname" placeholder="Lastname" />
                <input type="email" placeholder="Email Address" />
                <input type="phone" placeholder="Phone number" />

              </div>

              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>             
                  <SelectGroup>
                    <SelectLabel>
                      <SelectItem value = "est">
                        Web Development
                      </SelectItem>
                      <SelectItem value = "cst">
                        UI/UX Design
                      </SelectItem>
                      <SelectItem value = "mst">
                        Logo Design
                      </SelectItem>
                      <SelectItem value = "mst">
                        Databse Development
                      </SelectItem>
                    </SelectLabel>
                  </SelectGroup>
                </SelectContent>  

              </Select>

              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                placeholde="Type your message here" 
              />

              {/* btn */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#00ff99] rounded-md flex items-center justify-center">

                      <div className="text-[28px]">{item.icon}</div>

                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
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

export default contact;