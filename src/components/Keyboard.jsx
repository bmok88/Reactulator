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
      <div className="row one">
        <Clear />
        <PosNeg />
        <Percent />
        <Divide />
      </div>
      <div className="row two">
        <Seven />
        <Eight />
        <Nine />
        <Multiply />
      </div>
      <div className="row three">
        <Four />
        <Five />
        <Six />
        <Minus />
      </div>
      <div className="row four">
        <One />
        <Two />
        <Three />
        <Plus />
      </div>
      <div className="row five">
        <Zero />
        <Decimal />
        <Equals />
      </div>
    </div>
  );
};

export default Keyboard;
