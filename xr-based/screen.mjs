import 'https://aframe.io/releases/1.3.0/aframe.min.js';
AFRAME.registerComponent('promet-navbar', {
    init: function () {
    },
    addLink: function(id,name,target) {
    },
});
let Scene,Camera,Viewer = null;
export function Init() {
    Scene = document.createElement('a-scene');
    document.body.appendChild(Scene);
    Viewer = document.createElement('a-entity');
    Scene.appendChild(Viewer);
    Camera = document.createElement('a-camera');
    Viewer.setAttribute('position','0 0 0')
    Viewer.appendChild(Camera);
    Camera.setAttribute('position','0 1.9 0')
    Camera.setAttribute('look-contols','')
    Viewer.setAttribute('wasd-contols','')
    document.Scene = Scene;
}