import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";

const Home = () => {
  return (
    <section className = "h-full">
        <div className = "container mx-auto h-full">
          <div className = "flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            
            {/* Text */}
            <div className = "text-center xl:text-left">
              <span className = "text-xl">Full Stack Developer</span>

              <h1 className = "h1 mb-6">
                Hello I'm <br /> 
                <span className = "text-[#00ff99]">Dharmendra Kumar Yadav</span>
              </h1>

              <p className = "max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experience and I am proficient in various programming language and technologies
              </p>

              {/* Button and Socials */}
              <div className = "flex flex-col xl:flex-row items-center gap-8">
                <Button 
                  variant = "outline"
                  size = "lg"
                  className = "uppercase flex items-center gap-2">
                    <span>Download CV</span>
                    <FiDownload />
                </Button>
                <div className = "mb-8 xl:mb-0">
                  <Social />
                </div>
              </div>

            </div>

            {/* Photo */}
            <div>
              Photo
            </div>

          </div>
        </div>
    </section>
    
  );
};

export default Home;