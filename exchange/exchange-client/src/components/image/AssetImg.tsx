import React from "react";
import Image from "next/image";

const imageLoader = ({ src } : any) => {
  return src;
};

const AssetImg = ({ src }: any) => {
  return (
    <Image
      loader={imageLoader}
      src={src}
      alt="Picture of the author"
      width={8}
      height={8}
    />
  );
};

export default AssetImg;
