import "./style.css";

import { Attributes, ElementParams } from "./types";
import { data } from "./data";

import { camelToKebab, kebabToCamel } from "./helpers/convertCase";

const buildElement = (
  type: string,
  options: Attributes,
  text?: string,
  children?: ElementParams
): HTMLElement => {
  const newElement = document.createElement(type);

  for (const [key, value] of Object.entries(options)) {
    newElement.setAttribute(key, value);
  }

  if (text) {
    newElement.innerText = text;
  }
  if (children) {
    children.forEach((child) =>
      newElement.insertAdjacentElement("beforeend", buildElement(...child))
    );
  }

  return newElement;
};

const buildPage = (page: string, app: HTMLElement): void => {
  const current = data[page];

  app.innerHTML = "";
  current.markup.forEach((e) => {
    app.insertAdjacentElement("beforeend", buildElement(...e));
  });
  current.listeners.forEach((lstnr) => {
    lstnr.ids.forEach((id) => {
      document.getElementById(id).addEventListener(lstnr.type, lstnr.callback);
    });
  });

  // current.update();
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
    const url = new URL(window.location.toString());
    url.searchParams.set("a", camelToKebab(element.value));
    window.history.pushState(null, "", url.toString());
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
