import { Avatar, AvatarImage } from "@/components/ui/avatar";

const reasons = [
  {
    title: "Quality",
    description:
      "We guarantee the highest standards in our products and services, ensuring customer satisfaction.",
    icon: <Avatar className="size-14 rounded-full overflow-hidden"><AvatarImage src="/src/assets/images/logo.webp" alt="Logo" className="object-cover w-full h-full" /></Avatar>,
  },
  {
    title: "Experience",
    description:
      "Our team of professionals has years of industry experience, ready to provide the best solutions.",
    icon: <Avatar className="size-14 rounded-full overflow-hidden"><AvatarImage src="/src/assets/images/logo.webp" alt="Logo" className="object-cover w-full h-full" /></Avatar>,
  },
  {
    title: "Support",
    description:
      "We are always available to answer your questions and provide assistance, ensuring a worry-free experience.",
    icon: <Avatar className="size-14 rounded-full overflow-hidden"><AvatarImage src="/src/assets/images/logo.webp" alt="Logo" className="object-cover w-full h-full" /></Avatar>,
  },
  {
    title: "Innovation",
    description:
      "We use cutting-edge technology and innovative methodologies to deliver efficient and tailored solutions.",
    icon: <Avatar className="size-14 rounded-full overflow-hidden"><AvatarImage src="/src/assets/images/logo.webp" alt="Logo" className="object-cover w-full h-full" /></Avatar>,
  },
  {
    title: "Results",
    description:
      "We focus on generating real impact, providing strategies and products that meet your expectations and goals.",
    icon: <Avatar className="size-14 rounded-full overflow-hidden"><AvatarImage src="/src/assets/images/logo.webp" alt="Logo" className="object-cover w-full h-full" /></Avatar>,
  },
  {
    title: "Efficiency",
    description:
      "We optimize every process to deliver speed and quality without compromising excellence.",
      icon: <Avatar className="size-14 rounded-full overflow-hidden"><AvatarImage src="/src/assets/images/logo.webp" alt="Logo" className="object-cover w-full h-full" /></Avatar>,
  },
];

const Razones = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center font-mono lg:text-4xl text-3xl text-[#000000]">
            <span className="underline-decoration">Why Work With Us?</span>
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col">
              <div
                className={`mb-5 flex size-12 items-center justify-center rounded-full text-white 
                `}
              >
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Razones;
