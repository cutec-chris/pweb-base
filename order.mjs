import { registerPage } from './index.mjs'
registerPage('order','Orders',function(){
    return html`
    <promet-tabs>
        <promet-tab caption="Overview">
            <promet-preview></promet-preview>
        </promet-tab>
        <promet-tab caption="Positions">
            <promet-table columns="PosNo,Ident,Shorttext,Quantity,QuantityU">
            </promet-table>
        </promet-tab>
        <promet-tab caption="Customer">
        </promet-tab>
    </promet-tabs>
    `;
})