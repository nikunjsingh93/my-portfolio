export default function About() {
  return (
    <section
      id="about"
      className="about-section shell section-space"
      aria-labelledby="about-title"
    >
      <div className="about-title">
        <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
        <h2 id="about-title">
          An engineer’s mind.
          <br />
          <em>A maker’s eye.</em>
        </h2>
        <div className="about-note" aria-hidden="true">
          <span>function meets feeling.</span>
          <svg viewBox="0 0 180 55" fill="none">
            <path
              d="M5 12C40 45 114 49 165 13m-18-1 22-5-5 24"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <div className="about-copy">
        <p className="about-lead">
          Hi, I’m Nikunj. I care about how things work—and how they feel to use.
        </p>
        <p>
          For 7+ years, I’ve worked with Angular, React and TypeScript to turn
          complicated requirements into clear, usable interfaces. Outside
          enterprise work, I build and ship my own products: a calmer notes app,
          a film-inspired camera, and tools that keep personal data close to
          home.
        </p>
        <p>
          Photography shows up in the way I think about software, too: pay
          attention to the details, find the right frame, and leave out what
          doesn’t help.
        </p>
        <div className="education">
          <span className="eyebrow">EDUCATION</span>
          <h3>MS, Information Systems</h3>
          <p>Northeastern University</p>
        </div>
        <div className="skills">
          <span className="eyebrow">MY EVERYDAY TOOLKIT</span>
          <p>
            React <span>·</span> Angular <span>·</span> TypeScript{" "}
            <span>·</span> JavaScript
            <br />
            Tailwind CSS <span>·</span> REST APIs <span>·</span> Node.js{" "}
            <span>·</span> Git
          </p>
        </div>
      </div>
    </section>
  );
}
