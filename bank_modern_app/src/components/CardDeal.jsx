// eslint-disable-next-line no-unused-vars
import React from "react";
import { card } from "../assets";
import styles from "../style";
import { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover the ideal credit card deals effortlessly with our
          user-friendly platform. Compare multiple options and choose the
          perfect fit for your financial needs, all in just a few simple steps.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="h-[100%] w-[100%]"></img>
      </div>
    </section>
  );
};

export default CardDeal;
