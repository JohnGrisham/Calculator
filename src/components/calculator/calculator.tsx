interface CalculatorProps {
  input: string;
  onInput: React.MouseEventHandler<HTMLButtonElement>;
  onOperator: React.MouseEventHandler<HTMLButtonElement>;
  onInvert: () => void;
  onGetResult: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  input,
  onInput,
  onOperator,
  onInvert,
  onGetResult,
}) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator-body">
          <div className="calculator-answer">{input}</div>
          <div className="calculator-controls">
            <button
              onClick={() => window.location.reload()}
              className="special-control"
              type="button"
            >
              AC
            </button>
            <button
              onClick={onInvert}
              className="special-control"
              type="button"
            >
              +/-
            </button>
            <button
              onClick={onOperator}
              className="special-control"
              type="button"
              value="%"
            >
              %
            </button>
            <button
              className="operation"
              onClick={onOperator}
              type="button"
              value="/"
            >
              &#247;
            </button>
            <button onClick={onInput} type="button" value="7">
              7
            </button>
            <button onClick={onInput} type="button" value="8">
              8
            </button>
            <button onClick={onInput} type="button" value="9">
              9
            </button>
            <button
              className="operation"
              onClick={onOperator}
              type="button"
              value="*"
            >
              &times;
            </button>
            <button onClick={onInput} type="button" value="4">
              4
            </button>
            <button onClick={onInput} type="button" value="5">
              5
            </button>
            <button onClick={onInput} type="button" value="6">
              6
            </button>
            <button
              className="operation"
              onClick={onOperator}
              type="button"
              value="-"
            >
              -
            </button>
            <button onClick={onInput} type="button" value="1">
              1
            </button>
            <button onClick={onInput} type="button" value="2">
              2
            </button>
            <button onClick={onInput} type="button" value="3">
              3
            </button>
            <button
              className="operation"
              onClick={onOperator}
              type="button"
              value="+"
            >
              +
            </button>
            <button
              style={{ gridColumnEnd: 'span 2' }}
              onClick={onInput}
              type="button"
              value="0"
            >
              0
            </button>
            <button onClick={onInput} type="button" value=".">
              .
            </button>
            <button className="operation" onClick={onGetResult} type="button">
              =
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
