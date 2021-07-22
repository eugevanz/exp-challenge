import React from 'react'
import { VictoryArea, VictoryLine, VictoryGroup } from 'victory'
const linedata = [
  {x: 1, y: 13000},
  {x: 2, y: 16500},
  {x: 3, y: 14250},
  {x: 4, y: 19000}
]
const areadata = [
  {x: 1, y: 17000},
  {x: 2, y: 20500},
  {x: 3, y: 18250},
  {x: 4, y: 23000}
]
function Income () {
  return (<div className="uk-card uk-card-body uk-width-1-3@m">
    <p>
      <span className="uk-margin-small-left" style={{ fontSize: '2em', color: 'white' }}>65% <span className="uk-text-default uk-text-muted uk-margin-small-left">Income</span></span>
      <br></br>
      <span className="uk-text-success uk-margin-small-left uk-margin-large-bottom">Increase in Average</span>
    </p>
    <VictoryGroup padding={0} height={ 128 }>
      <VictoryArea interpolation="natural" style={{ data: { fill: 'rgba(249,88,255,1)', fillOpacity: 0.1, strokeWidth: 0 }}} data={ areadata }></VictoryArea>
      <VictoryLine interpolation="natural" style={{ data: { stroke: 'rgba(249,88,255,1)', strokeWidth: 4 } }} data={ linedata }></VictoryLine>
    </VictoryGroup>
  </div>)
}
export default Income