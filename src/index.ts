const buildElement = (type: string, options: object, text?: string) => {
  const newElement = document.createElement(type);

  for (const [key, value] of Object.entries(options)) {
    newElement.setAttribute(key, value);
  }

  if (text) {
    newElement.innerText = text;
  }

  return newElement;
};

const getNextLookAndSayTerm = (num: string): string => {
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

const getLookAndSaySequence = (seed: string, noOfTerms: number) => {
  const sequence = [seed];

  while (sequence.length < noOfTerms) {
    sequence.push(getNextLookAndSayTerm(sequence.at(-1)));
  }

  return sequence;
};

const update = () => {
  const seed = <HTMLInputElement>document.getElementById("seed");
  const terms = <HTMLInputElement>document.getElementById("terms");
  const result = getLookAndSaySequence(seed.value, parseInt(terms.value));

  document.getElementById("output").textContent = result.join(", ");
};

const elements: [string, object, string?][] = [
  ["h2", {}, "Look-and-Say Sequence"],
  ["label", { for: "seed" }, "Start: "],
  ["input", { type: "number", id: "seed", value: 1 }],
  ["label", { for: "terms" }, "Number of terms: "],
  ["input", { type: "number", id: "terms", value: 5 }],
];

const app = () => {
  const intro = document.getElementById("intro");
  elements.forEach((e) => {
    intro.insertAdjacentElement("beforeend", buildElement(...e));
  });

  document.getElementById("seed").addEventListener("input", update);
  document.getElementById("terms").addEventListener("input", update);
  update();
};

app();
