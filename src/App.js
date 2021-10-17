import React, { Component, createRef } from 'react';

import { TipSelector, Input, Results } from './components/Index';
import { dollarIcon, personIcon, siteLogo } from './assets/Index';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tips: [5, 10, 15, 25, 50],
      totalMoney: 0,
      tipPercent: 0,
      numOfPeople: 1,

      defaultValues: ['', null, '', ''],
      isReset: false
    };

    this.billRef = createRef();
    this.tipSelectRef = createRef();
    this.tipCustomRef = createRef();
    this.peopleNumRef = createRef();
    this.tipRef = createRef();
    this.totalRef = createRef();
  }

  onTotalMoneyChange = e => {
    this.setState({ totalMoney: Number(e) });
  };
  onTipPercentChange = e => {
    this.setState({ tipPercent: Number(e) });
  };
  onNumOfPeopleChange = e => {
    this.setState({ numOfPeople: Number(e) });
  };

  render() {
    return (
      <div className="app">
        <div className="site-logo">
          <img src={siteLogo} alt="Logo" />
        </div>
        <div className="card">
          <div className="input">
            <div>
              <Input
                className="bill"
                label="Bill"
                placeholder="0"
                action={this.onTotalMoneyChange}
                reset={this.state.isReset}
                resetValue={this.state.defaultValues[0]}
              />

              <div>
                <img src={dollarIcon} alt="dollar icon" />
              </div>
            </div>

            <TipSelector
              className="tip-selector"
              tips={this.state.tips}
              action={this.onTipPercentChange}
              reset={this.state.isReset}
              resetValue={this.state.defaultValues[1]}
              childResetValue={this.state.defaultValues[2]}
            />

            <div>
              <div>
                <Input
                  className="people"
                  label="Number of People"
                  placeholder="1"
                  action={this.onNumOfPeopleChange}
                  reset={this.state.isReset}
                  resetValue={this.state.defaultValues[3]}
                />
                <div>
                  <img src={personIcon} alt="person icon" />
                </div>
              </div>
              {this.state.numOfPeople === 0 ? (
                <p className="err-message">Can't be zero</p>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="results-wrapper">
            <div className="result">
              <Results
                totalMoney={this.state.totalMoney}
                tipPercent={this.state.tipPercent}
                numOfPeople={this.state.numOfPeople}
              />
              <button
                className=""
                onClick={() => {
                  this.setState({
                    totalMoney: 0,
                    tipPercent: 0,
                    numOfPeople: 1,
                    isReset: true
                  });

                  setTimeout(() => {
                    this.setState({ isReset: false });
                  }, 50);
                }}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
