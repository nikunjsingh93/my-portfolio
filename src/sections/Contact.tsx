import { links } from "../content";
export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="shell">
        <p className="eyebrow">04 / LET’S CONNECT</p>
        <div className="contact-heading">
          <h2 id="contact-title">
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>
          <a
            className="contact-circle"
            href="mailto:nikunj.singh@live.com"
            aria-label="Email Nikunj Singh"
          >
            ↗
          </a>
        </div>
        <div className="contact-bottom">
          <p>
            Have a role, a project, or a good idea?
            <br />
            I’d love to hear about it.
          </p>
          <div>
            <a href="mailto:nikunj.singh@live.com">nikunj.singh@live.com ↗</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            {links.resume && (
              <a href={`${import.meta.env.BASE_URL}${links.resume}`} download>
                Résumé ↓
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
