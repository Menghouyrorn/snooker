"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { SKButtonCard } from "../atoms";
import { useRouter } from "next/navigation";
import { SKTimeCounter } from "../molecules";

export default function SKSnookerCard(props) {
  const [time, setTime] = React.useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = React.useState();
  const [status, setStatus] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [sta, setSta] = React.useState(false);
  const rounter = useRouter();
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
    setSta(true);
  };
  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  React.useLayoutEffect(() => {
    localStorage.setItem("time", JSON.stringify(time));
    let data;
    if (localStorage.getItem("time")) {
     data = JSON.parse(localStorage.getItem("time"));
      
    } else {
      localStorage.setItem("time", JSON.stringify(time));
    }
    // setTime({
    //   ms:data["ms"],
    //   s: data["s"],
    //   m: data["m"],
    //   h:data["h"],
    // });
    console.log(data['s'])
  },[time]);

  return (
    <div
      style={{
        borderRadius: "3px",
        height: "350px",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
      }}
      className="lg:w-[auto] md:w-[270px] sm:h-[280px]"
    >
      <div className="w-[100%] m-0 p-0 flex flex-col gap-y-2">
        <Image
          shadow="sm"
          radius="none"
          width="100%"
          alt={props.title}
          className="object-cover h-[150px]"
          style={{ borderRadius: "3px" }}
          src={props.img}
        />
        <p style={{ fontFamily: "Barlow" }} className="ml-3 font-bold">
          {props.name}
        </p>
        <p className="ml-3 text-[#7D7878]">Location : {props.location}</p>
        <div className="flex flex-col gap-y-3 items-center">
          <SKTimeCounter time={time} />
          <p className="text-green-600">
            {sta == true ? "Unavilable" : props.status}
          </p>
          <SKButtonCard status={status} start={start} add={"/sk-orderform"} />
        </div>
      </div>
    </div>
  );
}
