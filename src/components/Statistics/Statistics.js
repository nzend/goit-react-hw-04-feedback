import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    <ul className={css.statisticList}>
      <li className={css.statisticItem}>Good: {good}</li>
      <li className={css.statisticItem}>Neutral: {neutral}</li>
      <li className={css.statisticItem}>Bad: {bad}</li>
    </ul>
    <div className={css.statistic}>
      <span className={css.total}>Total: {total}</span>
      <span className={css.positiveFeedback}>
        Positive feedback: {positiveFeedbackPercentage}%
      </span>
    </div>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,

  total: PropTypes.number.isRequired,

  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
