import React, { useState } from "react";

export const Card = () => {
  const MIN_MONTO = 10000;
  const MAX_MONTO = 1200000;

  const [monto, setMonto] = useState(MAX_MONTO);

  const handleChangeMonto = (newMonto) => {
    setMonto(newMonto);
  };
  return (
    <div className=" font-display h-96 w-52 bg-slate-50 rounded-lg text-white flex flex-col">
      <div className="h-40 w-full bg-slate-200 flex flex-col rounded-t-lg">
        <p className=" text-blue-700 text-sm mt-6 text-center">
          Elegí el monto que necesitás
        </p>
        <div className="w-full flex justify-center items-center">
          <p>$</p>
          <input
            className="mt-2 text-3xl text-blue-600 w-3/4 bg-transparent px-5"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          ></input>
        </div>
        <div className="mx-3 mt-2 h-full">
          <div className="w-full h-3/4 relative flex justify-center items-center">
            <span className="text-slate-500 text-xs absolute left-0  bottom-0">
              ${MIN_MONTO}
            </span>
            <input
              className="w-full"
              min={MIN_MONTO}
              max={MAX_MONTO}
              value={monto}
              type="range"
              onChange={(e) => setMonto(e.target.value)}
            ></input>
            <span className="text-slate-500 text-xs absolute right-0 bottom-0">
              ${MAX_MONTO}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
