"use client";
import React from 'react'
import {Image} from "@nextui-org/react";

export default function SKLogo({}) {
  return (
    <div>
       <Image
          alt="logo"
          className="object-cover rounded-xl"
          src="/images/snooker-logo.png"
          style={{width:'50px'}}
        />
    </div>
  );
};
