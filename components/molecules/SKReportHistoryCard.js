"use client";
import React from "react";
import { Image, } from "@nextui-org/react";

export default function SKReportHistoryCard({ id, src, name, date, hour }) {
  return (
    <>
      <tr style={{ borderBottom: "1px solid #000" }} className="w-[80%]">
        <td className="p-2">
          {id}
        </td>
        <td className="p-2">
          <Image
            alt="img"
            height={100}
            radius="sm"
            src={src}
            width={50}
          />
        </td>
        <td className="p-2">
          {name}
        </td>
        <td className="text-right p-2">
          {date}
        </td>
        <td className="text-right p-2">
          {hour}
        </td>
      </tr>
    </>
  );
}