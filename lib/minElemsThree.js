import * as THREE from 'three';

const sceneContainer = document.querySelector('.scene_container')

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( sceneContainer.clientWidth, sceneContainer.clientHeight );
sceneContainer.appendChild( renderer.domElement );

const cubeGeometry = new THREE.BoxGeometry()
const cubeMaterial = new THREE.MeshBasicMaterial( {color: 0x00ffee})
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add( cube );

camera.position.z = 5;

/**
 * Rotates chosen element at custom speed in all 3 axis
 * @param {object} obj -> element to rotate
 * @param {number} rotateX -> x axis speed rotation
 * @param {number} rotateY -> y axis speed rotation
 * @param {number} rotateZ -> z axis speed rotation
 */
const customRotation = (obj, rotateX, rotateY, rotateZ) => {
    obj.rotation.x += rotateX
    obj.rotation.y += rotateY
    obj.rotation.z += rotateZ
}

export const renderScene = () => {
    requestAnimationFrame( renderScene )
    customRotation(cube, 0.01, 0.01, 0)
    renderer.render(scene, camera)
}