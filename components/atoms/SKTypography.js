"use client";
import React from "react";
import styles from './../../style/roboto.module.css';

export default function SKTypography({ child }) {

  return (
    <>
      <p className={styles.roboto}>
        {child}
      </p>
    </>
  );
};
