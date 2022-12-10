export abstract class View<T> {
  protected elemento: HTMLElement;

  private escapar = false;

  constructor(elemento: string, escapar?: boolean) {
    this.elemento = document.querySelector(elemento) as HTMLElement;
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(elemento: T): string;

  public update(negociacoes: T): void {
    let template = this.template(negociacoes);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }
}
