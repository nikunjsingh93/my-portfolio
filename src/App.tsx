import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Credentials from "./sections/Credentials";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Credentials />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
