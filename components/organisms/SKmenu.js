"use client";
import React from "react";
import { SKButtonMenu } from "../atoms";
import SKSnookerCard from "./SKSnookerCard";
import { ScrollShadow } from "@nextui-org/react";

export default function SKmenu(props) {
  const [snooker, setSnooker] = React.useState([]);
  const [menusnooker, setMenusnooker] = React.useState([]);
  const [active, setActive] = React.useState(1);

  const handleClick = (value) => {
    setActive(value);
  };
  console.log(active);

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/snooker`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSnooker(data);
      });
  }, []);

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/menusnooker`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenusnooker(data);
      });
  }, []);


  var currentdate = new Date();
  var dateshow =
    currentdate.getMonth() +
    1 +
    "/" +
    currentdate.getDate() +
    "/" +
    currentdate.getFullYear();
  let amOrPm;
  let conversion
  if (currentdate.getHours() > 12) {
    amOrPm = "PM";
    let twentyFourHourTime = currentdate.getHours();
    conversion = twentyFourHourTime - 12;
  } else {
    amOrPm = "AM";
    conversion = currentdate.getHours();
  }
  let hours = conversion;
  var timeshow = hours + ":" + currentdate.getMinutes() + " " + amOrPm;
  return (
    <div className="flex h-[585px]">
      <div
        className="lg:h-[99%] md:h-[99%] sm:h-[99%] max-sm:h-[99%] w-[285px] mt-1 shadow-md  gap-y-2"
        style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="mt-5 flex flex-col items-center">
          {menusnooker.map((value, index) => {
            return (
              <SKButtonMenu
                key={index}
                onChange={handleClick}
                disabled={active}
                title={value.name}
                test={value.id}
              />
            );
          })}
        </div>
      </div>
      <div className="w-[100%] ">
        <div className="flex justify-end mr-11 mt-3 items-center">
          <p className="font-bold">
            {dateshow} {timeshow}
          </p>
        </div>
        <ScrollShadow
          orientation="horizontal"
          hideScrollBar
          className="lg:h-[92%] md:h-[92%] sm:h-[92%] max-sm:h-[92%]"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:gap-x-6 mt-1 gap-y-6 ml-3">
            {snooker.map((item, index) => {
              if (item.typeid == active) {
                return (
                  <div key={index}>
                    <SKSnookerCard
                      name={item.name}
                      img={item.img}
                      location={item.location}
                      status={item.status}
                    />
                  </div>
                );
              }
            })}
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
}
