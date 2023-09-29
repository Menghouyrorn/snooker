'use client'
import React from 'react';

export default function SKTimeCounter(props) {
  return (
    <div style={{
      display: 'flex',
      color: '#F00',
      fontFamily: 'Barlow',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    }}>
      <p> {(props.time.h >= 10) ? props.time.h : "0" + props.time.h}h: </p>
      <p>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}m: </p>
      <p>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}s </p>
    </div>
  )
}
