"use client";

import { useEffect, useRef } from "react";
import type { BufferGeometry, Group, Material, PerspectiveCamera, Scene, WebGLRenderer } from "three";

/** Scroll-synchronized WebGL atmosphere; portfolio content stays in accessible HTML. */
export function VisualEnvironment() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    let cancelled = false;
    let frame = 0;
    let lastFrame = 0;
    let renderer: WebGLRenderer | undefined;
    let scene: Scene | undefined;
    let camera: PerspectiveCamera | undefined;
    let world: Group | undefined;
    let targetProgress = 0;
    let progress = 0;
    let pointerX = 0;
    let pointerY = 0;
    let disposeScene: (() => void) | undefined;

    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      targetProgress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      if (reducedMotion.matches) {
        progress = targetProgress;
        draw(performance.now());
      }
    };

    const draw = (time: number) => {
      if (!renderer || !scene || !camera || !world || canvas.dataset.failed === "true") return;
      progress += (targetProgress - progress) * (reducedMotion.matches ? 1 : 0.035);
      const eased = progress * progress * (3 - 2 * progress);
      const parallaxEnabled = !coarsePointer.matches && !reducedMotion.matches;
      world.position.x = (coarsePointer.matches ? 1.15 - eased * 1.1 : 2.8 - eased * 4.2) + pointerX * (parallaxEnabled ? 0.28 : 0);
      world.position.y = Math.sin(eased * Math.PI * 2) * 0.32 + pointerY * (parallaxEnabled ? 0.2 : 0);
      world.rotation.y = time * (reducedMotion.matches ? 0 : 0.000055) + eased * 1.55;
      world.rotation.x = 0.13 + pointerY * (coarsePointer.matches ? 0 : 0.08) + Math.sin(eased * Math.PI) * 0.12;
      world.scale.setScalar((coarsePointer.matches ? 0.66 : 1) + Math.sin(eased * Math.PI) * 0.08);
      camera.position.z = 10 - eased * 2.2;
      camera.position.x = -Math.sin(eased * Math.PI * 2) * 0.4;
      camera.lookAt(0, 0, 0);
      world.children.forEach((child, index) => {
        if (child.name === "data-packet") {
          const phase = time * (reducedMotion.matches ? 0 : 0.00022) + index * 1.26 + eased * Math.PI * 2;
          child.position.set(Math.cos(phase) * 2.18, Math.sin(phase * 1.3) * 0.75, Math.sin(phase) * 1.75);
        }
      });
      renderer.render(scene, camera);
    };

    const animate = (time: number) => {
      if (cancelled || document.hidden || reducedMotion.matches) return;
      frame = window.requestAnimationFrame(animate);
      if (time - lastFrame < 32) return;
      lastFrame = time;
      draw(time);
    };

    const start = async () => {
      try {
        const THREE = await import("three");
        if (cancelled) return;

        const isLowPower = coarsePointer.matches || (navigator.hardwareConcurrency || 8) <= 4;
        const pixelRatio = Math.min(window.devicePixelRatio || 1, isLowPower ? 1 : 1.35);
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: !isLowPower,
          powerPreference: "low-power",
          stencil: false,
          depth: true,
        });
        renderer.setPixelRatio(pixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        renderer.setClearColor(0x090b0d, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 80);
        camera.position.set(0, 0, 10);
        scene.fog = new THREE.FogExp2(0x090b0d, 0.018);

        const visualGroup = new THREE.Group();
        world = visualGroup;
        scene.add(visualGroup);

        const accent = 0x9bd6c7;
        const shell = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.72, isLowPower ? 1 : 2),
          new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.16 }),
        );
        visualGroup.add(shell);

        const innerShell = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.23, isLowPower ? 1 : 2),
          new THREE.MeshBasicMaterial({ color: 0xc8e9df, wireframe: true, transparent: true, opacity: 0.11 }),
        );
        visualGroup.add(innerShell);

        const orbitalRing = new THREE.Mesh(
          new THREE.TorusGeometry(2.15, 0.006, 5, isLowPower ? 64 : 120),
          new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.36 }),
        );
        orbitalRing.rotation.set(0.88, 0.18, 0.25);
        visualGroup.add(orbitalRing);

        const nodeCount = isLowPower ? 30 : 62;
        const nodePositions: number[] = [];
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));
        for (let index = 0; index < nodeCount; index += 1) {
          const y = 1 - (index / (nodeCount - 1)) * 2;
          const ringRadius = Math.sqrt(1 - y * y);
          const angle = goldenAngle * index;
          nodePositions.push(Math.cos(angle) * ringRadius * 2.5, y * 2.5, Math.sin(angle) * ringRadius * 2.5);
        }

        const nodeGeometry = new THREE.BufferGeometry();
        nodeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(nodePositions, 3));
        const nodeField = new THREE.Points(
          nodeGeometry,
          new THREE.PointsMaterial({ color: 0xd1eee5, size: isLowPower ? 0.045 : 0.035, transparent: true, opacity: 0.72, sizeAttenuation: true }),
        );
        visualGroup.add(nodeField);

        const linePositions: number[] = [];
        for (let first = 0; first < nodeCount; first += 1) {
          const a = new THREE.Vector3(nodePositions[first * 3], nodePositions[first * 3 + 1], nodePositions[first * 3 + 2]);
          for (let second = first + 1; second < nodeCount; second += 1) {
            const b = new THREE.Vector3(nodePositions[second * 3], nodePositions[second * 3 + 1], nodePositions[second * 3 + 2]);
            if (a.distanceToSquared(b) < 1.1) linePositions.push(...a.toArray(), ...b.toArray());
          }
        }
        const linkGeometry = new THREE.BufferGeometry();
        linkGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
        visualGroup.add(new THREE.LineSegments(linkGeometry, new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.2 })));

        const dustCount = isLowPower ? 100 : 260;
        const dustPositions = new Float32Array(dustCount * 3);
        for (let index = 0; index < dustCount; index += 1) {
          const radius = 4 + Math.random() * 8;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          dustPositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
          dustPositions[index * 3 + 1] = radius * Math.cos(phi);
          dustPositions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
        }
        const dustGeometry = new THREE.BufferGeometry();
        dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
        visualGroup.add(new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0xcce8df, size: 0.018, transparent: true, opacity: 0.38, depthWrite: false })));

        const packetGeometry = new THREE.SphereGeometry(0.035, isLowPower ? 6 : 8, isLowPower ? 4 : 6);
        const packetMaterial = new THREE.MeshBasicMaterial({ color: 0xdff7ef, transparent: true, opacity: 0.92 });
        for (let index = 0; index < 4; index += 1) {
          const packet = new THREE.Mesh(packetGeometry, packetMaterial);
          packet.name = "data-packet";
          visualGroup.add(packet);
        }

        const resize = () => {
          if (!renderer || !camera) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight, false);
          draw(performance.now());
        };
        const pointerMove = (event: PointerEvent) => {
          if (reducedMotion.matches) return;
          pointerX = event.clientX / window.innerWidth - 0.5;
          pointerY = event.clientY / window.innerHeight - 0.5;
        };
        const visibilityChange = () => {
          window.cancelAnimationFrame(frame);
          if (!document.hidden && !reducedMotion.matches) frame = window.requestAnimationFrame(animate);
          else draw(performance.now());
        };
        const motionPreferenceChange = () => {
          window.cancelAnimationFrame(frame);
          if (reducedMotion.matches) {
            pointerX = 0;
            pointerY = 0;
            draw(performance.now());
          }
          else if (!document.hidden) frame = window.requestAnimationFrame(animate);
        };

        const geometries: BufferGeometry[] = [];
        const materials: Material[] = [];
        scene.traverse((object) => {
          const renderable = object as typeof object & { geometry?: BufferGeometry; material?: Material | Material[] };
          if (renderable.geometry) geometries.push(renderable.geometry);
          if (renderable.material) {
            const objectMaterials = Array.isArray(renderable.material) ? renderable.material : [renderable.material];
            materials.push(...objectMaterials);
          }
        });
        disposeScene = () => {
          geometries.forEach((geometry) => geometry.dispose());
          materials.forEach((material) => material.dispose());
          renderer?.dispose();
          renderer?.forceContextLoss();
          renderer?.domElement.removeAttribute("style");
        };

        window.addEventListener("resize", resize, { passive: true });
        window.addEventListener("scroll", updateProgress, { passive: true });
        if (!coarsePointer.matches) window.addEventListener("pointermove", pointerMove, { passive: true });
        document.addEventListener("visibilitychange", visibilityChange);
        reducedMotion.addEventListener("change", motionPreferenceChange);
        disposeScene = (() => {
          const dispose = disposeScene;
          return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("pointermove", pointerMove);
            document.removeEventListener("visibilitychange", visibilityChange);
            reducedMotion.removeEventListener("change", motionPreferenceChange);
            dispose?.();
          };
        })();

        updateProgress();
        draw(performance.now());
        if (!reducedMotion.matches && !document.hidden) frame = window.requestAnimationFrame(animate);
      } catch {
        renderer?.dispose();
        renderer?.forceContextLoss();
        canvas.dataset.failed = "true";
      }
    };

    void start();
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      disposeScene?.();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="visual-environment" />;
}
