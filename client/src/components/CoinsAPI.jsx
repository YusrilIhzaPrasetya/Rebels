import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCoins } from "../redux/actions/coinAction";
import CoinComponent from "./CoinComponent";

const CoinsAPI = () => {
  const coins = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(coins)
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        dispatch(setCoins(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("Coins:", coins);
  return (
    <div>
      <CoinComponent />
    </div>
  );
};

export default CoinsAPI;
