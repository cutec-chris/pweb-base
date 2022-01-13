import { FASTElement, customElement, html, css } from 'https://unpkg.com/@microsoft/fast-element';
import { } from 'https://unpkg.com/@fluentui/web-components';
const NavBar_template = html`
<fluent-tree-view></fluent-tree-view>
`;
const NavBar_styles = css``;
export class NavBar extends FASTElement {
    static definition = {
        name: 'promet-navbar',
        template: NavBar_template,
        styles: NavBar_styles
    };
}
FASTElement.define(NavBar);
export function Init() {
    showSplash();
    let nav = document.createElement('promet-navbar');
    document.body.appendChild(nav);
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