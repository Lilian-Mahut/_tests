"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mock_prefix_list_1 = require("./mock-prefix-list");
const generateCombination_1 = __importDefault(
  require("./utils/generateCombination")
);
const combinations = (0, generateCombination_1.default)(
  mock_prefix_list_1.Prefix
);
console.log(combinations);
