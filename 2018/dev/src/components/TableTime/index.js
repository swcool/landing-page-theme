import React from 'react';

import './styles.css';

export default ({ start, end }) => (
  <td className="table-time">
    <span>{start}</span>
    <span>-</span>
    <span>{end}</span>
  </td>
);
