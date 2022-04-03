import React from "react";
import styles from "../../styles/Home.module.css"; 

import Gist from "react-gist";

export default function Code() {

  const gistData = {
    id: "17bbd4f46bc8b96597ad292f06ebbac9",
    file: null
  };

  return (
    <div className={styles.code}>
      <h1 className={styles.titleCode}>Une partie du code derrière cette carte virtuelle !</h1>

      <Gist id={gistData.id} />
      {/* <Script src="https://gist.github.com/GeraldineBB/17bbd4f46bc8b96597ad292f06ebbac9.js" /> */}
    </div>

  );
}


