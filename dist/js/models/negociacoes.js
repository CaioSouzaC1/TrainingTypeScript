export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
