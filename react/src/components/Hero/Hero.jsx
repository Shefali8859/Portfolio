import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1  className={styles.title}>Hi, I'm Shefali Sharma</h1>
                <p className={styles.description}>
                I'm a full-stack developer specialised in frontend and backend development for scalable web apps.
                </p>
                <a href="mailto:shefalis078@gmail.com" className={styles.contactBtn}>
                Contact Me
                </a>
            </div>
            <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
        </section>
    )
};