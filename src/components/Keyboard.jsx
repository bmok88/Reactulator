import React from 'react';

import Clear from './Clear';
import PosNeg from './PosNeg';
import Percent from './Percent';
import Divide from './Divide';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Multiply from './Multiply';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Minus from './Minus';
import One from './One';
import Two from './Two';
import Three from './Three';
import Plus from './Plus';
import Zero from './Zero';
import Decimal from './Decimal';
import Equals from './Equals';

const Keyboard = () => {
  return (
    <div id="keyboard">
      <Clear />
      <PosNeg />
      <Percent />
      <Divide />
      <Seven />
      <Eight />
      <Nine />
      <Multiply />
      <Four />
      <Five />
      <Six />
      <Minus />
      <One />
      <Two />
      <Three />
      <Plus />
      <Zero />
      <Decimal />
      <Equals />
    </div>
  );
};

export default Keyboard;
