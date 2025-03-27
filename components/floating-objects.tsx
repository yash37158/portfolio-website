"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

// Create a simple geometric shape
function GeometricShape({ position, rotation, scale, color, speed, amplitude }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * amplitude

    // Slow rotation
    meshRef.current.rotation.x = rotation[0] + t * 0.1
    meshRef.current.rotation.y = rotation[1] + t * 0.15
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.8} transparent opacity={0.8} />
    </mesh>
  )
}

// Create a custom shape using a texture
function CustomShape({ position, rotation, scale, color, speed, amplitude }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * amplitude

    // Slow rotation
    meshRef.current.rotation.z = rotation[2] + t * 0.1
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <torusKnotGeometry args={[0.8, 0.2, 128, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} transparent opacity={0.7} wireframe />
    </mesh>
  )
}

// Create a glowing sphere
function GlowingSphere({ position, scale, color, speed, amplitude }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * amplitude

    // Pulse scale
    const pulse = 1 + Math.sin(t * 2) * 0.05
    meshRef.current.scale.set(scale[0] * pulse, scale[1] * pulse, scale[2] * pulse)
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
    </mesh>
  )
}

export function FloatingObjects() {
  return (
    <group>
      {/* Background ambient light */}
      <ambientLight intensity={0.2} />

      {/* Directional lights for better 3D effect */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#4ade80" />
      <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#ffffff" />

      {/* Geometric shapes */}
      <GeometricShape
        position={[-5, 0, -5]}
        rotation={[0, 0, 0]}
        scale={[0.8, 0.8, 0.8]}
        color="#4ade80"
        speed={0.5}
        amplitude={0.5}
      />

      <GeometricShape
        position={[5, 2, -7]}
        rotation={[0.5, 0.5, 0]}
        scale={[1.2, 1.2, 1.2]}
        color="#10b981"
        speed={0.3}
        amplitude={0.7}
      />

      <GeometricShape
        position={[0, -3, -10]}
        rotation={[0.2, 0.4, 0.6]}
        scale={[1.5, 1.5, 1.5]}
        color="#059669"
        speed={0.2}
        amplitude={0.3}
      />

      {/* Custom shapes */}
      <CustomShape
        position={[-7, 3, -8]}
        rotation={[0, 0, 0]}
        scale={[0.7, 0.7, 0.7]}
        color="#34d399"
        speed={0.4}
        amplitude={0.6}
      />

      <CustomShape
        position={[7, -2, -6]}
        rotation={[0.3, 0.2, 0.1]}
        scale={[0.5, 0.5, 0.5]}
        color="#6ee7b7"
        speed={0.6}
        amplitude={0.4}
      />

      {/* Glowing spheres */}
      <GlowingSphere position={[3, 4, -9]} scale={[0.3, 0.3, 0.3]} color="#a7f3d0" speed={0.7} amplitude={0.5} />

      <GlowingSphere position={[-3, -4, -7]} scale={[0.2, 0.2, 0.2]} color="#d1fae5" speed={0.5} amplitude={0.3} />
    </group>
  )
}

