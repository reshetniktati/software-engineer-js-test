function ResizeInput({ onSizeChange, side, size, min }) {
  const handleSize = (e) => {
    onSizeChange(e.target.value);
  };

  return (
    <label>
      {side}:
      <input
        type="number"
        min={min}
        name={side}
        value={size}
        onChange={(e) => handleSize(e)}
      ></input>
    </label>
  );
}

export default ResizeInput;
