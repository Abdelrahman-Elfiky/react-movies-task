import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to the Movie App!</h1>
      <p>Browse our collection of movies and discover your favorites.</p>
    </div>
  );
}
