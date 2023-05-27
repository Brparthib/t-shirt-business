import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className='p-3 border-rose-500 rounded-xl'>
            <h2>Father</h2>
            <section className='flex m-5 rounded-xl p-5'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;