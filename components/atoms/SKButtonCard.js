"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { SKReportDialog } from "../organisms";
import Link from "next/link";

export default function SKButtonCard(props) {
  return (
    <div>
      {props.status === 0 ? (
        <Button
          color="none"
          className="text-[#0D99FF] text-lg"
          onClick={props.start}
        >
          Start
        </Button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <Link href={props.add}>
          <Button color="none" className="text-[#0D99FF] text-lg">
            Manage 
          </Button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
