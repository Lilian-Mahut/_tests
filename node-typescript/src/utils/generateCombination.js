"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateCombination(array) {
  const result = [];

  function generateRecursively(target, startIndex) {
    if (target !== "") {
      result.push(target);
    }
    for (let i = startIndex; i < array.length; i++) {
      generateRecursively(target + array[i], i + 1);
    }
  }
  generateRecursively("", 0);
  return result;
}
exports.default = generateCombination;
