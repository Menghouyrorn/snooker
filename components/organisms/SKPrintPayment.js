"use client";
import React, { useRef } from "react";
import { ScrollShadow, user } from "@nextui-org/react";

import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function SKPrintPayment() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState();

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/order`)
      .then((res) => res.json())
      .then((data) => {
        let dataorder = Object.assign(
          data["orderplay"].concat(data["orderitem"])
        );
        setData(dataorder);
      });
  }, []);
  const columns = [
    {
      key: "key",
      label: "Item",
    },
    {
      key: "qty",
      label: "បរិមាណ",
    },
    {
      key: "amount",
      label: "Amount",
    },
  ];
  React.useEffect(() => {
    var alltotal = 0;
    for (let i = 0; i < data.length; i++) {
      alltotal += Number(data[i].amount);
    }
    setTotal(alltotal);
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Button
        type="button"
        className=" bg-white text-center m-0 p-0 flex flex-col justify-center items-center"
        style={{ width: "50px", height: "50px", borderRadius: "4px" }}
        isIconOnly
        radius="none"
        onPress={onOpen}
      >
        <Image
          alt="icon"
          className="object-cover m-0 p-0"
          src={"./icons/printer.png"}
          width={25}
        />
        <p className="mt-1 text-xs">បោះពុម្ព</p>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Print Payment
              </ModalHeader>
              <ModalBody>
                <ScrollShadow
                  hideScrollBar
                  className="h-[500px]"
                  orientation="horizontal"
                >
                  <div className="ml-2 mt-2 flex justify-between mr-20 w-[100%]">
                    <p className="w-[50%]">Company</p>
                    <p className="w-[50%]">Champoin Snooker</p>
                  </div>
                  <div className="ml-2 mt-4 flex justify-between mr-20 w-[100%]">
                    <p className="w-[50%]">Cashier</p>
                    <p className="w-[50%]">Staff 1</p>
                  </div>
                  <div className="ml-2 mt-4 flex justify-between mr-20 w-[100%]">
                    <p className="w-[50%]">Print Date</p>
                    <p className="w-[50%]">
                      {data[0].stopdate} <span>{data[0].stoptime}</span>
                    </p>
                  </div>
                  <div className="ml-2 mt-4 flex justify-between mr-20 w-[100%]">
                    <p className="w-[50%]">Start Time</p>
                    <p className="w-[50%]">
                      {data[0].startdate} <span>{data[0].starttime}</span>
                    </p>
                  </div>
                  <div className="ml-2 mt-4 mb-4 flex justify-between mr-20 w-[100%]">
                    <p className="w-[50%]">End Time</p>
                    <p className="w-[50%]">
                      {data[0].stopdate} <span>{data[0].stoptime}</span>
                    </p>
                  </div>

                  <Table removeWrapper>
                    <TableHeader columns={columns}>
                      {(column) => (
                        <TableColumn key={column.key}>
                          {column.label}
                        </TableColumn>
                      )}
                    </TableHeader>
                    <TableBody items={data}>
                      {(item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.name}</TableCell>
                          {item.qty > 0 ? (
                            <TableCell>{item.qty}</TableCell>
                          ) : (
                            <TableCell>{item.starttime}</TableCell>
                          )}
                          {item.qty > 0 ? (
                            <TableCell className="flex items-center">
                              {(item.price * item.qty).toFixed(3)}
                            </TableCell>
                          ) : (
                            <TableCell>{item.amount}</TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                  <div className="ml-2 mt-10 flex justify-between mr-20">
                    <p>Total for Item</p>
                    <p>
                      {total} <span className="ml-2">$</span>
                    </p>
                  </div>
                  <div className="ml-2 mt-10 flex justify-between mr-20">
                    <p>Total for Invoice</p>
                    <p>
                      {total} <span className="ml-2">$</span>
                    </p>
                  </div>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={() => handlePrint()}
                >
                  Print
                </Button>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        <div className="invisible absolute">
          <ComponentToPrint props={data} ref={componentRef} />
        </div>
      </Modal>
    </>
  );
}
