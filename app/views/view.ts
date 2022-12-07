export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(elemento: string) {
    this.elemento = document.querySelector(elemento);
  }

  abstract template(elemento: T): string;

  update(negociacoes: T): void {
    const template = this.template(negociacoes);
    this.elemento.innerHTML = template;
  }
}
