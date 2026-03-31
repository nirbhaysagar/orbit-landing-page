import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Moon3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Moon Geometry and Textures ---
    const textureLoader = new THREE.TextureLoader();
    // Using a reliable high-res moon texture
    const moonTexture = textureLoader.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg");
    const moonDisplacement = textureLoader.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"); // Can use same for bump

    const geometry = new THREE.SphereGeometry(2.5, 128, 128); // Higher segment count for displacement
    const material = new THREE.MeshStandardMaterial({
      map: moonTexture,
      bumpMap: moonDisplacement,
      bumpScale: 0.05,
      roughness: 1,
      metalness: 0,
      transparent: true,
      opacity: 1,
    });

    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);
    moonRef.current = moon;

    // --- Lighting (Fixed for Crescent Look) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(15, 10, 5); // Angle for the bright crescent
    scene.add(directionalLight);

    camera.position.z = 10;

    // --- Animation Logic (Live Rotation) ---
    const clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      requestAnimationFrame(animate);
      if (moonRef.current) {
        moonRef.current.rotation.y += delta * 0.05; // Smooth live rotation
      }
      renderer.render(scene, camera);
    };
    animate();

    // --- GSAP Scroll Choreography ---
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions as any;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      // State-based positioning
      if (isDesktop) {
        // Desktop: Large crescent hanging at the bottom
        gsap.set(moon.position, { y: -5, x: 0, z: 2 });
        gsap.set(moon.scale, { x: 1.5, y: 1.5, z: 1.5 });

        // Transition: Rise and become full (Initial burst)
        tl.to(moon.position, { y: 1, x: 3, z: -2, ease: "power1.inOut" }, 0)
          .to(directionalLight.position, { x: 0, y: 0, z: 20 }, 0) // Front lighting
          .to(moon.scale, { x: 1, y: 1, z: 1 }, 0)
          .to(directionalLight, { intensity: 4.5, ease: "power2.inOut" }, 0.1);

        // Final: Descent to footer
        tl.to(moon.position, { y: -6, x: -3, z: 0, ease: "power2.inOut" }, 0.45)
          .to(moon.scale, { x: 0.8, y: 0.8, z: 0.8 }, 0.45)
          .to(directionalLight.position, { x: -15, y: -10, z: 5 }, 0.45)
          .to(directionalLight, { intensity: 0, ease: "power1.inOut" }, 0.45)
          .to(material, { opacity: 0, ease: "power3.in" }, 0.45);
      } else {
        // Mobile: Centered, smaller, less horizontal travel
        gsap.set(moon.position, { y: -4, x: 0, z: 1 });
        gsap.set(moon.scale, { x: 0.8, y: 0.8, z: 0.8 });

        tl.to(moon.position, { y: 1.5, x: 0, z: -3, ease: "power1.inOut" }, 0)
          .to(directionalLight.position, { x: 0, y: 0, z: 15 }, 0)
          .to(moon.scale, { x: 0.6, y: 0.6, z: 0.6 }, 0)
          .to(directionalLight, { intensity: 3, ease: "power2.inOut" }, 0.1);

        tl.to(moon.position, { y: -5, x: 0, z: 0, ease: "power2.inOut" }, 0.45)
          .to(moon.scale, { x: 0.4, y: 0.4, z: 0.4 }, 0.45)
          .to(directionalLight.position, { x: -5, y: -5, z: 5 }, 0.45)
          .to(directionalLight, { intensity: 0, ease: "power1.inOut" }, 0.45)
          .to(material, { opacity: 0, ease: "power3.in" }, 0.45);
      }

      return () => {
        tl.kill();
      };
    });

    // --- Resize Handler ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mm.revert();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default Moon3D;
