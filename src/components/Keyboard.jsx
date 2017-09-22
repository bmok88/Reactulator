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

const Keyboard = ({ add, clear, numberPress }) => {
  return (
    <div id="keyboard">
      <div className="row one">
        <Clear clear={clear} />
        <PosNeg />
        <Percent />
        <Divide />
      </div>
      <div className="row two">
        <Seven numberPress={numberPress} />
        <Eight numberPress={numberPress} />
        <Nine numberPress={numberPress} />
        <Multiply />
      </div>
      <div className="row three">
        <Four numberPress={numberPress} />
        <Five numberPress={numberPress} />
        <Six numberPress={numberPress} />
        <Minus />
      </div>
      <div className="row four">
        <One numberPress={numberPress} />
        <Two numberPress={numberPress} />
        <Three numberPress={numberPress} />
        <Plus add={add} />
      </div>
      <div className="row five">
        <Zero numberPress={numberPress} />
        <Decimal />
        <Equals />
      </div>
    </div>
  );
};

export default Keyboard;
