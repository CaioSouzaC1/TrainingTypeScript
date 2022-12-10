import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controler = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    controler.adiciona();
  });
} else {
  throw Error("Form pode ser nulo");
}
