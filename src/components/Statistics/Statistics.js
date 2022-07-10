import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={s.list}>
    <li className={s.itemName}>Good: {good}</li>
    <li className={s.itemName}>Neutral:{neutral}</li>
    <li className={s.itemName}>Bad: {bad}</li>
    <li className={s.itemName}>Total: {total}</li>
    <li className={s.itemName}>Positive feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};