import React, { Component } from 'react';

import { tipCalculator, totalCalculator } from '../../utils/helpers';

export class Results extends Component {
  render() {
    return (
      <div>
        <div className="tip-amount">
          <div className="label">
            Tip Amount <br /> <span className="sub">/ person</span>
          </div>
          <div className="amount">
            $
            {tipCalculator(
              this.props.totalMoney,
              this.props.tipPercent,
              this.props.numOfPeople
            )}
          </div>
        </div>
        <div className="Total-amount">
          <div className="label">
            Total <br /> <span className="sub">/ person</span>
          </div>
          <div className="amount">
            $
            {totalCalculator(
              this.props.totalMoney,
              this.props.tipPercent,
              this.props.numOfPeople
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
