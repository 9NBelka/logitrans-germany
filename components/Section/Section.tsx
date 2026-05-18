import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
  gray?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  dark = false,
  gray = false,
}) => {
  const colorClass = dark ? styles.dark : gray ? styles.gray : styles.light;

  return (
    <section id={id} className={`${styles.section} ${colorClass} ${className}`}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
};
