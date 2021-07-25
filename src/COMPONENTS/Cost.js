import React, { useContext } from 'react'
import { VictoryArea, VictoryLine, VictoryGroup } from 'victory'
import { AppContext } from '../STATE'
function Cost () {
  const { createIncome } = useContext(AppContext)
  const data = createIncome()
  return (<div className="uk-card uk-card-body uk-width-1-3@m">
    <div className="uk-flex uk-flex-column">
      <div className="uk-margin-small-left" style={{ marginBottom: '-8px', fontSize: '2em', color: 'white' }}>14% <span className="uk-text-default uk-text-muted">Cost</span></div>
      <span className="uk-text-danger uk-margin-small-left uk-margin-bottom" style={{ fontSize: '0.8em' }}>Increase in Average</span>
    </div>
    <VictoryGroup padding={0} height={ 128 }>
      <VictoryArea interpolation="natural" style={{ data: { fill: 'cyan', fillOpacity: 0.1, strokeWidth: 0 }}} data={ data.areadata }></VictoryArea>
      <VictoryLine interpolation="natural" style={{ data: { stroke: 'cyan', strokeWidth: 4 } }} data={ data.linedata }></VictoryLine>
    </VictoryGroup>
  </div>)
}
export default Cost