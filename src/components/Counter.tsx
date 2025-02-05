import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Počet shlédnutí: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>
    );
}

export default Counter;