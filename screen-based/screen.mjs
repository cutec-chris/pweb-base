import { FASTElement, customElement } from 'https://unpkg.com/@microsoft/fast-element';
export function Init() {
    showSplash();
}
function showSplash() {
    //show Splash screen
    var splash = document.createElement('div');
    splash.setAttribute("style","background-color: white;width: 99%;height: 99%;position: absolute;top:0;bottom:0;left:0;right:0;margin:auto;border: 0;font-family:arial;font-size:25px;font-weight:bold;display: flex; align-items: center; justify-content: center; text-align: center");
    splash.innerHTML = document.title;
    document.body.appendChild(splash);
    function hideSplash(){
        document.body.removeChild(splash);
    }
    window.onload = function() {
        hideSplash();
    }
    window.setTimeout(function(){
        hideSplash();
    },50)
}