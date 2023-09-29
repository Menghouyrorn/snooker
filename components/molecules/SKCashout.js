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

export default function SKCashout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const [loding, setLoding] = React.useState(false);
  const [dollar, setDollar] = React.useState();
  const [riel, setRiel] = React.useState();
  const variants = ["underlined"];
  const sizes = ["4xl"];
  async function handleSubmit() {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount_kh: riel,
        amount_us: dollar,
        created_at: "2023-09-21 04:22:55",
      }),
    };
    const res = await fetch(`http://localhost:3000/api/cashout`, postData);
    const response = await res.json();
    if (response["message"] == "success") {
      setLoding(false);
    } else {
      setLoding(true);
    }
    console.log(response["message"]);
  }
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
            <p className="mt-1 text-xs">លុយចេញ</p>
          </Button>
        ))}
      </div>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {"សាច់ប្រាក់ចេញ"}
              </ModalHeader>
              <ModalBody>
                <div>
                  <RadioGroup orientation="horizontal">
                    <Radio value="buenos-aires">
                      {"ប្រើប្រាស់សាច់ប្រាក់សរុប"}
                    </Radio>
                    <Radio value="sydney" className="ml-2">
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
                            onChange={(e) => setDollar(e.target.value)}
                          />
                        </div>

                        <div className="mt-2">
                          <SKTextField
                            type={"text"}
                            name={"riel"}
                            placeholder={"Riel"}
                            onChange={(e) => setRiel(e.target.value)}
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
                <Button
                  color="primary"
                  variant="light"
                  type="button"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  {loding ? "...loading" : "Save"}
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
