import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome a <span className="text-[#564FCC]" >Maval</span>
            </h1>  
            <p className="mb-8 max-w-[42rem] text-left leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              We transform ideas into innovative digital solutions. 
              From web development to custom applications, 
              We help you take your business to the next level.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#564FCC] text-white px-6 py-3 rounded-[1rem] hover:bg-[#4842a8] transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-[#564FCC] text-[#564FCC] px-6 py-3 rounded-[1rem] hover:bg-[#564FCC] hover:text-white transition-colors">
                Our Services
              </button>
            </div>
          </div>
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <iframe 
              src="/index2.html" 
              className="absolute inset-0 w-full h-full rounded-[1rem]"
              style={{
                border: 'none',
                overflow: 'hidden',
                background: 'transparent'
              }}
              scrolling="no"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
