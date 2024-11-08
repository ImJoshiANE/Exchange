import React from "react";
import { assetType } from "@/types/asset";

interface TickerRowProps {
  asset: assetType;
  className?: string; // Optional className prop for Tailwind CSS
}

const TickerRow: React.FC<TickerRowProps> = ({ asset, className }) => {
  return (
    <div className={`flex flex-row ${className}`}>
      <div className="flex flex-row justify-between items-center bg-gray-200 p-2  pl-4 pr-4 rounded-xl">
        <img
          src={asset.image}
          alt={`image of asset ${asset.name}`}
          className="w-6 h-6 mr-3"
        />
        <h3 className="font-semibold text-xl">{asset.symbol}</h3>
      </div>
      <TickerInfo className="ml-8 mr-4" title="Price" value={"$"+asset.price} />
      <TickerInfo className={`ml-4 mr-4 + ${asset.change < 0 ? "text-red-700" : "text-green-700"}`} title="24H Change" value={asset.change} />
      <TickerInfo className="ml-4 mr-4" title="24H High" value={asset.change} />
      <TickerInfo className="ml-4 mr-4" title="24H Low" value={asset.change} />
      <TickerInfo className="ml-4" title="24H Volume" value={asset.change} />
    </div>
  );
};

export default TickerRow;

const TickerInfo = ({
  title,
  value,
  className,
}: {
  title: string;
  value: number | string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h4 className="text-xs font-semibold !text-gray-500">{title}</h4>
      <p className="font-semibold text-lg">{value}</p>
    </div>
  );
};
