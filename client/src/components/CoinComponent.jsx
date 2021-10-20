import React, {useState} from "react";
import { useSelector } from "react-redux";
import "../styles/coinComponent.css"



const CoinComponent = () => {
    const coins = useSelector((state) => state.allCoins.coins);
    const [search, setSearch] = useState("");
    const filteredCoins = coins.map((coin) => {
    const { id, image, name, symbol, current_price, market_cap, price_change_percentage_24h } = coin;
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
    
      const filteringCoins = coins.filter(() =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );
    return (
      <>
      <div className="boddy-coin">
        <div className="pembungkus-coin-container">
          <div className='coin-container'>
            <div className='coin-row' key={id}>
              <div className='coin'>
                <img src={image} alt="crypto" /> 
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
              </div>
              <div className='coin-data'> 
                <p className='coin-price'> Rp.{current_price.toLocaleString(['id'])}</p>
                <p className='coin-volume'>Rp.{market_cap.toLocaleString(['id'])}</p>
                {price_change_percentage_24h < 0 ? (
                <p className='coin-percent red'>{price_change_percentage_24h.toFixed(2)}%</p>
              ) : (
                <p className='coin-percent green'>{price_change_percentage_24h.toFixed(2)}%</p>
              )}
              </div>
            </div>
          </div>
        </div>
       </div>
       </>
      );
  });

  return <>{filteredCoins}</>
};

export default CoinComponent;
