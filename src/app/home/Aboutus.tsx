import React from "react";
import styles from "./Aboutus.module.css";

const AboutUs = () => {
  return (
    <div id="aboutus" className={styles.aboutus}>
      <h1 className={styles.header}>About Us</h1>
      <div className={styles.body}>
        <img className={styles.image} src="./aboutus/aboutus.png" alt="" />
        <div className={styles.content}>
          <div className={styles.topic}>What is EDC?</div>
          <p className={styles.para}>
            The Entrepreneurship Development Cell (EDC) at IIEST, Shibpur, is
            dedicated to instilling an entrepreneurial mindset in its students
            and fostering their innovative spirit. Our primary goal is to
            nurture the germination of ideas and guide them towards becoming
            impactful ventures. We achieve this by facilitating connections
            between student-led enterprises on campus and local incubators,
            securing seed funding, and linking aspiring entrepreneurs with angel
            investors, all with the ultimate aim of transforming novel concepts
            into thriving startups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
