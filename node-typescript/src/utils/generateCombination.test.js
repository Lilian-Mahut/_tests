"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateCombination_1 = __importDefault(require("./generateCombination"));
describe("generateCombination", () => {
    it("should generate empty array for empty input", () => {
        const actual = (0, generateCombination_1.default)([]);
        expect(actual).toEqual([]);
    });
    it("should generate one combination for one element input", () => {
        const actual = (0, generateCombination_1.default)(["c"]);
        expect(actual).toEqual(["c"]);
    });
    it("should generate all combinations for two element input", () => {
        const actual = (0, generateCombination_1.default)(["c", "n"]);
        expect(actual).toEqual(["c", "cn", "n"]);
    });
    it("should generate all combinations for three element input", () => {
        const actual = (0, generateCombination_1.default)(["c", "n", "s"]);
        expect(actual).toEqual(["c", "cn", "cns", "cs", "n", "ns", "s"]);
    });
});
