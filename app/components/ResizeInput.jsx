import { useState } from "react";

function ResizeInput({onSizeChange, side, size}) {

    function handleSize(e) {
        console.log('input', e.target, e.target.value);
        onSizeChange(e.target.value);
    } 

    return (
        <label>
            {side}:
            <input type="number" name={side} value={size} onChange={(e) => handleSize(e)}></input>
        </label>
    )
}

export default ResizeInput