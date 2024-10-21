import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
	let texture = useTexture("./Cylinder_R3f.png");
	texture.needsUpdate = true;
	return (
		<mesh>
			<cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
			<meshStandardMaterial map={texture} side={THREE.DoubleSide} />
		</mesh>
	);
};

export default Scene;
