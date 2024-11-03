"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { random } from "maath";

// Function to generate unique star positions
const generateUniqueStars = (numStars: number, radius: number) => {
    const positions = [];
    const set = new Set(); // Track used positions
    let attempts = 0; // Track attempts to generate unique positions

    while (positions.length < numStars && attempts < 10000) {
        const position = random.inSphere(new Float32Array(3), { radius });
        const key = position.join(","); // Create a unique key based on position

        if (!set.has(key)) {
            set.add(key);
            positions.push(position[0], position[1], position[2]); // Add unique position to array
        }

        attempts++;
    }

    return new Float32Array(positions);
};

type StarBackgroundProps = React.ComponentProps<typeof Points>;

const StarBackground = (props: StarBackgroundProps) => {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState(() => generateUniqueStars(5000, 1.2)); // Generate unique stars

    useFrame((state, delta) => {
        if (ref.current) {
            // Modify rotation safely
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
