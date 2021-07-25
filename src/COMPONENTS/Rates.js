import React, { useContext } from 'react'
import { VictoryPie } from 'victory'
import { AppContext } from '../STATE'
function Rates () {
  const { createRates } = useContext(AppContext)
  const bounce = createRates()
  return (<div className="uk-card uk-card-body">
    <div className="uk-flex">
      <div className="uk-width-1-3">
        <div className="uk-flex uk-flex-middle">
          <div className="uk-flex uk-flex-column">
            <span style={{ fontSize: '2em', marginBottom: '-8px', color: 'white' }}>{ `${ bounce[0].y }%` }</span>
            <span style={{ fontSize: '0.7em' }}>Bounce Rate</span>
          </div>
          <VictoryPie data={ bounce } innerRadius={ 128 } style={{ labels: { fill: "none" } }} colorScale={ ["cyan", "rgba(48,55,106,1)"] }></VictoryPie>
        </div>
      </div>
      <div className="uk-width-1-3">
        <div className="uk-flex uk-flex-middle">
          <div className="uk-flex uk-flex-column">
            <span style={{ fontSize: '2em', marginBottom: '-8px', color: 'white' }}>48k</span>
            <span style={{ fontSize: '0.7em' }}>Conversion Rate</span>
          </div>
          <VictoryPie data={ createRates() } innerRadius={ 128 } style={{ labels: { fill: "none" } }} colorScale={ ["pink", "rgba(48,55,106,1)"] }></VictoryPie>
        </div>
      </div>
      <div className="uk-width-1-3">
        <div className="uk-flex uk-flex-middle">
          <div className="uk-flex uk-flex-column">
            <span style={{ fontSize: '2em', marginBottom: '-8px', color: 'white' }}>21k</span>
            <span style={{ fontSize: '0.7em' }}>Engagement Rate</span>
          </div>
          <VictoryPie data={ createRates() } innerRadius={ 128 } style={{ labels: { fill: "none" } }} colorScale={ ["green", "rgba(48,55,106,1)"] }></VictoryPie>
        </div>
      </div>
    </div>
  </div>)
}
export default Rates