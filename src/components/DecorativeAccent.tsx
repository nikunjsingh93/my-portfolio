import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useState,
  type ReactNode,
} from "react";
const Accent = lazy(() => import("../Accent"));
class DecorationBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function DecorativeAccent() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setEnabled(!motion.matches && window.innerWidth >= 768);
    update();
    motion.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      motion.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div className="sculpture" aria-hidden="true">
      <span className="sculpture-fallback">✳</span>
      {enabled && (
        <DecorationBoundary>
          <Suspense fallback={null}>
            <Accent />
          </Suspense>
        </DecorationBoundary>
      )}
    </div>
  );
}
