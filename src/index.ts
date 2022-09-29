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

const app = () => {
  const intro = document.getElementById("intro");
  const current = data.lookAndSay;
  current.markup.forEach((e) => {
    intro.insertAdjacentElement("beforeend", buildElement(...e));
  });
  current.inputs.forEach((i) => {
    document.getElementById(i).addEventListener("input", current.update);
  });

  current.update();
};

app();
