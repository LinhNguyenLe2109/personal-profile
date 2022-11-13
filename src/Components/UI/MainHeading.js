import styles from "./MainHeading.module.css";

const MainHeading = (props) => {
  const classes =
    `${styles.mainHeading} text-center display-1 mt-4 ` + props.className;
  return <h2 className={classes}>{props.children}</h2>;
};

export default MainHeading;
