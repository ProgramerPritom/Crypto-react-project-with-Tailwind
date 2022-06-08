import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id} = useParams();
    const [coin,setCoin] = useState({})

    useEffect( ()=> {
        const url =`https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[id]);


    return (
        <div>
            <h3>This is CoinDetails page!</h3>
        </div>
    );
};

export default CoinDetails;