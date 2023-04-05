import React, { useState } from "react";
import "./App.css";

export default function App() {
  let [result, setResult] = useState("");

  const handleClick = (e) => {
    if (e.target.innerText == "x") {
      setResult(result + e.target.value);
    } else if (e.target.value == "root") {
      result = Math.sqrt(result);
      setResult(result);
    } else {
      setResult(result + e.target.innerText);
    }
  };

  const del = () => {
    setResult(result.slice(0, -1));
  };
  const clear = () => {
    setResult("");
  };
  const calc = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };

  return (
    <div className="whole">
      <h1 className="heading">Calculator 📏</h1>

      <div className="container">
        <form action="">
          <input type="text" value={result} className="inp" />
        </form>

        <div className="calc">
          <button onClick={clear} className="clear">
            Clear
          </button>
          <button onClick={del} className="del">
            del
          </button>

          <button onClick={handleClick}>&#x28;</button>
          <button onClick={handleClick}>)</button>
          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button onClick={handleClick}>/</button>
          <button value="root" onClick={handleClick}>
            &#8730;
          </button>
          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button onClick={handleClick}>%</button>
          <button value="*" onClick={handleClick}>
            x
          </button>
          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button onClick={handleClick}>+</button>
          <button onClick={handleClick}>-</button>
          <button onClick={handleClick}>.</button>
          <button onClick={handleClick}>0</button>
          <button onClick={handleClick}>&#177;</button>
          <button className="equal" onClick={calc}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
