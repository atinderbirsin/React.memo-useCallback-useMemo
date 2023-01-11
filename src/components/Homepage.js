import Button from "./Button";

const { useState, useCallback } = require("react");
const { default: ChildComponent } = require("./ChildComponent");

function Homepage() {
    const [counter, setCounter] = useState(0);
    const [childCounter, setChildCounter] = useState(0);

    const memoizedCallback = useCallback(() => handleChildCounterClick(), [childCounter]);

    function handleCounterClick() {
        setCounter(counter + 1);
    }

    function handleChildCounterClick() {
        setChildCounter(childCounter + 1);
    }

    return (
        <div className="h-full flex items-center justify-center flex-col gap-3">
            <h1>Counter: {counter}</h1>
            <Button primary rounded onClick={handleCounterClick}>Increment counter</Button>
            <ChildComponent onClick={memoizedCallback} counter={childCounter} />
        </div>
    )
}

export default Homepage;