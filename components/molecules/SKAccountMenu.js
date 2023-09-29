"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { User, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SKAccountMenu({ gotoLogin, gotoProfileuser }) {
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <button variant="bordered">
          <Image
            alt="profile"
            height={35}
            radius="full"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={35}
          />
        </button>
      </DropdownTrigger>

      <DropdownMenu variant="faded">
        <DropdownSection showDivider>
          <DropdownItem>
            <User
              name="snooker"
              description="012 34 56 78"
              avatarProps={{
                src: "./icons/girl.png",
              }}
            />
          </DropdownItem>
        </DropdownSection>

        <DropdownSection>
          <DropdownItem
            startContent={<Image src="./icons/user.png" alt="icon" width={20} />}
            onClick={gotoProfileuser}
          >
            Profile
          </DropdownItem>
          <DropdownItem
            className="text-danger"
            color="danger"
            startContent={
              <Image src="./icons/logout.png" alt="icon" width={18} />
            }
            onClick={gotoLogin}
          >
            Logout
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
