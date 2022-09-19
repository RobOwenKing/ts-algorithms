const lookAndSay = (num: string): string => {
  let currentChar = num[0];
  let count = 0;
  let newNum = "";

  for (const char of num + ".") {
    if (char === currentChar) {
      count += 1;
    } else {
      newNum += count;
      newNum += currentChar;
      count = 1;
      currentChar = char;
    }
  }

  return newNum;
};

const update = () => {
  const num = <HTMLInputElement>document.getElementById("seed");
  const result = lookAndSay(num.value);

  document.getElementById("output").textContent = result;
};

const app = () => {
  document.getElementById("app").innerHTML = `
    <h2>Look-and-Say Sequence</h2>

    <label for="seed">Start: </label>
    <input type="number" id="seed" value="1">
    <label for="steps">Number of steps: </label>
    <input type="number" id="steps" value="5">

    <section id="output"></section>
    `;

  document.getElementById("seed").addEventListener("input", update);
};

app();
