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

const assetList = [
  {
    id: "adfvadfs",
    image: "/",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
  {
    id: "ad51885s",
    image: "/",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
  {
    id: "ad0313",
    image: "/",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
  {
    id: "789sd89fs",
    image: "/",
    name: "Bitcoin",
    price: "20",
    marketCap: "64B",
    vloume: "216.6K",
    change: -2.36,
  },
];

const AssetList = () => {
  return (
    <Table>
      <TableCaption>A list of Assest available on exchange.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Market Cap</TableHead>
          <TableHead className="text-right">24H Volume</TableHead>
          <TableHead className="text-right">24H Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assetList.map((asset) => (
          <TableRow key={asset.id}>
            <TableCell className="font-medium">{asset.name}</TableCell>
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