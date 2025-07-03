const rowInput = document.getElementById("rows");
const patternSelect = document.getElementById("patterns");
const repetitionsInput = document.getElementById("repeat");
const generateBtn = document.getElementById("generate");
const clearBtn = document.getElementById("clear");
const outputDiv = document.getElementById("output-box");
const errorDiv = document.getElementById("error");

generateBtn.addEventListener("click", () => {
  const rows = parseInt(rowInput.value);
  const patterns = patternSelect.value;
  const repetitions = parseInt(repetitionsInput.value) || 1;

  if (isNaN(rows) || rows < 1 || rows > 20) {
    errorDiv.textContent = "Please Enter a Valid numbers of row (1-20)";
    errorDiv.style.display = "block";
    errorDiv.classList.remove("shake");
    void errorDiv.offsetWidth;
    errorDiv.classList.add("shake");
    outputDiv.innerHTML = "";
    return;
  }

  if (isNaN(repetitions) || repetitions < 1 || repetitions > 10) {
    errorDiv.textContent = "Please Enter a Valid numbers of repetitions (1-10)";
    errorDiv.style.display = "block";
    errorDiv.classList.remove("shake");
    void errorDiv.offsetWidth;
    errorDiv.classList.add("shake");
    outputDiv.innerHTML = "";
    return;
  }
  errorDiv.style.display = "none";
  console.log(rows);

  let patternText = "";
  if (patterns === "centerTriangle") {
    patternText = centerTriangle(rows);
  } else if (patterns === "leftTriangle") {
    patternText = leftTriangle(rows);
  } else if (patterns === "invertedTriangle") {
    patternText = invertedTriangle(rows);
  }

  console.log(patternText);
  let finalText = "";
  for (let i = 0; i < repetitions; i++) {
    finalText += `<div class="pattern-card">${patternText}</div>`;
  }

  outputDiv.innerHTML = finalText;
  outputDiv.classList.remove("fade-in");
  void outputDiv.offsetWidth; 
  outputDiv.classList.add("fade-in");

  console.log("finalText", finalText);
});

clearBtn.addEventListener("click", () => {
  rowInput.value = "";
  patternSelect.value = "leftTriangle";
  repetitionsInput.value = "";
  outputDiv.innerHTML = "";
  errorDiv.style.display = "";
});

function leftTriangle(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}

function centerTriangle(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}

function invertedTriangle(rows) {
  let pattern = "";
  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}
