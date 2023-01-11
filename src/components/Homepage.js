import { useState, useCallback, useMemo } from "react";
import ChildComponent from "./ChildComponent";
import Button from "./Button";

function Homepage() {
  const [counter, setCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  const [values, setValues] = useState([
    1, 2, 5, 4, 7, 22, 44, 66, 23, 55, 67, 99, 0, 32, 65, 76,
  ]);

  const getMemoizedMaxValue = useMemo(() => getMaxValue(), [values]);

  const memoizedCallback = useCallback(
    () => handleChildCounterClick(),
    [childCounter]
  );

  function handleCounterClick() {
    setCounter(counter + 1);
  }

  function handleChildCounterClick() {
    setChildCounter(childCounter + 1);
  }

  function getMaxValue() {
    console.log('I"m re-rendering');
    return Math.max(...values);
  }

  function handleValuesButtonClick() {
    setValues([1,2,5,3,7]);
  }

  return (
    <div className="h-full flex items-center justify-center flex-col gap-3">
      <h1>Counter: {counter}</h1>
      <Button primary rounded onClick={handleCounterClick}>
        Increment counter
      </Button>
      <ChildComponent onClick={memoizedCallback} counter={childCounter} />

      <div>{getMemoizedMaxValue}</div>
      <Button secondary onClick={handleValuesButtonClick} >change</Button>
    </div>
  );
}

export default Homepage;
