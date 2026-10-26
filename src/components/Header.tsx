import { useEffect, useState } from "react";
import { links } from "../content";
import Arrow from "./Arrow";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header shell">
      <a className="wordmark" href="#" aria-label="Nikunj Singh, back to top">
        Nikunj Singh<span>.</span>
      </a>
      <button
        className="menu-toggle"
        aria-controls="main-nav"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Close −" : "Menu +"}
      </button>
      <nav
        id="main-nav"
        className={menuOpen ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
      >
        {["Work", "Experience", "About"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a
          href="#contact"
          className="nav-contact"
          onClick={() => setMenuOpen(false)}
        >
          Let’s talk <Arrow />
        </a>
      </nav>
    </header>
  );
}
