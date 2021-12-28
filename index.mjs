function doInit() {
    Screen.Init();
    Screen.registerComponents();
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