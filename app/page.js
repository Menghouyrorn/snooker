"use client";
import React from "react";
import { SKTitle, SKTypography, SKTextField } from "../components/atoms";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";



export default function Login() {
  const router = useRouter();
  const gotoSKsnooker = () => {
    router.push("./sk-snooker");
  };
  return (
    <div className="flex justify-center p-4 mt-12">
      <div className=" mb-12 md:mb-0 flex flex-col gap-y-8 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
        <div className="flex flex-col gap-y-4">
          <div className="mb-2 flex justify-center">
            <Image
              className="h-20 rounded sm:h-20 "
              src="/images/snooker-logo.png"
              alt="imgLogo"
              width={90}
              height={50}
            />
          </div>
          <h5 className="mb-2 text-center text-xl  uppercase text-[#118AEF] ">
            <SKTitle child={"Log in to your SNOOKER account !"} />
          </h5>
          <div className=" mb-2 text-center">
            <SKTypography
              child={
                " Sign in for an account to track your progress and manage your SNOOKER."
              }
            />
          </div>
        </div>

        <form className="flex flex-col gap-y-6">
          <div className="mb-4">
            <SKTextField
              type={"text"}
              name={"name"}
              placeholder={"Phone number or username"}
            />
          </div>

          <div className="mb-4">
            <SKTextField
              required
              type={"password"}
              name={"name"}
              placeholder={"Password"}
            />
          </div>

          <div className="text-center lg:text-left">
            <Link href={"./sk-snooker"}>
              <button
                style={{ border: "2px solid #118AEF" }}
                // type="submit"
                type="button"
                className="inline-block w-full rounded-lg px-7 py-3 text-sm leading-snug  hover:shadow-md"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

