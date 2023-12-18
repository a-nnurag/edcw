"use client";
import react, { useState } from "react";
import styles from "./Gallerycss.module.css";
import data from "../schema/gallery";
import Image from "next/image";

const Gallery = () => {
  // const [model, setModel] = useState(false);
  // const [tempimgSrc, setTempImgSrc] = useState("");

  // const getImg = (imgSrc: any) => {
  //   setTempImgSrc(imgSrc);
  //   setModel(true);
  // };

  return (
    <div id="gallery" className={styles.gallery}>
      <header className={styles.header}>Gallery</header>
      {/* <div className={model ? styles.modelopen : styles.model}>
        <img src="${tempimgsrc}" alt="" />
      </div>
      Add the inlarge feature */}
      <div className={styles.body}>
        {data.map((item, index) => {
          return (
            <div
              className={styles.pics}
              key={index}
              // onClick={() => getImg(item.src)}
            >
              <Image
                src={item.src}
                className={styles.image}
                alt=""
                height={500}
                width={500}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
