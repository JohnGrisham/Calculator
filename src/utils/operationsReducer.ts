interface Operator {
  input?: number;
  operation?: '+' | '-' | '*' | '/' | '%';
  override?: number;
}

const operationHash = {
  '+': (x: number, y: number) => x + y,
  '-': (x: number, y: number) => x - y,
  '*': (x: number, y: number) => {
    if (x === 0 || y === 0) {
      return y || x;
    }

    return x * y;
  },
  '/': (x: number, y: number) => {
    if (x === 0 || y === 0) {
      return y || x;
    }

    return x / y;
  },
  '%': (x: number, y: number) => {
    if (x === 0 || y === 0) {
      return y || x;
    }

    return x % y;
  },
};

export const operationsReducer = (previous: Operator, operator: Operator) => {
  let input = operator.override;
  const operation = operator.operation ?? previous.operation;

  if (!input) {
    input = operation
      ? operationHash[operation](previous.input ?? 0, operator.input ?? 0)
      : operator.input;
  }

  return {
    input,
    operation,
  };
};
