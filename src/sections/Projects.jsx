import milestoneProject1 from "../assets/milestone-project1.png";
import milestoneProject2 from "../assets/milestone-project2.png";
import thebig1Project1 from "../assets/thebig1-project1.png";
import instagramProject1 from "../assets/instagram-project1.mp4";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowUpRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Instagram Post - Milestone Financial Planning , LLC.",
      description: "Example from a self-run campaign to increase visibility and engagement for the business, this social media post was created in Canva and published to Instagram",
      image: milestoneProject1,
      link: "https://www.instagram.com/p/DSSx0hEjTFS/",
      tags: ["Meta Business Suite", "Project Management", "Social Media", "Analytics and Reporting", "Hashtags"],
    },
    {
      title: "Animated Graphic - Milestone Financial Planning, LLC.",
      description: "Repeating animated graphic created to help display the hidden costs associated with health insurance.",
      video: instagramProject1,
      link: "https://www.instagram.com/p/DRnN7chjcR3/",
      tags: ["Animation", "Video Editing", "Instagram", "Social Media", "Research and Analysis"],
    },
    {
      title: "Facebook Post - Milestone Financial Planning, LLC. ",
      description: "Facebook post created in Canva to increase brand visibility as well as highlight the services offered by the company",
      image: milestoneProject2,
      link: "https://www.facebook.com/photo?fbid=1387851259708144&set=a.621127333047211",
      tags: ["Content Creation", "Facebook", "Graphic Design", "Social Media", "Advertising"],
    },
    {
      title: "Facebook Post - The Big 1 Ice Cream Stand",
      description: "Post created in Canva to remind customers of a relevant \"holiday\" and drive visits to the business.",
      image: thebig1Project1,
      link: "https://www.facebook.com/photo?fbid=1312853994181579&set=a.365711638895824",
      tags: ["Facebook", "Canva", "Design", "Social Media", "Brand Awareness"],
    },
  ];

  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      {/* Background Accents / Glow */}
      <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10 stagger-fade-in">
        <div className="section-header text-center mx-auto max-w-3xl mb-16 space-y-5">
          <span className="text-secondary-foreground text-md font-medium uppercase tracking-wider">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground"> Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p className="text-muted-foreground">
            A selection of recent projects that I've worked on, from Facebook posts to animated videos, showcasing my skills and experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card-hover glass rounded-2xl overflow-hidden glow-border block hover:opacity-90 transition-opacity relative"
            >
              <div className="aspect-video flex items-center justify-center overflow-hidden relative">
                <div className="project-media-zoom w-full h-full relative">
                  {project.video ? (
                    <video src={project.video} className="w-full h-full object-contain object-center" muted loop autoPlay playsInline />
                  ) : (
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain object-center" />
                  )}
                </div>
                {/* Overlay icon: link only; visibility via CSS when card is hovered */}
                <div
                  aria-hidden
                  className="project-card-overlay absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-overlay-icon pointer-events-auto inline-flex items-center justify-center rounded-full"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'var(--color-card)',
                      color: 'var(--color-foreground)',
                      boxShadow: 'none',
                      transform: 'scale(1)',
                      transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const s = e.currentTarget.style;
                      s.backgroundColor = 'var(--color-primary)';
                      s.color = 'var(--color-primary-foreground)';
                      s.boxShadow = '0 0 0 2px rgba(255,255,255,0.5), 0 0 16px rgba(53, 104, 103, 0.4)';
                      s.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      const s = e.currentTarget.style;
                      s.backgroundColor = 'var(--color-card)';
                      s.color = 'var(--color-foreground)';
                      s.boxShadow = 'none';
                      s.transform = 'scale(1)';
                    }}
                  >
                    <ArrowUpRight size={24} strokeWidth={2} />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between project-card-title-row">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-title-link flex-1 min-w-0 mr-2"
                  >
                    <h3 className="project-card-title text-xl font-semibold mb-2">{project.title}</h3>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-arrow-link inline-flex shrink-0"
                  >
                    <ArrowUpRight className="project-card-arrow inline-block transition-all duration-300" size={24} strokeWidth={2} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag text-xs px-2 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="src\assets\Yudkin Resume March 2026.pdf" download>
            <AnimatedBorderButton>
              View All Work
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};