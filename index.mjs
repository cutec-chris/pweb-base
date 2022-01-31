export function registerPage(aName,aInitFunction) {
}
function doInit() {
    Screen.Init();
    let nav = document.createElement('promet-navbar');
    nav.id = 'NavBar';
    document.body.appendChild(nav);
    window.hideSplash();
}
function isVrSupported() {
    //return true;
    const supportsVR = 'getVRDisplays' in navigator;
    if (supportsVR) {
        navigator.getVRDisplays().then(function(displays) {
                return true;
            });
        }
    return false;
}var Screen = null;
if (isVrSupported()) {
    import('./xr-based/screen.mjs').then(module => {
        Screen = module;
    }).then(doInit);
} else {
    import('./screen-based/screen.mjs').then(module => {
        Screen = module;
    }).then(doInit);
}
//show Splash screen
var splash = document.createElement('div');
splash.setAttribute("style","background-color: white;width: 99%;height: 99%;position: absolute;top:0;bottom:0;left:0;right:0;margin:auto;border: 0;font-family:arial;font-size:25px;font-weight:bold;display: flex; align-items: center; justify-content: center; text-align: center");
splash.innerHTML = document.title;
document.body.appendChild(splash);
window.hideSplash = function() {
    document.body.removeChild(splash);
}