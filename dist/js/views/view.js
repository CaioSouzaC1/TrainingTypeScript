export class View {
    constructor(elemento, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(elemento);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(negociacoes) {
        let template = this.template(negociacoes);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
