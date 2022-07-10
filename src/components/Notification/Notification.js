import React from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <p className={s.note}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string,
};