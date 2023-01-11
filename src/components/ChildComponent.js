import { memo } from "react";

function ChildComponent({ counter }) {
    console.log('rendered');

    return (
        <div>
            <h1>Child Counter: {counter}</h1>
            <button>Increment Child Counter</button>
        </div>
    )
}

export default memo(ChildComponent);