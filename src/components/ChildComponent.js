import { memo } from "react";
import Button from "./Button";

function ChildComponent({ counter, onClick }) {
    console.log('rendered');

    return (
        <div className="flex items-center justify-center flex-col gap-3">
            <h1>Child Counter: {counter}</h1>
            <Button onClick={() => onClick()} danger rounded>Increment Child Counter</Button>
        </div>
    )
}

export default memo(ChildComponent);