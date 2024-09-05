import s from "./Options.module.css";

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
