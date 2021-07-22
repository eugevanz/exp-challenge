import React from 'react'
import { VictoryPie } from 'victory'
const data = [
  { x: "Cats", y: 20 },
  { x: "Dogs", y: 25 },
  { x: "Cats", y: 8 },
  { x: "Dogs", y: 12 },
  { x: "Cats", y: 23 },
  { x: "Dogs", y: 10 }
]
function Sources () {
  return (<div className="uk-card uk-card-body">
    <VictoryPie data={ data } innerRadius={ 112 } labels={({ datum }) => `${datum.y}%`} style={{ labels: { fill: "white" } }} colorScale={ ["tomato", "purple", "cyan", "green", "gold", "orange"] }></VictoryPie>
  </div>)
}
export default Sources