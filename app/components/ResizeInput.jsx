function ResizeInput({onSizeChange, side, size}) {

    const minSizeOfCanvas = 700; //(pixels), the pic shouldn't be smaller than canvas size
    function handleSize(e) {
        onSizeChange(e.target.value);
    } 

    return (
        <label>
            {side}:
            <input type="number" min={minSizeOfCanvas} name={side} value={size} onChange={(e) => handleSize(e)}></input>
        </label>
    )
}

export default ResizeInput