function component(message: string) {
  const element = document.createElement("div");

  element.innerHTML = message;

  return element;
}

document.body.appendChild(component("Hello from Typescript with live reloading?"));
