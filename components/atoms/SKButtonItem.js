"use client";
import React from "react";
import { Button } from "@nextui-org/react";

export default function SKButtonItem(props) {
  const clickHandler = (keyID) => {
    props.onChange(keyID);
  };
  return (
    <div>
      <Button
        type="button"
        style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}
        radius="sm"
        onClick={()=>clickHandler(props.id)}
        className="lg:w-44 md:w-44 sm:w-44 mt-3 h-11 text-black font-bold text-base bg-white"
      >
        {props.name}
      </Button>
    </div>
  );
}
