import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.container}>
      <p className={s.text}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral}</p>
      <p className={s.text}>Bad: {bad}</p>
      <p className={s.text}>Total feedback: {total}</p>
      <p className={s.text}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
