import { memo } from "react";
import Button from "./Button";

function ChildComponent({ counter, onClick }) {
    console.log('rendered');

    function handleButtonClick() {
        onClick(Math.random())
    }

    return (
        <div className="flex items-center justify-center flex-col gap-3">
            <h1>Child Counter: {counter}</h1>
            <Button onClick={handleButtonClick} danger rounded>Increment Child Counter</Button>
        </div>
    )
}

export default memo(ChildComponent);