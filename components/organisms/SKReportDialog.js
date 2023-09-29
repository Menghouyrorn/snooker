"use client";
import React from "react";
import { ScrollShadow } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
export default function SKReportDialog() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
          src={"./icons/payment-method.png"}
          width={25}
        />
        <p className="mt-1 text-xs">ទូទាត់</p>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Close Drawer Report
              </ModalHeader>
              <ModalBody>
                <ScrollShadow
                  hideScrollBar
                  className="h-[400px]"
                  orientation="horizontal"
                >
                  <table className="font-sans">
                    <tr className="text-left">
                      <td>Company</td>
                      <td>Champoin Snooker</td>
                    </tr>
                    <tr>
                      <td>Cashier</td>
                      <td>Adminidtrator</td>
                    </tr>
                    <tr>
                      <td>Draw Date</td>
                    </tr>
                    <tr>
                      <td>Print Date</td>
                      <td>9/11/2023 11:44:46PM</td>
                    </tr>
                    <tr>
                      <td>Start Time</td>
                      <td>10-Sep-2023 11:56</td>
                    </tr>
                    <tr>
                      <td>End Time</td>
                      <td>10-Sep-2023 11:57</td>
                    </tr>
                    <tr className="text-left bg-slate-200 ">
                      <th>Item</th>
                      <th>Qly</th>
                      <th>Amount</th>
                    </tr>
                    <tr>
                      <td>Lease</td>
                      <td>042.00</td>
                      <td>185.75</td>
                    </tr>
                    <tr>
                      <td>Mineral Water</td>
                      <td>26.00</td>
                      <td>13.00</td>
                    </tr>
                    <tr>
                      <td>Coca Cola</td>
                      <td>1.00</td>
                      <td>0.50</td>
                    </tr>
                    <tr>
                      <td>Sting</td>
                      <td>1.00</td>
                      <td>0.50</td>
                    </tr>
                    <tr>
                      <td>Red Bull</td>
                      <td>1.00</td>
                      <td>0.50</td>
                    </tr>
                    <tr>
                      <td>Baccus</td>
                      <td>1.00</td>
                      <td>0.50</td>
                    </tr>
                    <Divider className="my-4" />
                    <tr>
                      <td>Total for Item</td>
                      <th className="text-right">214.75</th>
                    </tr>
                    <tr>
                      <td>Total for Invoice</td>
                      <td className="text-right">214.74</td>
                    </tr>
                    <tr>
                      <td>Numer of Void</td>
                      <td className="text-right">0.00</td>
                    </tr>
                    <tr>
                      <td>Void Amount</td>
                      <td className="text-right">0.00</td>
                    </tr>
                    <tr>
                      <td className="font-bold">CASH</td>
                    </tr>
                    <tr>
                      <td>Cash In</td>
                      <td className="text-right">12.56</td>
                    </tr>
                    <tr>
                      <td>Tender</td>
                      <td className="text-right">214.75</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td className="text-right">0.00</td>
                    </tr>
                    <tr>
                      <td>Addition Charge</td>
                      <td className="text-right">0.00</td>
                    </tr>
                    <tr>
                      <td>Service Charge</td>
                      <td className="text-right">0.00</td>
                    </tr>
                    <tr>
                      <td>VAT</td>
                      <td className="text-right">0.00</td>
                    </tr>
                    <tr>
                      <td></td>
                      <th className="text-right">214.75</th>
                    </tr>
                    <tr>
                      <td>Total AF</td>
                      <td className="text-right">0.00</td>
                    </tr>
                  </table>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Print
                </Button>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
