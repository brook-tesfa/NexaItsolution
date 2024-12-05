import { Object3DNode, extend } from '@react-three/fiber';
import { Points } from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    points: Object3DNode<Points, typeof Points>;
  }
}

extend({ Points });