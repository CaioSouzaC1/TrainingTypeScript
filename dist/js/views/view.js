export class View {
    constructor(elemento) {
        this.elemento = document.querySelector(elemento);
    }
    update(negociacoes) {
        const template = this.template(negociacoes);
        this.elemento.innerHTML = template;
    }
}
