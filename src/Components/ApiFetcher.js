import { React, useEffect, useState } from "react";
import axios from "axios";
function ApiFetcher({ stockSearchSymbol, getPrices, getSent, getSign }) {
  const posts = useState(null);
  let dataPrices = {};
  useEffect(() => {}, []);
  return (
    <div>
      <button
        onClick={() => {
          axios
            .get(
              "https://finnhub.io/api/v1/quote?symbol=" +
                stockSearchSymbol +
                "&token=c0jhduv48v6tjhjjm7rg"
            )
            .then((response) => {
              console.log(response);
              return response.data;
            })
            .then((data) => {
              let dataPrices = data;
              console.log(dataPrices);
              getPrices(dataPrices);
              getSent(true);
              getSign(stockSearchSymbol);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Search
      </button>
    </div>
  );
}

export default ApiFetcher;
