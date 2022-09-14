function component(message: string) {
  const element = document.createElement("div");

  element.innerHTML = message;

  return element;
}

document.getElementById('app').appendChild(component("Hello from Typescript with live reloading?"));
