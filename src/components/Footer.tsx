export default function Footer() {
  return (
    <footer className="shell site-footer">
      <a className="wordmark" href="#" aria-label="Back to top">
        Nikunj Singh<span>.</span>
      </a>
      <p>Thoughtfully built. Always evolving.</p>
      <a href="#">Back to top ↑</a>
      <span>© {new Date().getFullYear()} Nikunj Singh</span>
    </footer>
  );
}
