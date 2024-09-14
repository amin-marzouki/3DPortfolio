/*
import {useEffect,useRef} from "react";
import {useFrame,useThree} from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'
import islandScene from '../assets/super_barel.glb'





const Island=(props)=> {
    const { nodes, materials } = useGLTF(islandScene)








    return (
        <group {...props} dispose={null}>
            <group scale={1}>
                <group position={[0, 4, 0]}>
                    <mesh

                        geometry={nodes.pCylinder1_standardSurface1_0.geometry}
                        material={materials.standardSurface1}
                    />
                    <mesh

                        geometry={nodes.pCylinder1_standardSurface2_0.geometry}
                        material={materials.standardSurface2}
                    />
                </group>
            </group>
        </group>
    )
}
export default Island;
*/

import { useState, useRef } from "react";
import { useGLTF } from '@react-three/drei';
import islandScene from '../assets/halo_ce_-_fuel_rod_cannon.glb';

const Island = (props) => {
    const { nodes, materials } = useGLTF(islandScene);
    const [isDragging, setIsDragging] = useState(false);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const lastMousePosition = useRef([0, 0]);

    const handlePointerDown = (event) => {
        setIsDragging(true);
        lastMousePosition.current = [event.clientX, event.clientY];
    };

    const handlePointerMove = (event) => {
        if (isDragging) {
            const [lastX, lastY] = lastMousePosition.current;
            const deltaX = event.clientX - lastX;
            const deltaY = event.clientY - lastY;

            // Adjust rotation based on pointer movement
            setRotation((prevRotation) => [
                prevRotation[0] + deltaY * 0.01, // Y-axis rotation
                prevRotation[1] + deltaX * 0.01, // X-axis rotation
                prevRotation[2] , // Z-axis remains unchanged
            ]);

            lastMousePosition.current = [event.clientX, event.clientY];
        }

    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    return (
        <group {...props}
               onPointerDown={handlePointerDown}
               onPointerMove={handlePointerMove}
               onPointerUp={handlePointerUp}
               dispose={null}
               rotation={rotation}>
            <group scale={0.05}>
                <mesh

                    geometry={nodes.Fuel_Rod_FRC_0.geometry}
                    material={materials.material}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
            </group>

        </group>
    )
};

export default Island;


