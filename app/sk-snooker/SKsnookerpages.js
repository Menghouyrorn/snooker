"use client";
import React from 'react';
import { SKmenu } from '../../components/organisms';
import { SKFooter,SKUserAppBar } from '../../components/templates';


export default function SKsnookerpages() {
  return (
    <div className='flex flex-col'>
      <SKUserAppBar/>
      <SKmenu/>
      <SKFooter/>
    </div>
  )
}
