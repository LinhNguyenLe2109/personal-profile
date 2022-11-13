import "./NextOrPreviousButton.css";

const NextOrPreviousButton = (props) => {
  const classes = "btn " + props.className;
  const values = props.value;
  return <input type="button" className={classes} value={values} />;
};

export default NextOrPreviousButton;
