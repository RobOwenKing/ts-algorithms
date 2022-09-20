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

const app = () => {
  document.getElementById("app").innerHTML = `
    <h2>Look-and-Say Sequence</h2>

    <label for="seed">Start: </label>
    <input type="number" id="seed" value="1">
    <label for="terms">Number of terms: </label>
    <input type="number" id="terms" value="5">

    <section>
      <h3>Result</h3>
      <div id="output"></div>
    </section>
    `;

  document.getElementById("seed").addEventListener("input", update);
  document.getElementById("terms").addEventListener("input", update);
  update();
};

app();
