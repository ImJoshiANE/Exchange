import ChartComponent from "@/components/ChartComponent";
import TickerRow from "@/components/TickerRow";
import { assetType } from "@/types/asset";

const asset: assetType = {
  id: "adfvadfs",
  image: "https://avatar.iran.liara.run/public",
  name: "Bitcoin",
  symbol: "BTC",
  change: -2.36,
  high: 34.7,
  low: 18.1,
  price: 20.6,
  vloume: 370505.9,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div className="flex flex-row justify-between ml-2 mr-2">
      <div className="flex flex-col w-[75%] ml-2 mr-1">
        <TickerRow asset={asset} className="pl-4 mb-1" />
        <div className="flex flex-row mt-1">
          <div className="w-[75%] mr-1 pl-4">
            <ChartComponent />
          </div>
          <div className="w-[25%] ml-1">Depth Data</div>
        </div>
      </div>
      <div className="w-[25%] ml-1 mr-2">
        <div>Buy Sell</div>
        Buy Sell Component
      </div>
    </div>
  );
}
