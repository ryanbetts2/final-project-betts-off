import { Header, Nav, Main, Footer } from "./components";

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(st)}
  ${Main(st)}
  ${Footer(st)}
`;

  document.querySelectorAll("nav a, footer a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      render(state[event.target.textContent]);
    });
  });
}

render(state.Home);
