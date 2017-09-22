import React, { Component } from 'react';

import Display from '../components/Display';
import Keyboard from '../components/Keyboard';

class Calculator extends Component {
  state = {
    display: ''
  };

  add = () => {
    this.setState({
      display: this.state.display + '+'
    });
  };

  render() {
    const { display } = this.state;

    return (
      <section id="calculator">
        <Display display={display} />
        <Keyboard add={this.add} />
      </section>
    );
  }
}

export default Calculator;
