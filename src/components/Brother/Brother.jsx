import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className='mx-2 p-3 border-rose-500 rounded-xl'>
            <h2>Brother</h2>
            <p>Gift: {money}</p>
        </div>
    );
};

export default Brother;