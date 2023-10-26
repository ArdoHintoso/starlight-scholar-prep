const operandsAndOperators = {
  addition: {
    expression: (x, y) => x + y,
    templateLiteral: (x, y) => `${x} + ${y} =`,
    fullEquation: (x, y, userInput) => `${x} + ${y} = ${userInput}`,
  },
  subtraction: {
    expression: (x, y) => x - y,
    templateLiteral: (x, y) => `${x} - ${y} =`,
    fullEquation: (x, y, userInput) => `${x} - ${y} = ${userInput}`,
  },
  multiplication: {
    expression: (x, y) => x * y,
    templateLiteral: (x, y) => `${x} x ${y} =`,
    fullEquation: (x, y, userInput) => `${x} x ${y} = ${userInput}`,
  },
  division: {
    expression: (x, y) => x / y,
    templateLiteral: (x, y) => `${x} / ${y} =`,
    fullEquation: (x, y, userInput) => `${x} / ${y} = ${userInput}`,
  },
};

export default operandsAndOperators;
