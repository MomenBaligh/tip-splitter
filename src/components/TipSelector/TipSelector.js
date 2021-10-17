import React, { Component } from 'react';
import { Input } from '../Index';

export class TipSelector extends Component {
  constructor(props) {
    super(props);

    this.state = { activeRadio: null, tipPercent: 0 };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.reset === true)
      this.setState({ activeRadio: this.props.resetValue, tipPercent: 0 });
  };

  radioButtons = () =>
    this.props.tips.map((item, index) => {
      return (
        <div
          key={index}
          className={`radio-button ${
            index === this.state.activeRadio ? 'selected' : 'not-selected'
          }`}
        >
          <label htmlFor={`tip-percent-${item}`}>
            <input
              type="radio"
              name="tip"
              id={`tip-percent-${item}`}
              value={item}
              onClick={e => {
                console.log(e.target.value);
                this.setState({
                  activeRadio: index,
                  tipPercent: e.target.value
                });
              }}
            />
            <span>{item}%</span>
          </label>
        </div>
      );
    });

  onTipPercentChange = e => {
    this.setState({ tipPercent: Number(e) });
  };

  render() {
    return (
      <div
        onChange={e => {
          if (e.target.tagName === 'INPUT')
            return this.props.action(e.target.value);
          return;
        }}
        className={this.props.className}
      >
        <label>
          Select Tip <span>%</span>
        </label>
        <div className="tip-buttons">
          {this.radioButtons()}
          <Input
            type="number"
            placeholder="custom"
            containerFunction={() => this.setState({ activeRadio: null })}
            action={this.onTipPercentChange}
            reset={this.props.reset}
            resetValue={this.props.childResetValue}
          />
        </div>
      </div>
    );
  }
}

export default TipSelector;
