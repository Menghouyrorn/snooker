"use client";
import React from "react";
import { Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function SKButtonOption({ icon, title, goto }) {
  return (
    <>
      <Link href={goto}>
        <Button
          type="button"
          className=" bg-white text-center m-0 p-0 flex flex-col justify-center items-center"
          style={{ width: "50px", height: "50px", borderRadius: "4px" }}
          isIconOnly
          radius="none"
        >
          <Image
            alt="icon"
            className="object-cover m-0 p-0"
            src={icon}
            width={25}
          />
          <p className="mt-1 text-xs">{title}</p>
        </Button>
      </Link>
    </>
  );
}
