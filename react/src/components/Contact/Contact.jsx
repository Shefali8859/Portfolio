import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
 return(
  <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to react out!</p>
    </div>
    <ul  className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
        <a href="mailto:shefalis078@gmail.com">shefalis078@gmail.com</a>
      </li>

      <li className={styles.link}>
        <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon"/>
        <a href="https://www.linkedin.com/shefalisharma8859">linkedin.com/shefalisharma8859</a>
      </li>

      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
        <a href="https://www.github.com/Shefali8859">github.com/Shefali8859</a>
      </li>
    </ul>
  </footer>
 )
};