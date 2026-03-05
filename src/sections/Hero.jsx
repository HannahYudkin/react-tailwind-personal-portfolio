import { useMemo } from "react";
import { ArrowRight, Linkedin, Github, Mail, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";


const skills = [
  "Content Creation",
  "Web Design",
  "Social Media Strategy",
  "Facebook",
  "Customer Service Excellence",
  "Instagram",
  "Canva",
  "Adobe Creative Suite",
  "Brand Messaging",
  "Microsoft Office",
  "Meta Business Suite",
  "LinkedIn",
  "SEMRush",
  "Salesforce",
  "Graphic Design",
  "HTML/CSS/JavaScript",
  "Series 7/63 Certified",
];

export const Hero = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => {
        const range = (min, max) => min + Math.random() * (max - min);
        return {
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: range(3, 15),
          dx1: range(-30, 30),
          dy1: range(-30, 30),
          dx2: range(-30, 30),
          dy2: range(-30, 30),
          dx3: range(-30, 30),
          dy3: range(-30, 30),
          duration: 15 + Math.random() * 20,
          delay: Math.random() * 5,
        };
      }),
    []
  );

  // Duplicate skills array for seamless infinite scroll
  const duplicatedSkills = useMemo(() => {
    // Duplicate 2 times - when animation reaches 50%, it loops seamlessly back to 0%
    return [...skills, ...skills];
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pb-10">
      {/* Background  */}
      <div className="absolute inset-0">
        <div className="hero-bg-image-mask absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {dots.map(({ id, left, top, size, dx1, dy1, dx2, dy2, dx3, dy3, duration, delay }) => (
            <div
              key={id}
              className="absolute rounded-full opacity-60 bg-[#ffffff]/65"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                "--dx1": `${dx1}px`,
                "--dy1": `${dy1}px`,
                "--dx2": `${dx2}px`,
                "--dy2": `${dy2}px`,
                "--dx3": `${dx3}px`,
                "--dy3": `${dy3}px`,
                animation: `slow-drift ${duration}s ease-in-out ${delay}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Content - two columns, on top of background; start below navbar so it’s not covered */}
        <div id="hero-inner-scroll" className="absolute inset-0 z-10 flex items-start lg:items-center px-6 md:px-12 overflow-y-auto overflow-x-hidden">
          <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 md:gap-4 lg:gap-12 pt-20 pb-4 md:pt-28 md:pb-0 lg:pt-0 lg:pb-0">
            {/* Two columns: left content + profile image */}
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Left column - tagline, headline, and intro stacked vertically */}
              <div className="flex-1 flex flex-col gap-4 stagger-fade-in">
                <span className="text-sm font-semibold text-primary/90 px-3 py-1.5 rounded-full glass w-fit ">
                  <span className="animate-pulse mr-2">❤︎⁠</span>
                  Digital Marketing Specialist • Cosplay & Content Creator
                </span>
                <h1 className="text-5xl font-bold">
                  I specialize in
                  <span className="text-primary glow-text"> telling</span>
                  <br />
                  <span className="text-primary glow-text">stories </span>
                  through <span className="italic font-serif"> digital marketing,</span>
                  <br />
                  <span className="italic font-serif"> design,</span> and
                  <br />
                  <span className="italic font-serif" >handcrafted creations.</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-l">
                  Hi, I'm Hannah Yudkin - I love digital marketing and brand strategy and focus on creating thoughtful, story-driven experiences. My background as a creator informs how I approach brands, content, and audience connection.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" href="#contact">
                    Contact Me <ArrowRight className="w-5 h-5" />
                  </Button>
                  <a href="src\assets\Yudkin Resume March 2026.pdf" download>
                    <AnimatedBorderButton >
                      <Download className="w-5 h-5" />
                      Download Resume
                    </AnimatedBorderButton>
                  </a>

                </div>

                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground mr-2">Follow me:</span>
                  {[
                    { icon: Linkedin, href: "https://linkedin.com/in/hannahyudkin" },
                    { icon: Mail, href: "mailto:HannahYudkin@gmail.com" },
                    { icon: Github, href: "https://github.com/HannahYudkin" },
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="glass inline-flex items-center justify-center ml-2 rounded-full p-2"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Right column - profile image (placeholder) */}
              <div className="relative stagger-fade-in">
                {/* Profile Image  */}
                <div className="relative max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/70 via-transparent to-primary/40 blur-2xl animate-pulse">
                  </div>


                  <div className="relative glass rounded-3xl p-2 glow-border glow-border-animated">
                    <img src="src/assets/profile-image3.png"
                      alt="Hannah Yudkin"
                      className="w-full aspect-[4/5] object-cover rounded-2xl profile-photo" />

                    {/* Floating Badge  */}
                    <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Available for work</span>
                      </div>
                    </div>
                    {/* Stat Badge */}
                    <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                      <div className="text-xl font-bold text-primary">Dual Bachelor's Degrees</div>
                      <div className="text-xs text-muted-foreground">Marketing & Technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section - in flow on mobile/medium so it doesn't overlap profile image */}
            <div className="w-full lg:hidden mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Top Skillsets
              </p>
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {duplicatedSkills.map((skill, idx) => (
                    <div
                      key={`skill-mobile-${idx}`}
                      className="flex-shrink-0 px-8 py-4 cursor-pointer"
                    >
                      <span className="text-xl font-semibold skill-item whitespace-nowrap">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Skills Section - absolute at bottom on large screens only */}
        <div className="absolute bottom-20 left-0 right-0 z-20 hidden lg:block animate-fade-in">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Top Skillsets
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedSkills.map((skill, idx) => (
                <div
                  key={`skill-${idx}`}
                  className="flex-shrink-0 px-8 py-4 cursor-pointer"
                >
                  <span className="text-xl font-semibold skill-item whitespace-nowrap">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator  */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-fade-in hidden md:block">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 scroll-indicator"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};