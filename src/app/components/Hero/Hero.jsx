import React from 'react';

import styles from './Hero.scss';

const Hero = () => (
  <section className={styles.hero}>
    <div>
      <a href="https://soundcloud.com/clavvsatl">
        <i className="fa fa-fw fa-headphones" />
      </a>
      <a href="https://clavvs.bigcartel.com">
        <i className="fa fa-fw fa-shopping-cart" />
      </a>
    </div>
  </section>
);

export default Hero;
