import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id} = useParams();
    const [coin,setCoin] = useState({})

    useEffect( ()=> {
        const url =`https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCoin(data))
    },[id]);


    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div className='order-2 md:order-1'>
                    <h2 className='text-3xl'>General Info: </h2>
                    <hr />
                    <h3>Coin Name : {coin.name}</h3>
                    <h3>Market Rank : {coin.market_cap_rank}</h3>
                    <h3>Origin : {coin.country_origin ? coin.country_origin : 'Not Found'}</h3>
                    <h3>Hasing Algorithm : {coin.hashing_algorithm}</h3>
                    <h3>Genesis Date : {coin.genesis_date}</h3>
                    <h3>Last Updated : {coin.last_updated}</h3>

                    <h2 className='text-3xl pt-4'>Scores: </h2>
                    <hr />
                    <h3>Community score : {coin.community_score}</h3>
                    <h3>Developer score : {coin.developer_score}</h3>
                    <h3>Liquidity score : {coin.liquidity_score}</h3>
                    <h3>Public Interest score : {coin.public_interest_score}</h3>
                </div>
                <div className='flex justify-center items-center order-1 md:order-2'>
                    <img src={coin.image?.large} alt="coin-img" />
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;