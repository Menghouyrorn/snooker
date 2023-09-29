"use client";
import React from "react";
import { SKmenuorderform, SKorderitem } from "../../components/organisms";
import { SKUserAppBar, SKFooter } from "../../components/templates";

function SKorderformpage() {
  return (
    <div className="flex flex-col">
      <SKUserAppBar />
      <div className="flex">
        <div className="w-[60%]">
          <SKmenuorderform />
        </div>
        <div className="w-[40%]">
          <SKorderitem />
        </div>
      </div>
      <SKFooter />
    </div>
  );
}

export default SKorderformpage;
