import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import Stars from './Stars';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 1, 5]} />
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroBackground;