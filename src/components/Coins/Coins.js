import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins,setCoins] = useState([])
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => res.json())
        .then(data => {console.log(data)
            setCoins(data);
        })
    },[])
    return (
        <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
            <h3 className='text-center text-3xl font-bold text-gray'>Available Crypto Currencies</h3>
            <p className='text-center pt-3 text-xl text-gray-600'>Total Coins : {coins.length}</p>
            <div className= 'mt-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard>)
            }
            </div>
        </div>
    );
};

export default Coins;