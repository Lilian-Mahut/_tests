export default function generateCombination(array: string[]): string[] {
  const result: string[] = [];

  function generateRecursively(target: string, startIndex: number): void {
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
