import React, { Component } from 'react';

import Display from '../components/Display';
import Keyboard from '../components/Keyboard';

class Calculator extends Component {
  render() {
    return (
      <section id="calculator">
        <Display />
        <Keyboard />
      </section>
    );
  }
}

export default Calculator;
