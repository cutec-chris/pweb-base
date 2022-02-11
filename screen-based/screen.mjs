import { FASTElement, customElement, html, css } from 'https://unpkg.com/@microsoft/fast-element';
import { } from 'https://unpkg.com/@fluentui/web-components';
const NavBar_template = html`
<div id="NavBar_container">
    <fluent-tree-view>
    </fluent-tree-view>
</div>
`;
const NavBar_styles = css`
#NavBar_container {
    height: "100%";
    width: 300px;
}
`;
export class NavBar extends FASTElement {
    static definition = {
        name: 'promet-navbar',
        template: NavBar_template,
        styles: NavBar_styles
    };
    addLink(id,name,target) {
        let newItem = document.createElement('fluent-tree-item');
        
    }
}
FASTElement.define(NavBar);
export function Init() {
}