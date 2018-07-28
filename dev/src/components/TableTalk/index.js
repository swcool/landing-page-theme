import React from 'react';

import './styles.css';

export default ({ topic, presenter }) => (
  <td className="table-talk">
    <span className="table-talk__topic">{topic}</span>
    <span>{presenter}</span>
  </td>
);
