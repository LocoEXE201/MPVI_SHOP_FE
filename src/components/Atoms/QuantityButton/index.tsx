import React from "react";

interface Props {
  onIncrease: (e: any) => void;
  onDecrease: (e: any) => void;
  quantity: number;
}

const QuantityButton = ({ onIncrease, onDecrease, quantity }: Props) => {
  return (
    <div className="flex flex-row gap-2 font-baloo-2 font-semibold text-lg">
      <button
        className="w-[20px] h-[20px] flex justify-center items-center content-center border-[1px] border-solid border-chocolate rounded text-chocolate font-normal mt-1"
        onClick={onDecrease}
      >
        -
      </button>
      <div className="flex items-center content-center text-chocolate text-xl">
        {quantity}
      </div>
      <button
        className="w-[20px] h-[20px] flex justify-center items-center content-center border-[1px] border-solid border-chocolate rounded text-chocolate font-normal mt-1"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
