import { View } from "./view.js";
export class MensagemView extends View {
    template(elemento) {
        return `<p class="alert alert-info">${elemento}</p>`;
    }
}
