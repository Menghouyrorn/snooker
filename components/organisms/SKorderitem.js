"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
  Input,
} from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { SKButtonOptionSmall, SKButtonDelete } from "../atoms";
import { SKChangePrice } from "../molecules";
import SKReportDialog from "./SKReportDialog";
import SKPrintPayment from "./SKPrintPayment";
import { useRouter } from "next/navigation";

function SKorderitem() {
  const [order, setOrder] = React.useState([]);
  const [iditem, setIditem] = React.useState();
  const rounter = useRouter();
  React.useEffect(() => {
    fetch(`http://localhost:3000/api/order`)
      .then((res) => res.json())
      .then((data) => {
        let dataorder = Object.assign(
          data["orderplay"].concat(data["orderitem"])
        );
        setOrder(dataorder);
      });
  }, []);
  const columns = [
    {
      key: "key",
      label: "លេខ",
    },
    {
      key: "name",
      label: "ពិពណ៌នា",
    },
    {
      key: "price",
      label: "ថ្លៃលក់",
    },
    {
      key: "qty",
      label: "បរិមាណ",
    },
    {
      key: "total",
      label: "ចំនួនសរុប",
    },
  ];
  async function Delete(id) {
    const postData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    const res = await fetch(`http://localhost:3000/api/orderitem`, postData);
    const response = await res.json();
    console.log(response);
    console.log(response["message"]);
  }
  return (
    <div>
      <div
        style={{ width: "100%", height: "70px", backgroundColor: "#7D7878" }}
        className="flex justify-between"
      >
        <div className="w-[50%] flex justify-between items-center">
          <div className="ml-3 flex flex-col gap-y-2">
            <p className="text-white text-sm">ម៉ោងចូល​​​​</p>
            <p className="text-white text-sm">អតិថិជន</p>
          </div>
          <div className="mr-20 flex flex-col gap-y-2">
            <p className="text-white text-sm">12:25 PM</p>
            <p className="text-white text-sm">GENERAL</p>
          </div>
        </div>
        <div className="w-[50%] flex justify-between mt-3">
          <div className="flex flex-col gap-y-2">
            <p className="text-white text-sm">តុ</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-white text-sm mr-9">N-T 09</p>
          </div>
        </div>
      </div>
      <div style={{ height: "245px" }}>
        <ScrollShadow
          orientation="horizontal"
          hideScrollBar
          className="w-[100%] h-[240px]"
        >
          <Table removeWrapper>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={order}>
              {(item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {item.qty > 0 ? (item.price * 1).toFixed(3) : 2}
                  </TableCell>
                  {item.qty > 0 ? (
                    <TableCell>{item.qty}</TableCell>
                  ) : (
                    <TableCell>{item.starttime}</TableCell>
                  )}
                  {item.qty > 0 ? (
                    <TableCell className="flex items-center">
                      {(item.price * item.qty).toFixed(3)}
                      <SKButtonDelete
                        click={() => Delete(item.id)}
                        icon={"./icons/delete(1).png"}
                      />
                    </TableCell>
                  ) : (
                    <TableCell>1</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollShadow>
      </div>
      <div
        className="flex justify-between items-center"
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "rgba(125, 120, 120, 0.10)",
        }}
      >
        <div className="ml-3">
          <p>បញ្ចុះតម្លៃ</p>
          <p>សរុបទាំងអស់</p>
        </div>
        <div className="mr-11">
          <p>{"(0.00 %)"}</p>
          <p>3</p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "190px",
          backgroundColor: "rgba(125, 120, 120, 0.10)",
        }}
      >
        <div className="flex justify-between ">
          <div className="ml-1 flex gap-x-2">
            <SKButtonOptionSmall
              icon={"/icons/discounts.png"}
              title={"បញ្ចុះតម្លៃ"}
            />
            <SKChangePrice />
            <SKButtonOptionSmall
              icon={"./icons/project-management.png"}
              title={"R.Ord"}
            />
            <SKButtonOptionSmall icon={"./icons/enter.png"} title={"បញ្ចូល"} />
            <SKButtonOptionSmall icon={"./icons/refresh.png"} title={"ប្តូរ"} />
          </div>
          <div className="mr-2 flex gap-x-2">
            <SKButtonOptionSmall
              icon={"/icons/interview.png"}
              title={"សំណើរ"}
            />
            <SKButtonOptionSmall icon={"./icons/package.png"} title={"ខ្ចប់"} />
            <SKButtonOptionSmall
              icon={"./icons/rating.png"}
              title={"អតិថិជន"}
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="ml-1 flex justify-end mr-2 gap-x-2">
            <SKButtonOptionSmall icon={"./icons/delete.png"} title={"លុប"} />
            <SKButtonOptionSmall icon={"./icons/cutting.png"} title={"ចែក"} />
            <SKPrintPayment />
            <SKReportDialog />
          </div>
        </div>
        <div className="ml-4 mt-6">
          <div className="flex gap-x-11 items-center">
            <p>កូតទំនិញ</p>
            <input type="text" />
            <div className="flex gap-x-4">
              <Image
                src="./icons/setting.png"
                style={{ width: "17px", height: "17px" }}
                alt=""
              />
              <Image
                src="./icons/search.png"
                style={{ width: "17px", height: "17px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SKorderitem;
