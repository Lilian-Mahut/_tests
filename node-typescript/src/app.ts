import { Prefix } from "./data/mock-prefix-list";
import generateCombination from "./utils/generateCombination";

const combinations: string[] = generateCombination(Prefix);
console.log(combinations);
