import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonPrimaryProps {
  className?: string;
}

const ButtonPrimary : React.FC< ButtonPrimaryProps> = ({ className }) => {
  return (
    <Button>Sign In</Button>
  );
};

export default ButtonPrimary;
