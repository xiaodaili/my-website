import React, { useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function Translate({ children }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <p onClick={() => setIsHidden(!isHidden)} className={clsx(styles.container, isHidden ? styles.container_hidden : null)}>
      <span className={styles.tag}>中文</span>
      <span className={clsx(styles.content)}>{children}</span>
    </p>
  );
}
