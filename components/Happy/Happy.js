import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pictureLucie from "../../public/Group 1.svg";
import gouttes from "../../public/Gouttes.png";
import TypedReactHooksSlogan from "../Title/TypedJS";

export default function Happy() {

  return (

    <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>
              {" "}
              <span>
                {" "}
                <TypedReactHooksSlogan />
              </span>
            </h1>

            <div className={styles.picture}>
              <Image
                src={pictureLucie}
                alt=""
                width={251}
                height={376}
              ></Image>
            </div>
          </div>

          <div className={styles.orange}>

            <div className={styles.gouttes}>
              <Image src={gouttes} alt=""></Image>
            </div>
          </div>
        </div>

        <div className={styles.rectangleLight}></div>

        <div className={styles.rectangle}></div>
        
      </main>

  );

  
}
