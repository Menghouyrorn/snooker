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
  Image,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { SKTextField } from "../atoms";

export default function SKIncomeExpenditureForm() {
  const [active, setActive] = React.useState("active");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const variants = ["underlined"];
  const sizes = ["4xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button
            type="button"
            className=" bg-white text-center m-0 p-0 flex flex-col justify-center items-center"
            style={{ width: "50px", height: "50px", borderRadius: "4px" }}
            isIconOnly
            key={size}
            onPress={() => handleOpen(size)}
            radius="none"
          >
            <Image
              alt="icon"
              className="object-cover m-0 p-0"
              src="./icons/salary.png"
              width={25}
            />
            <p className="mt-1 text-xs">លុយចូល</p>
          </Button>
        ))}
      </div>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {"ដាក់សាច់ប្រាក់ចូល"}
              </ModalHeader>
              <ModalBody>
                <div>
                  <RadioGroup orientation="horizontal"
                   value={active}
                   onValueChange={setActive}
                  >
                    <Radio value="buenos-aires">
                      {"ប្រើប្រាស់សាច់ប្រាក់សរុប"}
                    </Radio>
                    <Radio value="active" className="ml-2">
                      {"បង្ហាញ"}
                    </Radio>
                    <Radio value="san-francisco" className="ml-2">
                      {"បោះពុម្ព"}
                    </Radio>
                  </RadioGroup>
                </div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <div class="...">
                    <p className="text-base">{"By Total"}</p>
                    <br />
                    <div className="bg-zinc-100  shadow-sm rounded-md p-2">
                      <div className="bg-white rounded-md  p-2 ">
                        <div className="mt-2">
                          <SKTextField
                            type={"text"}
                            name={"dollar"}
                            placeholder={"Dollar"}
                          />
                        </div>

                        <div className="mt-2">
                          <SKTextField
                            type={"text"}
                            name={"riel"}
                            placeholder={"Riel"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="...">
                    <p className="text-base ">{"By Number"}</p>
                    <br />

                    <div className="bg-zinc-100  shadow-sm rounded-md p-2">
                      <div className="bg-white rounded-md  p-2 ">
                        <div className="mt-2">
                          <>
                            {variants.map((variant) => (
                              <div
                                key={variant}
                                className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                                style={{ borderBottom: " 1px solid #118AEF" }}
                              >
                                <Select
                                  variant={variant}
                                  label={"ប្រភេទ"}
                                  placeholder="Please select"
                                  className="w-full"
                                >
                                  <SelectItem value="dollar">Dollar</SelectItem>
                                  <SelectItem value="Riel">Riel</SelectItem>
                                </Select>
                              </div>
                            ))}
                          </>
                        </div>

                        <div className="mt-2">
                          <SKTextField
                            type={"number"}
                            name={"dollar"}
                            placeholder={"1.00"}
                          />
                        </div>

                        <div className="mt-2">
                          <SKTextField
                            type={"number"}
                            name={"dollar"}
                            placeholder={"5.00"}
                          />
                        </div>

                        <div className="mt-2">
                          <SKTextField
                            type={"number"}
                            name={"dollar"}
                            placeholder={"10.00"}
                          />
                        </div>

                        <div className="mt-2">
                          <SKTextField
                            type={"number"}
                            name={"dollar"}
                            placeholder={"20.00"}
                          />
                        </div>

                        <div className="mt-2">
                          <SKTextField
                            type={"number"}
                            name={"dollar"}
                            placeholder={"50.00"}
                          />
                        </div>

                        <div className="mt-2">
                          <SKTextField
                            type={"number"}
                            name={"dollar"}
                            placeholder={"100.00"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <p className=" text-center ">
                {"Total In :"}
                {""}
              </p>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Save
                </Button>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
