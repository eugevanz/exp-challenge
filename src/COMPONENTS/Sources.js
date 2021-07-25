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
    <div className="uk-text-bold uk-margin-bottom" style={{ color: "white" }}>Source of Users</div>
    <div className="uk-flex uk-flex-center">
      <div className="uk-flex uk-flex-column uk-margin-large-right uk-width-1-6">
        <div className="uk-flex uk-flex-middle"><div className="uk-margin-small-right" style={{ width: '10px', height: '10px', backgroundColor: 'tomato' }}></div>USA</div>
        <div className="uk-flex uk-flex-middle"><div className="uk-margin-small-right" style={{ width: '10px', height: '10px', backgroundColor: 'purple' }}></div>UK</div>
        <div className="uk-flex uk-flex-middle"><div className="uk-margin-small-right" style={{ width: '10px', height: '10px', backgroundColor: 'cyan' }}></div>Spain</div>
        <div className="uk-flex uk-flex-middle"><div className="uk-margin-small-right" style={{ width: '10px', height: '10px', backgroundColor: 'green' }}></div>France</div>
        <div className="uk-flex uk-flex-middle"><div className="uk-margin-small-right" style={{ width: '10px', height: '10px', backgroundColor: 'gold' }}></div>China</div>
        <div className="uk-flex uk-flex-middle"><div className="uk-margin-small-right" style={{ width: '10px', height: '10px', backgroundColor: 'orange' }}></div>Japan</div>
      </div>
      <div>
        <VictoryPie data={ data } innerRadius={ 118 } labels={({ datum }) => `${datum.y}%`} style={{ labels: { fill: "white" } }} colorScale={ ["tomato", "purple", "cyan", "green", "gold", "orange"] }></VictoryPie>
      </div>
    </div>
  </div>)
}
export default Sources