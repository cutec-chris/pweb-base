function isVrSupported() {
    //return true;
    const supportsVR = 'getVRDisplays' in navigator;
    if (supportsVR) {
        navigator.getVRDisplays().then(function(displays) {
                return true;
            });
        }
    return false;
}
export function registerPage(aId,aName,aInitFunction) {
    isInitialized.then((resolvedValue) => {
        let NavBar = document.getElementById('NavBar');
        NavBar.addLink(aId,aName,aInitFunction);
    }, (error) => {
        console.log(error);
    });
}
let Screen = null;
const isInitialized = new Promise(function(resolve, reject) {
    let ScreenModule = './screen-based/screen.mjs';
    if (isVrSupported()) {
        let ScreenModule = './xr-based/screen.mjs'
    }
    import(ScreenModule).then(module => {
        Screen = module;
        resolve(true);
    })
}).then(function(result) { 
    Screen.Init();
    let nav = document.createElement('promet-navbar');
    nav.id = 'NavBar';
    document.body.appendChild(nav);
    window.hideSplash();
    console.log('Init complete');
    return result;
});
//show Splash screen
var splash = document.createElement('div');
splash.setAttribute("style","background-color: white;width: 99%;height: 99%;position: absolute;top:0;bottom:0;left:0;right:0;margin:auto;border: 0;font-family:arial;font-size:25px;font-weight:bold;display: flex; align-items: center; justify-content: center; text-align: center");
splash.innerHTML = document.title;
document.body.appendChild(splash);
window.hideSplash = function() {
    document.body.removeChild(splash);
}