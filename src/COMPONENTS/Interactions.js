import React from 'react'
import { VictoryBar } from 'victory'
const data = [{ x: 1, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 7 }, { x: 4, y: 5 }, { x: 5, y: 6 }]
function Interactions () {
  return (<div className="uk-card uk-card-body uk-width-1-2">
    <VictoryBar cornerRadius={ 16 } padding={ 16 } data={ data } style={{ data: { fill: "purple" }}}></VictoryBar>
  </div>)
}
export default Interactions