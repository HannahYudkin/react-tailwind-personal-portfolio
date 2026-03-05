import { ErrorBoundary } from "./components/ErrorBoundary";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />

            <ErrorBoundary>
              <Experience />
            </ErrorBoundary>

            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App
