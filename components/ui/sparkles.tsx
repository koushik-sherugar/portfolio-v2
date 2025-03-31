"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SparklesProps = {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    className,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    speed = 4,
    particleColor = "#FFFFFF",
    particleDensity = 500,
  } = props

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [opacity, setOpacity] = useState(0)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  // Particle class to manage each particle
  class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    opacity: number
    opacitySpeed: number

    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * (maxSize - minSize) + minSize
      this.speedX = (Math.random() - 0.5) * 0.5
      this.speedY = (Math.random() - 0.5) * 0.5
      this.opacity = Math.random() * 0.5 + 0.1
      this.opacitySpeed = (Math.random() * speed) / 100
    }

    update(canvas: HTMLCanvasElement) {
      this.x += this.speedX
      this.y += this.speedY

      // Bounce off edges
      if (this.x > canvas.width || this.x < 0) {
        this.speedX = -this.speedX
      }
      if (this.y > canvas.height || this.y < 0) {
        this.speedY = -this.speedY
      }

      // Cycle opacity
      this.opacity += this.opacitySpeed
      if (this.opacity > 1 || this.opacity < 0.1) {
        this.opacitySpeed = -this.opacitySpeed
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = particleColor
      ctx.globalAlpha = this.opacity
      ctx.fill()
    }
  }

  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    contextRef.current = ctx

    // Set canvas dimensions
    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth
        canvas.height = canvas.parentElement.clientHeight

        // Recreate particles when resizing
        particlesRef.current = []
        for (let i = 0; i < particleDensity; i++) {
          particlesRef.current.push(new Particle(canvas))
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Create initial particles
    for (let i = 0; i < particleDensity; i++) {
      particlesRef.current.push(new Particle(canvas))
    }

    // Fade in
    setOpacity(1)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleDensity, maxSize, minSize])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef.current
      const ctx = contextRef.current

      if (!canvas || !ctx) return

      // Clear canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // If background is not transparent, fill with background color
      if (background !== "transparent") {
        ctx.fillStyle = background
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update(canvas)
        particle.draw(ctx)
      })

      // Handle click to add particles
      const handleClick = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Add 5 new particles at click position
        for (let i = 0; i < 5; i++) {
          const particle = new Particle(canvas)
          particle.x = x
          particle.y = y
          particlesRef.current.push(particle)
        }

        // Keep particle count in check
        if (particlesRef.current.length > particleDensity * 1.5) {
          particlesRef.current = particlesRef.current.slice(-particleDensity)
        }
      }

      canvas.addEventListener("click", handleClick)

      animationRef.current = requestAnimationFrame(animate)

      return () => {
        canvas.removeEventListener("click", handleClick)
      }
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [background, particleColor, speed])

  return (
    <motion.div
      className={cn("relative w-full h-full", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}



// v main

// "use client";
// import React, { useId, useState } from "react";
// import { useEffect } from "react";
// import Particles from "react-tsparticles";
// import type { Container, Engine, SingleOrMultiple } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";
// import { cn } from "@/lib/utils";
// import { motion, useAnimation } from "framer-motion";

// type ParticlesProps = {
//   id?: string;
//   className?: string;
//   background?: string;
//   particleSize?: number;
//   minSize?: number;
//   maxSize?: number;
//   speed?: number;
//   particleColor?: string;
//   particleDensity?: number;
// };

// export const SparklesCore = (props: ParticlesProps) => {
//   const {
//     id,
//     className,
//     background,
//     minSize,
//     maxSize,
//     speed,
//     particleColor,
//     particleDensity,
//   } = props;

//   const controls = useAnimation();
//   const generatedId = useId();

//   const particlesInit = async (engine: Engine) => {
//     await loadSlim(engine);
//   };

//   const particlesLoaded = async (container?: Container) => {
//     if (container) {
//       controls.start({
//         opacity: 1,
//         transition: {
//           duration: 1,
//         },
//       });
//     }
//   };

//   return (
//     <motion.div animate={controls} className={cn("opacity-0", className)}>
//       <Particles
//         id={id || generatedId}
//         className={cn("h-full w-full")}
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           background: {
//             color: {
//               value: background || "#0d47a1",
//             },
//           },
//           fullScreen: {
//             enable: false,
//             zIndex: 1,
//           },
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: false,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             bounce: {
//               horizontal: {
//                 value: 1,
//               },
//               vertical: {
//                 value: 1,
//               },
//             },
//             collisions: {
//               absorb: {
//                 speed: 2,
//               },
//               bounce: {
//                 horizontal: {
//                   value: 1,
//                 },
//                 vertical: {
//                   value: 1,
//                 },
//               },
//               enable: false,
//               maxSpeed: 50,
//               mode: "bounce",
//               overlap: {
//                 enable: true,
//                 retries: 0,
//               },
//             },
//             color: {
//               value: particleColor || "#ffffff",
//               animation: {
//                 h: {
//                   count: 0,
//                   enable: false,
//                   speed: 1,
//                   decay: 0,
//                   delay: 0,
//                   sync: true,
//                   offset: 0,
//                 },
//                 s: {
//                   count: 0,
//                   enable: false,
//                   speed: 1,
//                   decay: 0,
//                   delay: 0,
//                   sync: true,
//                   offset: 0,
//                 },
//                 l: {
//                   count: 0,
//                   enable: false,
//                   speed: 1,
//                   decay: 0,
//                   delay: 0,
//                   sync: true,
//                   offset: 0,
//                 },
//               },
//             },
//             effect: {
//               close: true,
//               fill: true,
//               options: {},
//               type: {} as SingleOrMultiple<string> | undefined,
//             },
//             groups: {},
//             move: {
//               angle: {
//                 offset: 0,
//                 value: 90,
//               },
//               attract: {
//                 distance: 200,
//                 enable: false,
//                 rotate: {
//                   x: 3000,
//                   y: 3000,
//                 },
//               },
//               center: {
//                 x: 50,
//                 y: 50,
//                 mode: "percent",
//                 radius: 0,
//               },
//               decay: 0,
//               direction: "none",
//               drift: 0,
//               enable: true,
//               gravity: {
//                 acceleration: 9.81,
//                 enable: false,
//                 inverse: false,
//                 maxSpeed: 50,
//               },
//               path: {
//                 clamp: true,
//                 delay: { value: 0 },
//                 enable: false,
//                 options: {},
//               },
//               outModes: {
//                 default: "out",
//               },
//               random: false,
//               size: false,
//               speed: {
//                 min: 0.1,
//                 max: 1,
//               },
//               spin: {
//                 acceleration: 0,
//                 enable: false,
//               },
//               straight: false,
//               trail: {
//                 enable: false,
//                 length: 10,
//                 fill: {},
//               },
//               vibrate: false,
//               warp: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 width: 400,
//                 height: 400,
//               },
//               limit: {
//                 mode: "delete",
//                 value: 0,
//               },
//               value: particleDensity || 120,
//             },
//             opacity: {
//               value: {
//                 min: 0.1,
//                 max: 1,
//               },
//               animation: {
//                 count: 0,
//                 enable: true,
//                 speed: speed || 4,
//                 decay: 0,
//                 delay: 0,
//                 sync: false,
//                 mode: "auto",
//                 startValue: "random",
//                 destroy: "none",
//               },
//             },
//             reduceDuplicates: false,
//             shadow: {
//               blur: 0,
//               color: {
//                 value: "#000",
//               },
//               enable: false,
//               offset: {
//                 x: 0,
//                 y: 0,
//               },
//             },
//             shape: {
//               close: true,
//               fill: true,
//               options: {},
//               type: "circle",
//             },
//             size: {
//               value: {
//                 min: minSize || 1,
//                 max: maxSize || 3,
//               },
//               animation: {
//                 count: 0,
//                 enable: false,
//                 speed: 5,
//                 decay: 0,
//                 delay: 0,
//                 sync: false,
//                 mode: "auto",
//                 startValue: "random",
//                 destroy: "none",
//               },
//             },
//             stroke: {
//               width: 0,
//             },
//             zIndex: {
//               value: 0,
//               opacityRate: 1,
//               sizeRate: 1,
//               velocityRate: 1,
//             },
//             destroy: {
//               bounds: {},
//               mode: "none",
//               split: {
//                 count: 1,
//                 factor: {
//                   value: 3,
//                 },
//                 rate: {
//                   value: {
//                     min: 4,
//                     max: 9,
//                   },
//                 },
//                 sizeOffset: true,
//               },
//             },
//             roll: {
//               darken: {
//                 enable: false,
//                 value: 0,
//               },
//               enable: false,
//               enlighten: {
//                 enable: false,
//                 value: 0,
//               },
//               mode: "vertical",
//               speed: 25,
//             },
//             tilt: {
//               value: 0,
//               animation: {
//                 enable: false,
//                 speed: 0,
//                 decay: 0,
//                 sync: false,
//               },
//               direction: "clockwise",
//               enable: false,
//             },
//             twinkle: {
//               lines: {
//                 enable: false,
//                 frequency: 0.05,
//                 opacity: 1,
//               },
//               particles: {
//                 enable: false,
//                 frequency: 0.05,
//                 opacity: 1,
//               },
//             },
//             wobble: {
//               distance: 5,
//               enable: false,
//               speed: {
//                 angle: 50,
//                 move: 10,
//               },
//             },
//             life: {
//               count: 0,
//               delay: { value: 0, sync: false },
//               duration: { value: 0, sync: false },
//             },
//             rotate: {
//               value: 0,
//               animation: {
//                 enable: false,
//                 speed: 0,
//                 decay: 0,
//                 sync: false,
//               },
//               direction: "clockwise",
//               path: false,
//             },
//             orbit: {
//               animation: {
//                 count: 0,
//                 enable: false,
//                 speed: 1,
//                 decay: 0,
//                 delay: 0,
//                 sync: false,
//               },
//               enable: false,
//               opacity: 1,
//               rotation: {
//                 value: 45,
//               },
//               width: 1,
//             },
//             links: {
//               blink: false,
//               color: { value: "#fff" },
//               consent: false,
//               distance: 100,
//               enable: false,
//               frequency: 1,
//               opacity: 1,
//               shadow: {
//                 blur: 5,
//                 color: { value: "#000" },
//                 enable: false,
//               },
//               triangles: { enable: false, frequency: 1 },
//               width: 1,
//               warp: false,
//             },
//             repulse: {
//               value: 0,
//               enabled: false,
//               distance: 1,
//               duration: 1,
//               factor: 1,
//               speed: 1,
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </motion.div>
//   );
// };
