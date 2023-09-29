"use client";
import React from "react";
import { Input } from "@nextui-org/react";


export default function SKTextField({ type, name, placeholder,onChange }) {
  const variants = ["underlined"];

  return (
    <div className="w-full flex flex-col gap-4">
      {variants.map((variant) => (
        <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4" style={{ borderBottom: " 1px solid #118AEF" }}>
          <Input
            fullWidth
            isRequired
            name={name}
            type={type}
            variant={variant}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
}
