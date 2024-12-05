import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Preload, OrbitControls } from '@react-three/drei';
import Stars from './Stars';

export default function Background() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-10"
    >
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <Stars count={7000} radius={2} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Preload all />
        </Suspense>
        <fog attach="fog" args={['#000', 1.5, 5.5]} />
      </Canvas>
    </motion.div>
  );
}