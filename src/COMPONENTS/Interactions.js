import React from 'react'
import { VictoryBar } from 'victory'
function Interactions ({ data, color, name }) {
  return (<div className="uk-card uk-card-body uk-flex uk-flex-middle">
    <div className="uk-width-1-2">
      <VictoryBar cornerRadius={ 8 } data={ data } style={{ data: { fill: color }}}></VictoryBar>
      <hr style={{ marginTop: '-0.1px' }}></hr>
    </div>
    <dl className="uk-description-list uk-margin-left">
      <dt style={{ color: 'white', fontWeight: 'bold' }}>{ name }</dt>
      <dd style={{ fontSize: '0.8em' }}>Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis.</dd>
    </dl>
  </div>)
}
export default Interactions