import React from 'react';

const Zero = ({ numberPress }) => (
  <div id="zero" onClick={() => numberPress(0)}>
    0
  </div>
);

export default Zero;
