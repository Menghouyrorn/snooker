"use client";
import React from 'react';
import { SKButtonOption } from '../atoms';
import { useRouter } from 'next/navigation';
import { SKIncomeExpenditureForm,SKCashout } from '../molecules';

export default function SKFooter() {
  const router = useRouter();
  return (
    <div className='shadow-md fixed w-[100%] bottom-0 h-16 flex items-center gap-x-3 justify-center' style={{backgroundColor:'#118AEF'}}>
      <SKButtonOption icon={"/icons/exit.png"} title={'ចេញ'} goto={'./sk-snooker'}/>
      <SKButtonOption icon={"./icons/menu.png"} title={'យកចេញ'} goto={'./sk-orderform'}/>
      <SKButtonOption icon={"./icons/girl.png"} title={'បញ្ជូន'} goto={""}/>
      <SKButtonOption icon={"./icons/delete.png"} title={'លុប'} goto={""}/>
      <SKButtonOption icon={"./icons/teamwork.png"} title={'Serv'} goto={""}/>
      <SKButtonOption icon={"./icons/salary.png"} title={'ប.លុយ'} goto={"./report-history"}/>
      <SKIncomeExpenditureForm/>
      <SKCashout/>
      {/* <SKButtonOption icon={"./icons/takeover.png"} title={'លុយចេញ'} goto={""}/> */}
      <SKButtonOption icon={"./icons/printer.png"} title={'បោះពុម្ព'} goto={""}/>
      <SKButtonOption icon={"./icons/language.png"} title={'Lange'} goto={""}/>
      <SKButtonOption icon={"./icons/remove.png"} title={'Pass'} goto={""}/>
      <SKButtonOption icon={"./icons/transfer.png"} title={'ប.ង'} goto={""}/>
      <SKButtonOption icon={"/icons/back.png"} title={"ត្រលប់"} goto={""}/>
    </div>
  );
};
