"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function SKButtonOptionSmall({ icon, title }) {
  return (
    <>
      <Button
        type="button"
        className=" bg-white text-center m-0 p-0 flex flex-col justify-center items-center"
        style={{width:'50px',height:'50px',borderRadius:'4px'}}
        isIconOnly
        radius="none"
      >
          <Image alt="icon" className="object-cover m-0 p-0"  src={icon} width={25} />
        <p className="mt-1 text-xs">{title}</p>
      </Button>
    </>
  );
}
