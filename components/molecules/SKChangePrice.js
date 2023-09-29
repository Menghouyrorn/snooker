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
  Input,
  Select,
  SelectItem,
  Image
} from "@nextui-org/react";

export default function SKChangePrice() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = React.useState([]);
  const [price, setPrice] = React.useState();
  const [id, setID] = React.useState();
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
  async function ChangePrice() {
    console.log(id);
    console.log(Number(price));
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: Number(price),
        id: id,
      }),
    };
    const res = await fetch(`http://localhost:3000/api/changeprice`, postData);
    const response = await res.json();
    console.log(response);
    console.log(response["message"]);
  }
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
          src={"./icons/lowest-price.png"}
          width={25}
        />
        <p className="mt-1 text-xs">កែថ្លៃ</p>
      </Button>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Select Item for change price
              </ModalHeader>
              <ModalBody>
                <Select
                  label="Select an animal"
                  className="max-w-xs"
                  onChange={(e) => setID(e.target.value)}
                >
                  {data.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  type="text"
                  placeholder="Change price"
                  className="w-[80%]"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onClick={ChangePrice}>
                  Change
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
