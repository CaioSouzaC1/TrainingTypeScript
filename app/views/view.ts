export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(elemento: string) {
    this.elemento = document.querySelector(elemento);
  }

  protected abstract template(elemento: T): string;

  public update(negociacoes: T): void {
    const template = this.template(negociacoes);
    this.elemento.innerHTML = template;
  }
}
