"use client";
import React from "react";
import { SKReportHistoryCard } from "../../components/molecules";
import { SKUserAppBar, SKFooter } from "../../components/templates";
import { dataReportHistory } from "../../utils/constant/datarReportHistory";
import { Button, ScrollShadow } from "@nextui-org/react";

export default function ReportHistory() {
  return (
    <>
      <SKUserAppBar />

      <ScrollShadow
        orientation="horizontal"
        hideScrollBar
        className="w-[100%] lg:h-[520px] md:h-[510px] sm:h-[500px] max-sm:h-[500px]"
      >
        <div className="flex flex-col items-center mt-5 ">
        <table className="w-[80%] ">
          <tr className="text-left  bg-slate-200">
            <th className="p-2">
              {"NO"}
            </th>
            <th className="p-2">
              {" Image"}
            </th>
            <th className="p-2">
              {" Name"}
            </th>
            <th className="p-2 text-right">
              {" Start Date"}
            </th>
            <th className="p-2 text-right">
              {" Close Date"}
            </th>
          </tr> 

            {dataReportHistory.map((item, index) => {
              return (
                <SKReportHistoryCard
                  key={index}
                  id={item.id}
                  src={item.src}
                  name={item.name}
                  date={item.date}
                  hour={item.hour}
                />
              );
            })}
          </table>

        </div>

      </ScrollShadow>

      <div className="flex justify-end mt-4 lg:mr-36 md:mr-36 sm:mr-32">
        <Button color="primary" variant="light">
          Print
        </Button>
        <Button color="danger" variant="light">
          Clost Account
        </Button>
      </div>

      <SKFooter />
    </>
  );
}
