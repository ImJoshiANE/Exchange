import React from "react";
import ButtonPrimary from "./button/ButtonPrimary";
import ButtonSecondary from "./button/ButtonSecondary";

interface Headerprops {
  className?: string;
}


const Header : React.FC<Headerprops> = ({className}) => {
  return (
    <div className={`flex flex-row justify-between ${className}`}>
      <div className="flex justify-center items-center">
      <h2 className="font-bold mr-4   text-lg">Exchange</h2>
      <h3 className="font-bold">Market</h3>
      </div>
      <div className="flex">
        <ButtonSecondary className="mr-4" />
        <ButtonPrimary className="mr-4" />
      </div>
    </div>
  );
};

export default Header;
