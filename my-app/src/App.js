import { useState } from "react";
import Item from "./components/Item";

export default function App() {
  const [numbers, setNumbers] = useState([0, 1, 1]);

  const getNextNumber = () => {
    const nextNumber = numbers[numbers.length - 1] + numbers[numbers.length - 2];
    setNumbers([...numbers, nextNumber]);
  }

  return (
    <div className="container">
      <div className="slider">
        <div className="item-list">
          {numbers.length > 0 && numbers.map((item,index) => {
            return (<Item key={index} number={item} styleClass={"color"} />)
          })
          }
        </div>
        <div className="navigation">
          <button className="arrow">-</button>
          <button className="arrow" onClick={getNextNumber}>+</button>
        </div>
      </div>
    </div>
  );
}
