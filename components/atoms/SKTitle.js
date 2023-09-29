"use client";
import React from "react";
import styles from './../../style/barlow.module.css';

export default function SKTitle({ child }) {

  return (
    <>
      <p className={styles.barlow}>
        {child}
      </p>
    </>
  );
};
