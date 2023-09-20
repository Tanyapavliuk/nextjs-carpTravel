import Header from "./Header";
import Main from "./Home";

import styles from "./Home.module.css";

const Hero = () => {
  return (
    <header className={styles.backgroundImage}>
      <Header />
      <Main />
    </header>
  );
};

export default Hero;
