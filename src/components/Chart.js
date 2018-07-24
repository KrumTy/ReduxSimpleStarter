import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = list => Math.round(list.reduce((a, b) => a + b, 0) / list.length);

export default props => {
  return (
    <div>
      <Sparklines data={props.data} height={120} width={180}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>Average: {average(props.data)} {props.units}</div>
    </div>
  );
}
