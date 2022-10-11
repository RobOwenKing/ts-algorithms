import { Attributes } from "./types";
import { data } from "./data";

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
  const intro = document.getElementById("intro");
  const current = data[page];
  current.markup.forEach((e) => {
    intro.insertAdjacentElement("beforeend", buildElement(...e));
  });
  current.inputs.forEach((i) => {
    document.getElementById(i).addEventListener("input", current.update);
  });

  current.update();
};

const buildAlgorithmsSelect = (element: HTMLSelectElement) => {
  for (const key in data) {
    const newOption = document.createElement("option");

    newOption.setAttribute("id", key);
    newOption.innerText = data[key].name;

    element.insertAdjacentElement("beforeend", newOption);
  }
};

const app = () => {
  const algorithmsSelect = <HTMLSelectElement>(
    document.getElementById("algorithms")
  );
  buildAlgorithmsSelect(algorithmsSelect);

  buildPage("lookAndSay");
};

app();
