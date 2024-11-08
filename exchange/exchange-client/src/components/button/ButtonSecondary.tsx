import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonSecondaryProps {
  name: string;
  className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  name,
  className,
}) => {
  return (
    <Button variant="outline" className={className}>
      {name}
    </Button>
  );
};

export default ButtonSecondary;
