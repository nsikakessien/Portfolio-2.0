import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gemini Chatbot Clone",
    description:
      "Gemini Clone is a React-based web application that emulates the conversational AI experience of Google's Gemini. It allows users to interact with an AI assistant powered by the Gemini API, providing responses to user prompts in real time.",
    image: "/gemini.PNG",
    tags: ["React", "Gemini API"],
    demoUrl: "https://nsk-gemini-clone.netlify.app/",
    githubUrl: "https://github.com/nsikakessien/Gemini-Clone",
  },
  {
    id: 4,
    title: "Sabi Market",
    description:
      "Sabi Market is a mobile and web-based B2B marketplace designed for fast-moving consumer goods (FMCG). It connects retailers and wholesalers across typically informal markets, offering tools and features to streamline operations and expand access.",
    image: "/sabi.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "React Query"],
    demoUrl: "https://market.sabi.am/",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Trace",
    description:
      "Trace (also stylized as TRACE, short for Technology Rails for African Commodity Exchange) is a digital platform that streamlines the sourcing and export of mineral and agricultural commodities from Africa with a focus on traceability, transparency, and ethical standards.",
    image: "/trace.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    demoUrl: "https://trace.sabi.am/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Job Board",
    description:
      "Job Board is a full-stack application built with Next.js, Typescript, and Postgresql with Prisma ORM. It allows users to post job listings, search for jobs, and apply for positions. The application features user authentication using Github, job filtering, and a responsive design.",
    image: "/jb.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    demoUrl: "https://nsk-job-board.netlify.app/",
    githubUrl: "https://github.com/nsikakessien/Job-Board",
  },
  {
    id: 3,
    title: "Signal Clone",
    description:
      "Signal Clone is a real-time chat application inspired by the Signal messaging app. Built with React Native and Firebase, it allows users to register, log in, create chat rooms, and exchange messages instantly. The app is available for both mobile and web platforms.",
    image: "/sclone.PNG",
    tags: ["React Native", "Firebase", "Expo"],
    demoUrl:
      "https://expo.dev/accounts/nsk_45/projects/SignalClone/builds/7c88b20a-64f2-460d-a7f4-70f9d08a2577",
    githubUrl: "https://github.com/nsikakessien/signal-clone",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/nsikakessien"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
