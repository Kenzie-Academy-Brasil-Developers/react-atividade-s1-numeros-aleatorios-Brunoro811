import "./style.css";
import { useState } from "react";

const Number = () => {
  const [count, setCount] = useState(0);
  function randonNumber() {
    setCount(Math.floor(Math.random() * 100) + 1);
    let query = document.querySelector(".Number-span");
    query.classList.add("FadeIn");
    setTimeout(function () {
      query.classList.remove("FadeIn");
    }, 500);
  }
  return (
    <div className="Number">
      <span className="Number-span">{count}</span>
      <button className="Button" onClick={randonNumber}>
        Gerar
      </button>
    </div>
  );
};
export default Number;
