import { ProjectCard } from "@/components/ProjectCard";
import '@/styles/globals.css';

const projects = [
  {
    title: "EMMPO Landing Page",
    description: "An eye-catching landing page with a magazine-style layout, featuring stunning UI/UX design. Incorporates interactive elements, sleek typography, and a visually immersive experience that captivates visitors.",
    imageUrl: "https://assets.awwwards.com/awards/submissions/2025/01/677fe7f370572772058033.png",
    date: "20 Jan 2023",
    likes: 128,
    comments: 24,
    projectUrl: "https://emmpo.com/",
    avatarUrl: "https://img.freepik.com/premium-vector/professional-logo-design_695730-12.jpg",
    companyName: "Maval Tech",
    mood: "Feelin' fresh"
  },
  {
    title: "Portfolio Website",
    description: "An exquisite watch website featuring impeccable UI/UX design. Showcases our expertise in web development with seamless navigation, stunning visuals, and interactive product displays that elevate the user experience.",
    imageUrl: "https://assets.awwwards.com/awards/sites_of_the_day/2024/04/g3-2.jpg",
    date: "20 Jan 2023",
    likes: 256,
    comments: 42,
    projectUrl: "https://www.wrk-timepieces.com/products/acf-01",
    avatarUrl: "https://img.freepik.com/premium-vector/professional-logo-design_695730-12.jpg",
    companyName: "Maval Tech",
    mood: "Feelin' fresh"
  },
  {
    title: "Task Management App",
    description: "Experience our spectacular hamburger website with unique finishes, where outdated designs are a thing of the past. We now showcase the best contemporary designs, offering an immersive journey through our mouthwatering menu and stylish ambiance.",
    imageUrl: "https://assets.awwwards.com/awards/submissions/2025/01/6793804e6044e239246066.png",
    date: "20 Jan 2023",
    likes: 184,
    comments: 36,
    projectUrl: "https://www.prettypatty.ch",
    avatarUrl: "https://img.freepik.com/premium-vector/professional-logo-design_695730-12.jpg",
    companyName: "Maval Tech",
    mood: "Feelin' fresh"
  },
  {
    title: "Social Media Dashboard",
    description: "An innovative eyewear website showcasing a stunning UI/UX design. Features an immersive product display, virtual try-on technology, and seamless browsing experience for our discerning clients.",
    imageUrl: "https://assets.awwwards.com/awards/submissions/2025/01/6787ffae82411779408608.png",
    date: "20 Jan 2023",
    likes: 312,
    comments: 58,
    projectUrl: "https://www.eyebot.co/",
    avatarUrl: "https://img.freepik.com/premium-vector/professional-logo-design_695730-12.jpg",
    companyName: "Maval Tech",
    mood: "Feelin' fresh"
  }
];

const Projects = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8">
          <h2 className="mb-2 text-center font-mono lg:text-4xl text-3xl text-[#000000]">
            <span className="underline-decoration">Projects</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
