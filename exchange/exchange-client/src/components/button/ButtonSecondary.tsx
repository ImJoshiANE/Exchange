import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonSecondaryProps {
  className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ className }) => {
  return (
    <Button variant="outline" className={className}>
      Log In
    </Button>
  );
};

export default ButtonSecondary;
