import React, { Component } from 'react';

export class BillInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.reset === true)
      this.setState({ value: this.props.resetValue });
  };

  // checkForDots = num => {
  //   num = Array.from(num);

  //   console.log(num);

  //   for (let i = 0; i < num.length; i++) {
  //     let dots = 0;
  //     if (num[i] === '.') dots++;
  //     return dots;
  //   }
  // };

  onInputChange = ({ target: { value }, nativeEvent: { data } }) => {
    if (typeof this.state.value === 'string') this.setState({ value: '' });

    if ((data >= 0 && data <= 9) || data === '.')
      this.setState({ value: value });

    this.props.action(value);
  };

  render() {
    return (
      <div
        onClick={
          this.props.containerFunction
            ? this.props.containerFunction
            : () => {
                return;
              }
        }
        className={this.props.className}
      >
        {this.props.label ? (
          <label htmlFor="bill-input">{this.props.label}</label>
        ) : (
          ''
        )}
        <input
          type="number"
          id="bill-input"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={e => {
            this.onInputChange(e);
          }}
        />
      </div>
    );
  }
}

export default BillInput;
