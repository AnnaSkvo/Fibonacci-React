import { useState, useCallback, useEffect } from "react";
import Item from "./components/Item";

const colorList = ["one", "two", "three", "four", "five"];
const initialNumber = 1;
const initialColors = ["one", "two", "three"];

const saveInStorage = (key, arr) => {
  localStorage.setItem(key, JSON.stringify(arr));
};

export default function App() {
  const [numbers, setNumbers] = useState([0, 1, 1]);
  const [number, setNumber] = useState(localStorage.getItem('number') ? JSON.parse(localStorage.getItem('number')) : initialNumber);
  const [colors, setColors] = useState(localStorage.getItem('colors') ? JSON.parse(localStorage.getItem('colors')) : initialColors);

  const getNextNumber = () => {
    setNumber(number + 1);
    const newColor = getRandomColor();
    setColors([...colors.slice(1), newColor]);
  }

  const getPrewNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
      const newColor = getRandomColor();
      setColors([newColor, ...colors.slice(0, -1)]);
    }
  }

  const getEmptyColors = () => {
    return colorList.filter((color) => !colors.includes(color));
  };

  const getRandomColor = () => {
    return getEmptyColors()[Math.round(Math.random())];
  };

  const setArray = useCallback(() => {
    const cache = [0, 1];

    for (let i = 2; i <= number; i++) {
      cache[i % 2] = cache[0] + cache[1];
    }

    if (number % 2 === 0) {
      cache.reverse();
    }

    setNumbers([...cache, cache[0] + cache[1]]);
    saveInStorage("number", number);
  }, [number]);

  useEffect(() => {
    saveInStorage("colors", colors);
  }, [colors]);

  useEffect(() => {
    setArray();
  }, [number, setArray]);

  return (
    <div className="container">
      <div className="slider">
        <div className="item-list">
          {numbers.length > 0 && numbers.map((item, index) => {
            return (<Item key={index} number={item} styleClass={colors[index]} />)
          })
          }
        </div>
        <div className="navigation">
          {number > 1 ? (<button className="arrow" onClick={getPrewNumber}>
            <div className="arrow-move arrow-move-left">
              <div></div>
            </div>
          </button>) : (<div></div>)}
          <button className="arrow" onClick={getNextNumber}>
            <div className="arrow-move">
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
