import * as THREE from "three";
// canvas
const canvas = document.querySelector('.scene_container')
// Scene
const scene = new THREE.Scene();

// Objects
const group = new THREE.Group();
scene.add(group);

// Axes helper
const axes = new THREE.AxesHelper();

// 
scene.add(axes);



// export
export const renderScene05 = () => {
    console.log('hola');
}