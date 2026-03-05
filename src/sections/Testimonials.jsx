import { useState } from "react";
import justinMedas from "../assets/justin-medas.jpg";
import bruceAzotea from "../assets/bruce-azotea.jpg";
import jeanneMarquis from "../assets/jeanne-marquis.jpg";
import maxWilliams from "../assets/max-williams.jpg";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Justin Medas",
    title: "Senior Software Engineering Manager, Alkami Technology",
    avatar: justinMedas,
    quote: "Hannah brings diverse experience, thoughful perspective, and infectous positive attitude to every team she joins. She's someone who adds real value while making the work environment better for everyone.",
  },
  {
    name: "Bruce Azotea",
    title: "Head of Security, University of New Hampshire - Manchester Campus",
    avatar: bruceAzotea,
    quote: "Hannah is a highly capable individual with unique skillsets who can offer creative and effective solutions in any environment.",
  },
  {
    name: "Jeanne Marquis",
    title: "Owner, The Big 1 Ice Cream Stand",
    avatar: jeanneMarquis,
    quote: "Hannah's creative ideas have produced new products and seasonal specials that have increased revenue. Her outgoing personality is bright and engaging. Hannah is an asset to any company!",
  },
  {
    name: "Max Williams",
    title: "Head of Investment Manager Business Development, AppFolio",
    avatar: maxWilliams,
    quote: "Hannah has a rare ability to balance creativity with professionalism. She understands how to communicate with audiences authentically and consistently looked for ways to improve customer experience and messaging.",
  },
];

export const Testimonials = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }

  const handlePreviousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section
      id="testimonials"
      className="py-10 relative"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="section-header mx-auto max-w-3xl mb-16 space-y-5 stagger-fade-in">
          <span className="text-secondary-foreground text-md font-medium uppercase tracking-wider block">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
            Kind Words from{" "}
            <span className="font-serif italic font-normal text-white">amazing people.</span>
          </h2>
        </div>

        {/* Tesimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border stagger-fade-in text-left">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex justify-center items-center animate-float">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 text-left">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20 shrink-0" />
                <div className="flex flex-col">
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].title}</div>
                </div>
              </div>
            </div>
            {/* Testimonial Navigations */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={handlePreviousTestimonial} className="glass p-3 rounded-full hover:bg-primary/10 transition-all hover:text-primary">
                <ChevronLeft />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, ind) => (
                  <button
                    key={ind}
                    onClick={() => setCurrentTestimonial(ind)}
                    className={`h-2 rounded-full transition-all duration-300 ${ind === currentTestimonial ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>
              <button onClick={handleNextTestimonial} className="glass p-3 rounded-full hover:bg-primary/10 transition-all hover:text-primary">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>




        {/* <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm"
            >
              <p className="text-secondary-foreground/90 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-secondary-foreground/70">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};