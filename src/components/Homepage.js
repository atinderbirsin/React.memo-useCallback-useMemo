const { useState } = require("react");
const { default: ChildComponent } = require("./ChildComponent");

function Homepage() {
    const [counter, setCounter] = useState(0);
    const [childCounter, setChildCounter] = useState(0);

    function handleCounterClick() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleCounterClick}>Increment counter</button>
            <ChildComponent counter={childCounter} />
        </div>
    )
}

export default Homepage;