import 'https://aframe.io/releases/1.2.0/aframe.min.js';
AFRAME.registerComponent('NavBar', {
    init: function () {
    },
    addLink: function(id,name,target) {
    },
});
let Scene = null;
export function Init() {
    Scene = document.createElement('a-frame');
    document.body.appendChild(Scene);
}