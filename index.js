import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav()}
  ${Main(st)}
  ${Footer()}
`;

  document.querySelectorAll("nav a, footer a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      render(state[event.target.textContent]);
    });
  });
}

render(state.Home);
