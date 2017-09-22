import React, { Component } from 'react';

import Display from '../components/Display';
import Keyboard from '../components/Keyboard';

class Calculator extends Component {
  state = {
    display: '',
    afterOp: '',
    beforeOp: '',
    operation: ''
  };

  add = () => {
    this.setState({
      operation: '+'
    });
  };

  subtract = () => {
    this.setState({
      operation: '-'
    });
  };

  multiply = () => {
    this.setState({
      operation: '*'
    });
  };

  divide = () => {
    this.setState({
      operation: '/'
    });
  };

  clear = () => {
    this.setState({
      display: '',
      beforeOp: '',
      afterOp: '',
      operation: ''
    });
  };

  equals = () => {
    let value = eval(
      this.state.beforeOp + this.state.operation + this.state.afterOp
    ).toString();
    this.setState({
      display: value,
      beforeOp: value,
      afterOp: '',
      operation: ''
    });
  };

  numberPress = num => {
    if (this.state.operation) {
      this.setState({
        display: this.state.afterOp + num,
        afterOp: this.state.afterOp + num
      });
    } else {
      this.setState({
        display: this.state.display + num,
        beforeOp: this.state.beforeOp + num
      });
    }
  };

  decimal = () => {
    console.log(typeof this.state.beforeOp);
    if (this.state.beforeOp.indexOf('.') === -1) {
      this.setState({
        display: this.state.display + '.',
        beforeOp: this.state.beforeOp + '.'
      });
    } else if (this.state.afterOp.indexOf('.') === -1 && this.state.operation) {
      this.setState({
        display: this.state.afterOp,
        afterOp: this.state.afterOp + '.'
      });
    }
  };

  render() {
    const { display } = this.state;

    return (
      <section id="calculator">
        <Display display={display} />
        <Keyboard
          add={this.add}
          clear={this.clear}
          equals={this.equals}
          divide={this.divide}
          decimal={this.decimal}
          multiply={this.multiply}
          subtract={this.subtract}
          numberPress={this.numberPress}
        />
      </section>
    );
  }
}

export default Calculator;
