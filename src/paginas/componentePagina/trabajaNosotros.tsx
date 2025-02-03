import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomIn,
} from "lucide-react";

const reasons = [
  {
    title: "Quality",
    description:
      "We ensure the highest standards in our products and services, guaranteeing customer satisfaction.",
    icon: <ZoomIn className="size-6" />,
    bgColor: "bg-blue-200 text-blue-700",
  },
  {
    title: "Experience",
    description:
      "Our team of professionals has years of industry experience, ready to provide the best solutions.",
    icon: <BarChartHorizontal className="size-6" />,
    bgColor: "bg-green-200 text-green-700",
  },
  {
    title: "Support",
    description:
      "We are always available to answer your questions and provide assistance, ensuring a worry-free experience.",
    icon: <CircleHelp className="size-6" />,
    bgColor: "bg-yellow-200 text-yellow-700",
  },
  {
    title: "Innovation",
    description:
      "We use cutting-edge technology and innovative methodologies to deliver efficient and tailored solutions.",
    icon: <WandSparkles className="size-6" />,
    bgColor: "bg-purple-200 text-purple-700",
  },
  {
    title: "Results",
    description:
      "We focus on generating real impact, providing strategies and products that meet your expectations and goals.",
    icon: <Layers className="size-6" />,
    bgColor: "bg-orange-200 text-orange-700",
  },
  {
    title: "Efficiency",
    description:
      "We optimize every process to deliver speed and quality without compromising excellence.",
    icon: <BatteryCharging className="size-6" />,
    bgColor: "bg-teal-200 text-teal-700",
  },
];

const Razones = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl text-[#564FCC]">
            Why Work With Us?
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col">
              <div
                className={`mb-5 flex size-16 items-center justify-center rounded-full text-white ${reason.bgColor}`}
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
