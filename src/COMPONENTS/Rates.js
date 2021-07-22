import React from 'react'
import { VictoryPie } from 'victory'
const data = [
  { x: "Cats", y: 67 },
  { x: "Dogs", y: 33 }
]
function Rates () {
  return (<div className="uk-card uk-card-body">
    <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
      <div className="uk-width-1-3">
        <VictoryPie padding={ 4 } data={ data } innerRadius={ 36 } height={ 96 } style={{ labels: { fill: "none" } }} colorScale={ ["cyan", "navy"] }></VictoryPie>
      </div>
      <div className="uk-width-1-3">
        <VictoryPie padding={ 4 } data={ data } innerRadius={ 36 } height={ 96 } style={{ labels: { fill: "none" } }} colorScale={ ["cyan", "navy"] }></VictoryPie>
      </div>
      <div className="uk-width-1-3">
        <VictoryPie padding={ 4 } data={ data } innerRadius={ 36 } height={ 96 } style={{ labels: { fill: "none" } }} colorScale={ ["cyan", "navy"] }></VictoryPie>
      </div>
    </div>
  </div>)
}
export default Rates