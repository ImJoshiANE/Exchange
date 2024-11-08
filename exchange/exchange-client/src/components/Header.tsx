import React from "react";
import ButtonPrimary from "./button/ButtonPrimary";
import ButtonSecondary from "./button/ButtonSecondary";
import { Input } from "./ui/input";
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
      <Input type="text" placeholder="Search Assets" className="w-[50%]" />
      <div className="flex">
        <ButtonSecondary name="Log In" className="mr-4" />
        <ButtonPrimary name="Sign In" className="mr-4" />
      </div>
    </div>
  );
};

export default Header;
