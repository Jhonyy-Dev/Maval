import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "@/App.css";

const testimonialsArray = [
  {
    name: "Carlos Mendoza",
    img: "https://shadcnblocks.com/images/block/avatar-1.webp",
    text: "Thanks to their team, my business now has a modern and functional online store. Highly recommended!",
    category: "E-Commerce",
  },
  {
    name: "Lucia Fernandez",
    img: "https://shadcnblocks.com/images/block/avatar-2.webp",
    text: "The invoicing system they developed for my company is fast and efficient. It saves us a lot of time.",
    category: "Business Software",
  },
  {
    name: "Jose Rios",
    img: "https://shadcnblocks.com/images/block/avatar-3.webp",
    text: "My landing page looks amazing. I increased my clients thanks to their design and SEO optimization.",
    category: "Web Design",
  },
  {
    name: "Andrea Gomez",
    img: "https://shadcnblocks.com/images/block/avatar-4.webp",
    text: "Their technical support is excellent, they always respond quickly and solve any issue with my website.",
    category: "Tech Support",
  },
];

function Testimonios() {
  return (
    <section className="py-16  overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="lg:text-4xl text-3xl font-mono text-[#000000]">
          <span className="underline-decoration">What Our Clients Say</span>
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Businesses and entrepreneurs trust us.
        </p>
      </div>

      {/* Infinite carousel */}
      <div className="relative flex overflow-hidden mt-8">
        <div className="flex w-max animate-marquee space-x-6">
          {testimonialsArray.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
          {testimonialsArray.map((testimonial, index) => (
            <TestimonialCard key={index + testimonialsArray.length} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonialsArray)[0] }) {
  return (
    <Card className="flex-shrink-0 flex flex-col items-center gap-4 w-[320px] p-6 shadow-xl rounded-2xl border border-gray-200">
      <div className="flex items-center w-full gap-3">
        <Avatar className="size-14">
          <AvatarImage src={testimonial.img} />
          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
        </Avatar>
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
          <p className="text-sm text-[#564FCC] font-medium">{testimonial.category}</p>
        </div>
      </div>
      <div className="px-4 text-center">
        <p className="text-md italic text-gray-600">"{testimonial.text}"</p>
      </div>
    </Card>
  );
}

export default Testimonios;
