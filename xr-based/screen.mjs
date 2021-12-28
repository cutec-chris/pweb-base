import 'https://aframe.io/releases/1.2.0/aframe.min.js';
export function registerComponents() {
    AFRAME.registerComponent('NavBar', {
        init: function () {
        }
    }
}
export function Init() {
    var scene = document.createElement('a-frame');
    document.body.appendChild(scene);
}