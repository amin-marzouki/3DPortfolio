import react, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from "../Component/Loader.jsx";
import Island from "../Models/island"
import {
    OrbitControls,
    GizmoHelper,
    GizmoViewcube,
    GizmoViewport,
} from '@react-three/drei';
const Home=()=>{

    return (
        <section className="w-full h-screen bg-transparent">
            <Canvas
                className="w-full h-screen bg-transparent"
                camera={{ near: 0.2, far: 1000, position: [20,5, 10] }} // Adjust camera position
                style={{ width: '100vw', height: '100vh' }} // Ensure full viewport height and width
            >
                <GizmoHelper alignment='bottom-right' margin={[80, 80]}>

                </GizmoHelper>
                <OrbitControls />
                <gridHelper args={[20, 20, 0xff22aa, 0x55ccff]} />
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[0, 10, 0]} intensity={0.8} />
                    <Island />
                </Suspense>
            </Canvas>
        </section>
    )
}
export default Home;