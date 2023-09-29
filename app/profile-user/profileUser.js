"use client";
import React from "react";
import { SKTypography } from "./../../components/atoms";
import { SKUserAppBar, SKFooter } from "./../../components/templates";
import { Input, Image } from "@nextui-org/react";
const variants = ["underlined"];

export default function ProfileUser() {
  return (
    <>
      <SKUserAppBar />

      <div className="h-[575px]">
        <div className="flex justify-center p-4 mt-3">
          <div className=" mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
            <div className="text-center">
              <div className=" mb-4">
                <p className="text-base font-semibold">{"Personal Profile"}</p>
                <div className="mt-4">
                  <SKTypography child={" Add information about yourself."} />
                </div>
              </div>
              <div className="... mb-2 flex justify-center">
                <Image
                  className="... h-20 rounded sm:h-20 "
                  src="/icons/girl.png"
                  alt="imgLogo"
                  width={80}
                  height={80}
                />
              </div>
            </div>

            <form>
              <div className="mb-8">
                <div className="w-full flex flex-col gap-4">
                  {variants.map((variant) => (
                    <div
                      key={variant}
                      className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                      style={{ borderBottom: " 1px solid #118AEF" }}
                    >
                      <Input
                        fullWidth
                        required
                        name={"name"}
                        type={"text"}
                        variant={variant}
                        placeholder={"Name"}
                        startContent={
                          <>
                            <Image
                              src={"./icons/user.png"}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </>
                        }
                        endContent={
                          <button type="button">
                            <Image
                              src={"./icons/edit.png"}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </button>
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="w-full flex flex-col gap-4">
                  {variants.map((variant) => (
                    <div
                      key={variant}
                      className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                      style={{ borderBottom: " 1px solid #118AEF" }}
                    >
                      <Input
                        fullWidth
                        required
                        name={"email"}
                        type={"email"}
                        variant={variant}
                        placeholder={"Email"}
                        startContent={
                          <>
                            <Image
                              src={"./icons/mail.png"}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </>
                        }
                        endContent={
                          <button type="button">
                            <Image
                              src={"./icons/edit.png"}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </button>
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="w-full flex flex-col gap-4">
                  {variants.map((variant) => (
                    <div
                      key={variant}
                      className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                      style={{ borderBottom: " 1px solid #118AEF" }}
                    >
                      <Input
                        fullWidth
                        required
                        name={"phone"}
                        type={"text"}
                        variant={variant}
                        placeholder={"Phone Number"}
                        startContent={
                          <>
                            <Image
                              src={"./icons/telephone.png"}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </>
                        }
                        endContent={
                          <button type="button">
                            <Image
                              src={"./icons/edit.png"}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </button>
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className=" flex justify-center mb-8">
                <button
                  style={{ border: "2px solid #118AEF" }}
                  type="submit"
                  className="bg-[#118AEF] text-white w-40 inline-block rounded-lg px-7 py-2  hover:shadow-md"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SKFooter />
    </>
  );
}
