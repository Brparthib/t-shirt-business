import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div className='p-3 border-rose-500 rounded-xl'>
            <h2>Myself</h2>
            <p>Gift: {house}</p>
            <button onClick={() => setHouse(house+1)}>Increase</button>
        </div>
    );
};

export default Myself;