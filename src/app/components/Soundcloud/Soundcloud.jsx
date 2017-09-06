import React from 'react';

import styles from './Soundcloud.scss';

const Soundcloud = () => (
  <div className={styles.soundcloud}>
    <h2>Listen</h2>
    <iframe
      title="Soundcloud"
      width="100%"
      height="450"
      scrolling="no"
      frameBorder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/69917228&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"
    />
  </div>
);

export default Soundcloud;
