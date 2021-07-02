import React from 'react';
import useStyles from "../styles/styles"
import MainLayout from './MainLayout';


export default function Index() {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <MainLayout />
    </div>
  );
}