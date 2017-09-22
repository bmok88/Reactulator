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

const Keyboard = ({
  add,
  clear,
  equals,
  posNeg,
  divide,
  decimal,
  percent,
  multiply,
  subtract,
  numberPress
}) => {
  return (
    <div id="keyboard">
      <div className="row one">
        <Clear clear={clear} />
        <PosNeg posNeg={posNeg} />
        <Percent percent={percent} />
        <Divide divide={divide} />
      </div>
      <div className="row two">
        <Seven numberPress={numberPress} />
        <Eight numberPress={numberPress} />
        <Nine numberPress={numberPress} />
        <Multiply multiply={multiply} />
      </div>
      <div className="row three">
        <Four numberPress={numberPress} />
        <Five numberPress={numberPress} />
        <Six numberPress={numberPress} />
        <Minus subtract={subtract} />
      </div>
      <div className="row four">
        <One numberPress={numberPress} />
        <Two numberPress={numberPress} />
        <Three numberPress={numberPress} />
        <Plus add={add} />
      </div>
      <div className="row five">
        <Zero numberPress={numberPress} />
        <Decimal decimal={decimal} />
        <Equals equals={equals} />
      </div>
    </div>
  );
};

export default Keyboard;
