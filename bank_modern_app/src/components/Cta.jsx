// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../style";
import Button from "./Button";

const Cta = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 style={styles.heading2}>Try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Get ready to supercharge your business growth by accepting card
          payments from every corner of the planet! All the tools you need are
          right here.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:m1-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default Cta;
