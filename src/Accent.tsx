import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Decorative only: demand loaded, bounded rendering, no effect on reading the page. */
export default function Accent() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!host.current) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }
    const container = host.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 30);
    camera.position.z = 6;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(150, 150);
    container.appendChild(renderer.domElement);
    const geometry = new THREE.TorusKnotGeometry(0.8, 0.19, 80, 12, 2, 3);
    const material = new THREE.MeshStandardMaterial({
      color: "#a28a55",
      metalness: 0.7,
      roughness: 0.35,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(0.5, 0.2, -0.3);
    scene.add(mesh, new THREE.HemisphereLight("#fff7e8", "#646d56", 3));
    const light = new THREE.DirectionalLight("#ffffff", 4);
    light.position.set(3, 4, 5);
    scene.add(light);
    let frame = 0,
      visible = true,
      lastDraw = 0;
    const draw = (time = 0) => {
      if (visible && !document.hidden && time - lastDraw > 1000 / 30) {
        mesh.rotation.y += 0.006;
        renderer.render(scene, camera);
        lastDraw = time;
      }
      frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(container);
    draw();
    const contextLost = (event: Event) => {
      event.preventDefault();
      cancelAnimationFrame(frame);
      container.classList.remove("rendered");
    };
    renderer.domElement.addEventListener("webglcontextlost", contextLost);
    container.classList.add("rendered");
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      container.classList.remove("rendered");
    };
  }, []);
  return <div ref={host} className="accent-scene" />;
}
