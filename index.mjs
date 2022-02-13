function isVrSupported() {
    if (document.body.hasAttribute('3d')) {
        return true;
    }
    //return true;
    const supportsVR = 'getVRDisplays' in navigator;
    if (supportsVR) {
        navigator.getVRDisplays().then(function(displays) {
                return true;
            });
        }
    return false;
}
const InitDone = new Event('promet-loaded');
const BeforeInitDone = new Event('promet-before-loaded');
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
        ScreenModule = './xr-based/screen.mjs'
    }
    import(ScreenModule).then(module => {
        Screen = module;
        resolve(true);
    })
}).then(function(result) { 
    Screen.Init();
    document.dispatchEvent(BeforeInitDone)
    let nav = document.createElement('promet-navbar');
    nav.id = 'NavBar';
    document.body.appendChild(nav);
    document.dispatchEvent(InitDone)
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