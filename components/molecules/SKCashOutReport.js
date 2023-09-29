"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function SKCashOutReport() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cash Out Report
              </ModalHeader>
              <ModalBody>
                <table className="w-full">
                  <tr>
                    <td> {"Cashier Code"} </td>
                    <td> {"ADMN"} </td>
                  </tr>
                  <tr>
                    <td> {"Cash Out Date"} </td>
                    <td> {"9/11/2023 11:44:46PM"} </td>
                  </tr>
                  <tr>
                    <td>{"Shaf Close Code"}</td>
                    <td>{"31726"}</td>
                  </tr>
                </table>

                <table className="w-full border border-solid border-black">
                  <tr className="text-left border border-solid border-black ">
                    <th className=" border border-solid border-black p-2">
                      {"Currehcy"}
                    </th>
                    <th className=" border border-solid border-black p-2">
                      {" Amount"}
                    </th>
                  </tr>
                  <tr>
                    <td className=" border border-solid border-black p-2">
                      {"Riel"}
                    </td>
                    <td className=" border border-solid border-black p-2">
                      {"48500"}
                    </td>
                  </tr>
                  <tr>
                    <td className=" border border-solid border-black p-2">
                      {"Dollar"}
                    </td>
                    <td className=" border border-solid border-black p-2">
                      {"50.00"}
                    </td>
                  </tr>
                </table>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Print
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
