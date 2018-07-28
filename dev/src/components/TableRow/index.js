import React from 'react';
import _ from 'lodash';

import TableTime from '../TableTime';
import TableTalk from '../TableTalk';

export default ({ start, end, rest, talks }) => {
  const renderTalks = _.map(talks, ({ id, topic, name }) => (
    <TableTalk key={id} topic={topic} presenter={name} />
  ));

  return (
    <tr>
      <TableTime start={start} end={end} />
      {rest ? (
        <td colSpan="2" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          {rest}
        </td>
      ) : (
        renderTalks
      )}
    </tr>
  );
};
