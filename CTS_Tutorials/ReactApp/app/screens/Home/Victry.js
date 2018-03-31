import React from 'react';
import { VictoryChart, VictoryBar, VictoryArea } from 'victory';

//-----------prop-types library needed for victory.if react <15.0.0----------
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export class App extends React.Component {
  render() {
    return (
      <div >
      <VictoryChart>
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings" 
        />
      </VictoryChart>
    </div>
    );
  }
}
