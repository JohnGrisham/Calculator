import React from 'react';
import { Calculator } from './calculator';
import { operationsReducer } from '../../utils';

const CalculatorWrapper: React.FC = () => {
  const [{ input: answer }, dispatch] = React.useReducer(operationsReducer, {
    input: 0,
    operation: undefined,
  });
  const [input, setInput] = React.useState(JSON.stringify(answer));
  const [awaitingInput, setAwaitingInput] = React.useState(false);

  const onInput: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
    (event) => {
      const value = event.currentTarget.value;
      // If the previous value was zero and the new value is not a decimal and if we are not awaiting input append the new value to the previous one.
      // ...Otherwise set the input to the new value.
      setInput((prev) =>
        (prev === '0' && value !== '.') || awaitingInput ? value : prev + value,
      );

      if (awaitingInput) {
        setAwaitingInput(false);
      }
    },
    [awaitingInput],
  );

  const onOperator: React.MouseEventHandler<HTMLButtonElement> =
    React.useCallback(
      (event) => {
        const operation = event.currentTarget.value as any;
        const nextInput = Number.parseFloat(input);

        dispatch({
          // override the answer to equal the input if the first operator is subtraction.
          override: answer === 0 && operation === '-' ? nextInput : undefined,
          input: awaitingInput || isNaN(nextInput) ? undefined : nextInput,
          operation,
        });
        // Set the state to awaiting input to update the input number shown and prepare for a new number.
        setAwaitingInput(true);
      },
      [answer, awaitingInput, input],
    );

  const onInvert = React.useCallback(() => {
    const current = answer || Number.parseFloat(input);
    const inverted = Math.abs(current) * (current > 0 ? -1 : 1);
    dispatch({ override: inverted });
    setAwaitingInput(true);
  }, [answer, input]);

  const onGetResult = React.useCallback(() => {
    const nextInput = Number.parseFloat(input);
    dispatch({
      input: isNaN(nextInput) ? undefined : nextInput,
    });
    setAwaitingInput(true);
  }, [input]);

  React.useEffect(() => {
    if (awaitingInput) {
      setInput(JSON.stringify(answer));
    }
  }, [answer, awaitingInput]);

  return (
    <Calculator
      input={input}
      onGetResult={onGetResult}
      onInput={onInput}
      onInvert={onInvert}
      onOperator={onOperator}
    />
  );
};

export default CalculatorWrapper;
