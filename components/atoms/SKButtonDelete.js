"use client";
import React from "react";
import { Image, Button } from "@nextui-org/react";

export default function SKButtonDelete({ icon,click}) {
  return (
    <>
     
        <Button
          type="button"
          className=" bg-white text-center m-0 p-0 flex flex-col justify-center items-center"
          style={{ width: "50px", height: "50px", borderRadius: "4px" }}
          isIconOnly
          radius="none"
          onClick={click}
        >
          <Image
            alt="icon"
            className="object-cover m-0 p-0"
            src={icon}
            width={15}
          />
        </Button>
    </>
  );
}