const supportsVR = 'getVRDisplays' in navigator;
if (supportsVR) {
    navigator.getVRDisplays().then(function(displays) {
        import('./xr-based/screen.mjs').then(module => {
            module.Init();
        });
    });
}
else {
    import('./screen-based/screen.mjs').then(module => {
        module.Init();
    });
}
