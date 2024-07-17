"use client";

import { useEffect, useState } from "react";
import { getDepth, getKlines, getTicker, getTrades } from "../../utils/httpClient";
import { BidTable } from "./BidTable";
import { AskTable } from "./AskTable";
import { SignalingManager } from "@/app/utils/SignalingManager";

export function Depth({ market }: {market: string}) {
    const [bids, setBids] = useState<[string, string][]>();
    const [asks, setAsks] = useState<[string, string][]>();
    const [price, setPrice] = useState<string>();

    useEffect(() => {
        SignalingManager.getInstance().registerCallback("depth", (data: any) => {
            
            setBids((originalBids) => {

                if(!originalBids) return data.bids;

                for (let i = 0; i < originalBids.length; i++) {
                    for (let j = 0; j < data.bids.length; j++)  {
                        if (originalBids[i][0] === data.bids[j][0]) {
                            originalBids[i][1] = data.bids[j][1];
                            break;
                        }
                    }
                }

                const bidsAfterUpdate : any[] = [];
                for(let i=0; i<originalBids.length; i++){
                    if(originalBids[i][1] !== "0.00"){
                        bidsAfterUpdate.push(originalBids[i]);
                    }
                }

                return bidsAfterUpdate; 
            });

            setAsks((originalAsks) => {

                if(!originalAsks) return data.asks;

                for (let i = 0; i < originalAsks.length; i++) {
                    for (let j = 0; j < data.asks.length; j++)  {
                        if (originalAsks[i][0] === data.asks[j][0]) {
                            originalAsks[i][1] = data.asks[j][1];
                            break;
                        }
                    }
                }

                const asksAfterUpdate : any[] = [];
                for(let i=0; i<originalAsks.length; i++){
                    if(originalAsks[i][1] !== "0.00"){
                        asksAfterUpdate.push(originalAsks[i]);
                    }
                }

                return asksAfterUpdate; 
            });
        }, `DEPTH-${market}`);
        
        SignalingManager.getInstance().sendMessage({"method":"SUBSCRIBE","params":[`depth.${market}`]});

        getDepth(market).then(d => {    
            setBids(d.bids.reverse());
            setAsks(d.asks);
        });

        getTicker(market).then(t => setPrice(t.lastPrice));
        getTrades(market).then(t => setPrice(t[0].price));
        // getKlines(market, "1h", 1640099200, 1640100800).then(t => setPrice(t[0].close));
        return () => {
            SignalingManager.getInstance().sendMessage({"method":"UNSUBSCRIBE","params":[`depth.200ms.${market}`]});
            SignalingManager.getInstance().deRegisterCallback("depth", `DEPTH-${market}`);
        }
    }, [market])
    
    return <div>
        <TableHeader />
        {asks && <AskTable asks={asks} />}
        {price && <div>{price}</div>}
        {bids && <BidTable bids={bids} />}
    </div>
}

function TableHeader() {
    return <div className="flex justify-between text-xs">
    <div className="text-white">Price</div>
    <div className="text-slate-500">Size</div>
    <div className="text-slate-500">Total</div>
</div>
}