import { View } from "./view.js";

export class MensagemView extends View<String> {
  template(elemento: string): string {
    return `<p class="alert alert-info">${elemento}</p>`;
  }
}
