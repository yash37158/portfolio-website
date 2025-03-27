"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, PerspectiveCamera } from "@react-three/drei"

function FloatingShape({ position, color, speed = 1, rotationFactor = 0.5, scale = 1 }) {
  const meshRef = useRef()
  const [randomOffset] = useState(() => Math.random() * 2 * Math.PI)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + randomOffset

    // Gentle floating motion
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.2

    // Slow rotation
    meshRef.current.rotation.x = Math.sin(t * 0.4) * rotationFactor
    meshRef.current.rotation.y += 0.005 * speed
    meshRef.current.rotation.z = Math.cos(t * 0.3) * rotationFactor * 0.5
  })

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  )
}

function FloatingTorus({ position, color, speed = 1, rotationFactor = 0.5, scale = 1 }) {
  const meshRef = useRef()
  const [randomOffset] = useState(() => Math.random() * 2 * Math.PI)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + randomOffset

    // Gentle floating motion
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.2

    // Slow rotation
    meshRef.current.rotation.x = Math.sin(t * 0.4) * rotationFactor
    meshRef.current.rotation.y += 0.005 * speed
  })

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
      <torusKnotGeometry args={[0.7, 0.3, 100, 16]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} wireframe />
    </mesh>
  )
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-70">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={60} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <FloatingShape position={[-4, 2, -2]} color="#9333ea" speed={0.7} scale={1.2} />

        <FloatingShape position={[5, -1, -3]} color="#06b6d4" speed={0.5} scale={1.5} />

        <FloatingTorus position={[-5, -3, -1]} color="#8b5cf6" speed={0.6} scale={0.8} />

        <FloatingTorus position={[4, 3, -2]} color="#22d3ee" speed={0.8} scale={0.7} />

        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

