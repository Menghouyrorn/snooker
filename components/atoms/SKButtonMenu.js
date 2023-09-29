"use client";
import React from "react";
import { Button } from "@nextui-org/react";

export default function SKButtonMenu(props) {
  const clickHandler = (keyID) => {
    props.onChange(keyID);
  };
  return (
    <>
      <Button
        type="button"
        onClick={() => clickHandler(props.test)}
        className={
          props.disabled === props.test
            ? "w-44 h-10 transition-none mt-3 text-white font-bold text-base bg-[#118AEF]"
            : "w-44 h-10 transition-none mt-3 text-black font-bold text-base bg-white"
        }
      >
        {props.title}
      </Button>
    </>
  );
}
