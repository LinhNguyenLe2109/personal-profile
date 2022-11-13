import styles from "./Breaker.module.css";

const SectionBreaker = (props) => {
  const classes =
    `${styles.breaker} border border-info border-2 opacity-50 ` +
    props.className;
  return <hr className={classes} />;
};

export default SectionBreaker;
