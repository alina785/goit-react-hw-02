import s from './Feedback.module.css';
const Feedback = ({ good, neutral, bad, total, positivePercentange }) => {
  return (
    <>
      <ul className={s.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positivePercentange}%</li>
      </ul>
    </>
  );
};

export default Feedback;