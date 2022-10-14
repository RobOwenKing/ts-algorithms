import { Attributes } from "./types";
import { data } from "./data";

import { camelToKebab } from "./algorithms/convertCase";

const buildElement = (type: string, options: Attributes, text?: string) => {
  const newElement = document.createElement(type);

  for (const [key, value] of Object.entries(options)) {
    newElement.setAttribute(key, value);
  }

  if (text) {
    newElement.innerText = text;
  }

  return newElement;
};

const buildPage = (page: string) => {
  const app = document.getElementById("app");
  const current = data[page];

  app.innerHTML = "";
  current.markup.forEach((e) => {
    app.insertAdjacentElement("beforeend", buildElement(...e));
  });
  current.inputs.forEach((i) => {
    document.getElementById(i).addEventListener("input", current.update);
  });

  current.update();

  location.hash = camelToKebab(page);
};

const buildAlgorithmsSelect = (element: HTMLSelectElement) => {
  for (const key in data) {
    const newOption = document.createElement("option");

    newOption.setAttribute("value", key);
    newOption.innerText = data[key].name;

    element.insertAdjacentElement("beforeend", newOption);
  }
};

const activateAlgorithmsSelect = (element: HTMLSelectElement) => {
  element.addEventListener("change", () => {
    buildPage(element.value);
  });
};

const app = () => {
  const algorithmsSelect = <HTMLSelectElement>(
    document.getElementById("algorithms")
  );
  buildAlgorithmsSelect(algorithmsSelect);
  activateAlgorithmsSelect(algorithmsSelect);
};

app();
