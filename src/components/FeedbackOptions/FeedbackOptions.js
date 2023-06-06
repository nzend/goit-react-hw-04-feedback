import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.optionsList}>
    {Object.keys(options).map(option => (
      <li className={css.optionItem} key={option}>
        <button className={css.feedbackBtn} name={option} type="button" onClick={onLeaveFeedback}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
