import { Briefcase, Brain, BookOpen, Handshake } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Creative Maker & Entrepreneurial Thinker",
    description: "A hands-on maker with a passion for creating, from websties to sewing and cosplay, to building creative side projects. I bring an entrepreneurial, creative-first mindset to everything I do."
  },
  {
    icon: Brain,
    title: "Strategic & Data-Driven",
    description: "I combine creative thinking with strategic marketing expertise, using data to inform decisions and drive results."
  },
  {
    icon: BookOpen,
    title: "Brand Storytelling & Visual Content Creation",
    description: "Strong background in creating branded visual content, including graphics, short-form video, and promotional materials — with an eye for storytelling and design."
  },
  {
    icon: Handshake,
    title: "Cross-Disciplinary: Marketing + Technology",
    description: "Dual-degree professional with a background in marketing and technology, with a passion for creating digital experiences that are both functional and beautiful."
  },
]

export const About = () => {
  return <section id="about" className="py-10 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10 stagger-fade-in">
      {/* Left Column  */}
      <div className="grid lg:grid-col-2 gap-16 items-center">
        <div className="section-header space-y-5">
          <span className="text-secondary-foreground text-md font-medium uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
            Imagination meets intention
            <span className="font-serif italic font-normal text-white"> in strategy, design, and execution</span>
          </h2>
          <p className="text-muted-foreground">
            I'm a creative professional with a background in both marketing and technology, and I'm drawn to work that's engaging, honest, and relatable. I enjoy the challenge of taking complex ideas and implementing them in a way that they become clear stories that make sense to real people.         </p>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <p>
            Outside of work, I spend my time creating with my hands. I love sewing, cosplay and design, and creative side projects that let me experiment, learn, and bring unthinkable ideas into the physical world. These hobbies are where I recharge. They push me to constantly raise the bar, to be curious, patient, and comfortable with trial and error, and they remind me that creativity doesn’t have to be perfect to be meaningful.
          </p>
          <p>
            Those two sides of my life naturally overlap in my work. I approach marketing with imagination as well as structure, balancing big ideas with practical execution. I’m at my best in environments that value creativity, that let you learn by doing, and by being in a place where collaboration is pivotal. I’m motivated by building work that feels authentic, expressive, and genuinely useful to the people who use it.
          </p>
        </div>
        <div className="glass rounded-2xl p-6 glow-border">
          <p className="text-lg font-medium text-foreground italic">
            "My mission is to keep creativity at the center of my life while developing work that is imaginative, unique, and intentional, keeping space for both the creative process and the impact of the work itself."
          </p>
        </div>
      </div>
      {/* Right Column - highlights */}

      <div className="grid md:grid-cols-2 gap-6 stagger-fade-in mt-12">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="glass rounded-2xl p-6 glow-border">
            <div className="about-highlight-icon-box w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <highlight.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
            <p className="text-sm text-muted-foreground">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
}