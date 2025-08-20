import React, { useEffect, useState } from "react";
import './ExchangeRates.css'

const BASE_URL = "https://api.frankfurter.app";

export default function ExchangeRates() {
  const [base, setBase] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [ratesList, setRatesList] = useState([]);
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetchSymbols();
  }, []);

  useEffect(() => {
    getRates(base);
  }, [base]);

  const fetchSymbols = async () => {
    try {
      const res = await fetch(`${BASE_URL}/currencies`);
      const data = await res.json();
      setCurrencies(data);
    } catch (error) {
      console.error("Failed to fetch currency symbols:", error);
    }
  };

  const getRates = async (baseCurrency) => {
    try {
      const res = await fetch(`${BASE_URL}/latest?from=${baseCurrency}`);
      const data = await res.json();

      if (!data.rates) {
        console.error("No rates returned:", data);
        return;
      }

      const ratesTemp = Object.entries(data.rates).map(([symbol, rate]) => ({
        symbol,
        rate,
      }));

      setRatesList(ratesTemp);
    } catch (error) {
      console.error("Error fetching rates:", error);
    }
  };

  return (
    <div className="h1-style">
      <h1>Exchange Rates</h1>
     
     
        <select
          id="baseCurrency"
          className="custom-select"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        >
          {Object.entries(currencies).map(([code, name]) => (
            <option key={code} value={code}>
              {code} - {name}
            </option>
          ))}
        </select>
      
<div className="container1">
       
      
        <input
          id="amount"
          type="number"
          className="custom-select"
          min="1"
          step="any"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
         
        />
     
</div>
     <ul className="list-style">
  {ratesList.map(({ symbol, rate }) => (
    <li key={symbol}>
      {symbol} - {(rate * amount).toFixed(4)}
    </li>
  ))}
</ul>
    </div>
  );
}