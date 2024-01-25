const generateCombinations = (letters) =>
  letters.reduce(
    (result, item) =>
      result.concat(result.map((combination) => combination + item)),
    [""]
  );

const letters = ["a", "f", "g", "l"];

console.log(generateCombinations(letters).slice(1));
