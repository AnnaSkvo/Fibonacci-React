import { useState, useCallback, useEffect } from "react";
import Item from "./components/Item";

export default function App() {
  const [numbers, setNumbers] = useState([0, 1, 1]);
  const [number, setNumber] = useState(1);

  const getNextNumber = () => {
    setNumber(number + 1);
  }

  const getPrewNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  }

  const setArray = useCallback(() => {
    const cache = [0, 1];

    for (let i = 2; i <= number; i++) {
      cache[i % 2] = cache[0] + cache[1];
    }

    if (number % 2 === 0) {
      cache.reverse();
    }
    
    setNumbers([...cache, cache[0] + cache[1]]);
  }, [number]);

  useEffect(() => {
    setArray();
  }, [number, setArray]);

  return (
    <div className="container">
      <div className="slider">
        <div className="item-list">
          {numbers.length > 0 && numbers.map((item, index) => {
            return (<Item key={index} number={item} styleClass={"color"} />)
          })
          }
        </div>
        <div className="navigation">
          <button className="arrow" onClick={getPrewNumber}>-</button>
          <button className="arrow" onClick={getNextNumber}>+</button>
        </div>
      </div>
    </div>
  );
}
