import { Header, Nav, Main, Footer } from "./components";
import { capitalizeCamelCase, getFormDataFromIds } from "./lib";

import { camelCase } from "lodash";
import Navigo from "navigo";

const router = new Navigo(location.origin);

const bikesUtils = {
  addCustomer(data) {
    data.bike = Number(data.bike);
    state.bikes.push(data);
  },
  discount({ amount }) {
    state.bikes.map(
      bike => (bike.value -= (Number(amount) / 100) * bike.value)
    );
  }
};

const state = {
  buttons: ["AddCustomer", "AddSale", "Discount"],
  currentView: "AddCustomer",
  bikes: []
};

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(st)}
  ${Main(st)}
  ${Footer(st)}
`;

  router.updatePageLinks();

  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = getFormDataFromIds(event.target.elements);

      // Use form's id to run appropriate function.
      bikesUtils[camelCase(this.id)](formData);

      render(state);
    });
  }
}

router
  .on(":page", params => {
    state.currentView = `${capitalizeCamelCase(params.page)}`;
    render(state);
  })
  .on("/", () => render(state))
  .resolve();
