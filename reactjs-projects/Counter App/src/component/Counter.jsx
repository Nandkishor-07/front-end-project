import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState();

  const increment = () => {
    setCount(count + 1 + amount);
  };

  const decrement = () => {
    setCount(count - 1 - amount);
  };

  const reset = () => {
    setCount(0);
    setAmount(0)
  };

  return (
    <div className="countercontainer">
      <p className="text-3xl">Count : {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button style={{ backgroundColor: "red" }} onClick={decrement}>
          Decrement
        </button>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <div className='inputfield'>
        <label className="text-xl text-black-400" htmlFor="">
          Incremented by :{" "}
        </label>
        <div>
          <input
            type="number"
            value={amount}
            defaultValue={"0"}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
