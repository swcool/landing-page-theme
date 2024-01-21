import React from 'react';

import './styles.css';

export default ({ start, end }) => (
  <div className="table-time sechdule_time_block">
    <span>{start}</span>
    <span>-</span>
    <span>{end}</span>
  </div>
);
