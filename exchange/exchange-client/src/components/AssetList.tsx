"use client";
import React from "react";
import Link from 'next/link'
import Image from 'next/image'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AssetListProps {
  className?: string;
}

const assetList = [
  {
    id: "adfvadfs",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
  {
    id: "ad51885s",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: 3.6,
  },
  {
    id: "ad0313",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
  {
    id: "89sd89fs",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: 2.36,
  },
  {
    id: "adfvad",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: 5.36,
  },
  {
    id: "ad5188",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: 12.36,
  },
  {
    id: "ad033",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
  {
    id: "789d89s",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -20.36,
  },
  {
    id: "88",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
  {
    id: "6",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
  {
    id: "719s",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
];

const AssetList: React.FC<AssetListProps> = ({ className }) => {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-[300px]">Name</TableHead>
          <TableHead className="text-right"> Price</TableHead>
          <TableHead className="text-right">Market Cap</TableHead>
          <TableHead className="text-right">24H Volume</TableHead>
          <TableHead className="text-right">24H Change</TableHead>
          <TableHead className="text-right">Last 7 Days</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assetList.map((asset) => (
          <TableRow key={asset.id} className="h-14 font-medium text-base">
            <TableCell className="flex items-center">
              <img src={asset.image} className="h-8 w-8 mr-3" />
              <div className="flex flex-col">
                <h6>{asset.name}</h6>
                <p className="text-xs">BTC</p>
              </div>
            </TableCell>
            <TableCell className="text-right">{asset.price}</TableCell>
            <TableCell className="text-right">{asset.marketCap}</TableCell>
            <TableCell className="text-right">{asset.vloume}</TableCell>
            <TableCell className={asset.change < 0 ? "text-red-800 text-right " : "text-green-800 text-right"}>{asset.change}</TableCell>
            <TableCell className="text-right">{asset.change}</TableCell>  
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssetList;
