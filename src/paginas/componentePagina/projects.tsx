import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js. Features include user authentication, product management, and secure payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
    date: "20 Jan 2023",
    likes: 128,
    comments: 24,
    projectUrl: "https://example.com/ecommerce",
    avatarUrl: "https://img.freepik.com/premium-vector/professional-logo-design_695730-12.jpg",
    companyName: "Maval Tech",
    mood: "Feelin' fresh"
  },
  {
    title: "Portfolio Website",
    description: "A creative portfolio website showcasing various projects and skills. Built with React and Three.js for interactive 3D elements.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    date: "20 Jan 2023",
    likes: 256,
    comments: 42,
    projectUrl: "https://example.com/portfolio",
    avatarUrl: "https://img.freepik.com/premium-vector/professional-logo-design_695730-12.jpg",
    companyName: "Maval Tech",
    mood: "Feelin' fresh"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Features include task assignment, progress tracking, and team collaboration tools.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "20 Jan 2023",
    likes: 184,
    comments: 36,
    projectUrl: "https://example.com/taskmanager",
    avatarUrl: "https://img.freepik.com/premium-vector/professional-logo-design_695730-12.jpg",
    companyName: "Maval Tech",
    mood: "Feelin' fresh"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard. Includes analytics, content scheduling, and engagement tracking features.",
    imageUrl: "https://design4users.com/wp-content/uploads/2021/03/web-design-ecommerce.png",
    date: "20 Jan 2023",
    likes: 312,
    comments: 58,
    projectUrl: "https://example.com/dashboard",
    avatarUrl: "https://img.freepik.com/premium-vector/professional-logo-design_695730-12.jpg",
    companyName: "Maval Tech",
    mood: "Feelin' fresh"
  }
];

const Projects = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
