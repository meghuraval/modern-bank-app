// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./style";

import {
  BillingDetails,
  Business,
  //Button,
  CardDeal,
  Clients,
  Cta,
  //FeedbackCard,
  Footer,
  //GetStarted,
  Hero,
  NavBar,
  Stats,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>

      <div>
        <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats /> <Business /> <BillingDetails /> <CardDeal />{" "}
            <Testimonials />
            <Clients /> <Cta />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
