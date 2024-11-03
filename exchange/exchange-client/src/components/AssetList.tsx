"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface AssetListProps{
  className?: string
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
    change: -2.36,
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
    change: -2.36,
  },
  {
    id: "adfvad",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
  {
    id: "ad5188",
    image: "https://avatar.iran.liara.run/public",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
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
    change: -2.36,
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

const AssetList : React.FC<AssetListProps> = ({className}) => {
  return (
    <Table className={className}>
      {/* <TableCaption>A list of Assest available on exchange.</TableCaption> */}
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-[300px]">Name</TableHead>
          <TableHead className="text-right">  Price</TableHead>
          <TableHead className="text-right">Market Cap</TableHead>
          <TableHead className="text-right">24H Volume</TableHead>
          <TableHead className="text-right">24H Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assetList.map((asset) => (
          <TableRow key={asset.id} className="h-14 font-medium text-base">
            <TableCell className="flex items-center"><img src={asset.image} className="h-8 mr-3"/>{asset.name}</TableCell>
            <TableCell className="text-right">{asset.price}</TableCell>
            <TableCell className="text-right">{asset.marketCap}</TableCell>
            <TableCell className="text-right">{asset.vloume}</TableCell>
            <TableCell className="text-right">{asset.change}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssetList;