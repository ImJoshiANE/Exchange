import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonPrimaryProps {
  name : string,
  className?: string;
}

const ButtonPrimary : React.FC< ButtonPrimaryProps> = ({ name, className }) => {
  return (
    <Button>{name}</Button>
  );
};

export default ButtonPrimary;
