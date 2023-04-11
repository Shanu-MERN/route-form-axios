import React, { useState } from "react";

function Cal() {
  const [Result, setResult] = useState("");

  const handleClick = (e) => {
    setResult((prev) => prev + e.target.name);
  };

  const handleClear = () => {
    setResult("");
  };

  const handleDelete = () => {
    setResult(Result.slice(0, -1));
    // setResult((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setResult(eval(Result).toString());
    } catch (error) {
      console.log(eval(Result), error);
      setResult("Error");
    }
  };

  const Keyboard = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    ".",
    "0",
    "=",
    "/",
  ];

  return (
    <div className="App">
      <div className="route-title">Calculator</div>
      <div className="calculator">
        <div className="display">{Result}</div>
        <div className="buttons">
          <div className="button-container">
            <button className="operator" onClick={handleClear}>
              Clear
            </button>
            <button className="operator" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <div className="keyboard">
            {Keyboard.map((key) => {
              if (key === "=")
                return (
                  <button onClick={handleEqual} key={key} name={key}>
                    {key}
                  </button>
                );
              else
                return (
                  <button onClick={handleClick} key={key} name={key}>
                    {key}
                  </button>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cal;
