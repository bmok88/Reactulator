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

  posNeg = () => {
    if (!this.state.afterOp) {
      this.setState({
        display: this.state.display * -1,
        beforeOp: this.state.beforeOp * -1
      });
    } else if (this.state.operation && !this.state.afterOp) {
      this.setState({
        afterOp: '-',
        display: '-'
      });
    } else {
      this.setState({
        display: this.state.display * -1,
        afterOp: this.state.afterOp * -1
      });
    }
  };

  percent = () => {
    if (!this.state.afterOp) {
      this.setState({
        display: this.state.display / 100,
        beforeOp: this.state.display / 100
      });
    }
    this.setState({
      display: this.state.display / 100,
      afterOp: this.state.display / 100
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
      beforeOp: '',
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
          posNeg={this.posNeg}
          divide={this.divide}
          decimal={this.decimal}
          percent={this.percent}
          multiply={this.multiply}
          subtract={this.subtract}
          numberPress={this.numberPress}
        />
      </section>
    );
  }
}

export default Calculator;
