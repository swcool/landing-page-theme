import React from 'react';

import './styles.css';

export default ({ start, end }) => (
  <div className="table-time schedule_time_block">
    <span>{start}</span>
    <span>-</span>
    <span>{end}</span>
  </div>
);
