import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const RingContext = createContext("Matir Ring");
export const MoneyContext = createContext(10000000);

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(10000000);
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="grandpa text-center border border-rose-500 m-5 rounded-xl p-5">
          <h2>Grandpa</h2>
          <section className="flex">
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default Grandpa;
