import "./style.css";

import { Attributes } from "./types";
import { data } from "./data";

import { camelToKebab, kebabToCamel } from "./algorithms/convertCase";

const buildElement = (
  type: string,
  options: Attributes,
  text?: string
): HTMLElement => {
  const newElement = document.createElement(type);

  for (const [key, value] of Object.entries(options)) {
    newElement.setAttribute(key, value);
  }

  if (text) {
    newElement.innerText = text;
  }

  return newElement;
};

const buildPage = (page: string, app: HTMLElement): void => {
  const current = data[page];

  app.innerHTML = "";
  current.markup.forEach((e) => {
    app.insertAdjacentElement("beforeend", buildElement(...e));
  });
  current.inputs.forEach((i) => {
    document.getElementById(i).addEventListener("input", current.update);
  });

  current.update();
};

const callBuildPage = (): void => {
  const app = document.getElementById("app");

  if (location.hash === "") {
    app.innerHTML = "";
    document.getElementById("algorithms").dataset.size = "large";
    return;
  }

  const page = kebabToCamel(location.hash).slice(1); // Has # at start
  buildPage(page, app);
  document.getElementById("algorithms").dataset.size = "small";
};

const buildAlgorithmsSelect = (element: HTMLSelectElement): void => {
  for (const key in data) {
    const newOption = document.createElement("option");

    newOption.setAttribute("value", key);
    newOption.innerText = data[key].name;

    element.insertAdjacentElement("beforeend", newOption);
  }
};

const activateAlgorithmsSelect = (element: HTMLSelectElement): void => {
  element.addEventListener("change", () => {
    location.hash = camelToKebab(element.value);
  });
};

const app = (): void => {
  const algorithmsSelect = <HTMLSelectElement>(
    document.getElementById("algorithms")
  );
  buildAlgorithmsSelect(algorithmsSelect);
  activateAlgorithmsSelect(algorithmsSelect);
  callBuildPage();

  window.addEventListener("hashchange", callBuildPage);
};

app();
