import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([""]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState(0);
  const [coinsConverted, setCoinsConverted] = useState(0);
  useEffect(() => {
    if (!loading)
      setCoinsConverted((input / coins[index].quotes.USD.price).toFixed(4));
  }, [input, index]);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  const onChange = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={index} onChange={onSelect}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.rank - 1}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <input
          onChange={onChange}
          type="number"
          placeholder="Dollars you have"
        ></input>
      </div>
      <div>
        <h3>
          You have {coinsConverted} {coins[index].name}s
        </h3>
      </div>
    </div>
  );
}

export default App;
