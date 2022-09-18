const lookAndSee = (num: string): string => {
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

function app() {
  const element = document.createElement("div");

  return element;
}

document.getElementById("app").appendChild(app());
