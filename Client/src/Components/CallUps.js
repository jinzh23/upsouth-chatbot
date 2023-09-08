import React from "react";
import styles from "../Styles/CallUps.module.css";
import ClimateJPG from "../Images/Climate.jpg";
import VapeJPG from "../Images/Vape.jpg";
import VoteJPG from "../Images/Vote.jpg";
import BilingualJPG from "../Images/Bilingual.jpg";
import MarijuanaJPG from "../Images/Marijuana.jpg";
import ChatGptJPG from "../Images/ChatGpt.jpg";

export const CallUpsData = [
  {
    id: 1,
    callUp: "Climate Change",
    Image: ClimateJPG,
  },
  {
    id: 2,
    callUp: "Vaping",
    Image: VapeJPG,
  },
  {
    id: 3,
    callUp: "Voting age",
    Image: VoteJPG,
  },
  {
    id: 4,
    callUp: "Bilingual signage",
    Image: BilingualJPG,
  },
  {
    id: 5,
    callUp: "Legalize marijuana",
    Image: MarijuanaJPG,
  },
  {
    id: 6,
    callUp: "AI tools for learning",
    Image: ChatGptJPG, 
  }, 
];

const CallUps = ({ page }) => {
  const mapData = !page ? CallUpsData.slice(0, 6) : CallUpsData;
  return (
    <div className={styles.container}>
      <div className={`${styles.callUps} ${page ? styles.page : ""}`}>
        <div className={styles["callUps__content"]}>
          <h2 className={styles["callUps__content--title"]}>
            Browse callups
          </h2>
          <div className={styles["callUps__content--gallery"]}>
            {mapData.map(({ id, callUp, Image }) => (
              <div className={styles.gallery__item} key={id}>
                <img
                  src={Image}
                  alt={callUp}
                  className={styles["gallery__item--img"]}
                />
                <div className={styles.overlay} />
                <div className={styles.gallery__item__content}>
                  <h2 className={styles.gallery__item__content__callUp}>
                    {callUp}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUps;
