import React from 'react'
import { VictoryBar } from 'victory'
function Social ({ data, social }) {
  return (<div className="uk-card uk-card-body uk-width-1-2">
    <div className="uk-flex uk-flex-middle uk-padding-small" style={{ backgroundColor: 'rgba(48,55,106,1)' }}>
      <i className={ `fab ${ social }` } style={{ fontSize: '4em', color: 'cyan' }}></i>
      <div className="uk-margin-left uk-flex uk-flex-column">
        <div className="uk-margin-bottom">Followers</div>
        <div className="uk-text-bold uk-text-large" style={{ color: 'white', marginTop: '-12px' }}>{ `${ data.follow }k` }</div>
      </div>
    </div>
    <div className="uk-flex uk-flex-bottom uk-flex-between uk-margin-top">
      <div>
        <div className="uk-flex uk-flex-column">
          <div className="uk-margin-bottom uk-text-small">Engagement</div>
          <div className="uk-text-bold uk-text-large" style={{ color: 'white', marginTop: '-24px' }}>{ `${ data.engage }k` }</div>
        </div>
        <div className="uk-flex uk-flex-column">
          <div className="uk-margin-bottom uk-text-small">Impression</div>
          <div className="uk-text-bold uk-text-large" style={{ color: 'white', marginTop: '-24px' }}>{ `${ data.impress }k` }</div>
        </div>
      </div>
      <div className="uk-width-1-2 uk-text-center">
        <VictoryBar cornerRadius={ 16 } padding={ 24 } data={ data.rates } style={{ data: { fill: "gold" }}}></VictoryBar>
        <hr style={{ margin: '1px' }}></hr>
        <div style={{ fontSize: '0.8em', color: 'white' }}>Last 5 days</div>
      </div>
    </div>
  </div>)
}
export default Social