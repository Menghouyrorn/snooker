"use client";
import React from "react";
import { SKLogo, SKTitle } from "../atoms";
import { SKAccountMenu } from "../molecules";
import { useRouter } from "next/navigation";
export default function SKUserAppBar() {
  const router = useRouter();
  const goto = () => {
    router.push("./sk-snooker");
  };
  const handleClicktoreporthistory = () => {
    router.push("./report-history");
  };
  const gotoLogin = () => {
    router.push("/");
  };
  const gotoProfileuser = () => {
    router.push("./profile-user");
  };
  return (
    <>
      <div
        style={{ borderTop: "5px solid #118AEF" }}
        className=" flex items-center justify-between bg-white shadow-md h-14"
      >
        <div
          className="flex items-center space-x-1 ml-5 cursor-pointer"
          onClick={() => goto()}
        >
          <SKLogo />
          <SKTitle className="text-xl" child={"SNOOKER"} />
        </div>
        <div className="mr-5">
          <SKAccountMenu
            gotoLogin={gotoLogin}
            gotoProfileuser={gotoProfileuser}
          />
        </div>
      </div>
    </>
  );
}
