import React, { useState, useEffect } from 'react'
import { VictoryArea, VictoryChart, VictoryGroup, VictoryLabel, VictoryPolarAxis, VictoryTheme } from 'victory';
const characterData = [
  { 2011: 1, 2012: 250, 2013: 1, 2014: 40, 2015: 50 },
  { 2011: 2, 2012: 300, 2013: 2, 2014: 80, 2015: 90 },
  { 2011: 5, 2012: 225, 2013: 3, 2014: 60, 2015: 120 }
]
function getMaxima (data) {
  const groupedData = Object.keys(data[0]).reduce((memo, key) => {
    memo[key] = data.map((d) => d[key]);
    return memo;
  }, {});
  return Object.keys(groupedData).reduce((memo, key) => {
    memo[key] = Math.max(...groupedData[key]);
    return memo;
  }, {});
}
function processData (data) {
  const maxByGroup = getMaxima(data);
  function makeDataArray (d) {
    return Object.keys(d).map((key) => {
      return { x: key, y: d[key] / maxByGroup[key] };
    });
  };
  return data.map((datum) => makeDataArray(datum));
}
function Storage () {
  const [data, setData] = useState([])
  const [maxima, setMaxima] = useState({})
  useEffect(() => {
    setData(processData(characterData))
    setMaxima(getMaxima(characterData))
  }, [])
  return (<div className="uk-card uk-card-body uk-flex uk-flex-wrap uk-flex-around uk-margin-xlarge-bottom">
    <div className="uk-flex uk-flex-between uk-width-1-3@m uk-width-expand@l">
      <div className="uk-flex uk-flex-column">
        <div className="uk-margin-small-left uk-text-bold" style={{ marginBottom: '-4px', color: 'white' }}>Cloud Storage</div>
        <span className="uk-margin-small-left uk-margin-bottom" style={{ fontSize: '0.8em' }}>72% space used</span>
      </div>
      <div className="uk-flex uk-flex-column">
        <div className="uk-flex uk-flex-middle"><div className="uk-margin-small-right" style={{ width: '10px', height: '10px', backgroundColor: 'cyan' }}></div>Net profit</div>
        <div className="uk-flex uk-flex-middle"><div className="uk-margin-small-right" style={{ width: '10px', height: '10px', backgroundColor: 'orange' }}></div>Revenue</div>
        <div className="uk-flex uk-flex-middle"><div className="uk-margin-small-right" style={{ width: '10px', height: '10px', backgroundColor: 'tomato' }}></div>Cashflow</div>
      </div>
    </div>
    <div className="uk-margin-large">
      <VictoryChart padding={ 20 } polar theme={ VictoryTheme.material } domain={{ y: [0, 1] }}>
        <VictoryGroup colorScale={ ["cyan", "orange", "tomato"] } style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}>
          { data.map((data, i) => <VictoryArea key={ i } data={ data }></VictoryArea>) }
        </VictoryGroup>
        { 
          Object.keys(maxima).map((key, i) => <VictoryPolarAxis key={ i } dependentAxis style={{
            axisLabel: { padding: 10 },
            axis: { stroke: "none" },
            grid: { stroke: "none" }
          }} tickLabelComponent={ <VictoryLabel labelPlacement="vertical"></VictoryLabel> } labelPlacement="perpendicular" axisValue={ i + 1 } label={ key } tickFormat={ (t) => Math.ceil(t * maxima[key]) } tickValues={ [0.25, 0.5, 0.75] }></VictoryPolarAxis>) 
        }
        <VictoryPolarAxis labelPlacement="parallel" tickFormat={ () => "" } style={{
          axis: { stroke: "none" },
          grid: { stroke: "grey", opacity: 0.5 }
        }}></VictoryPolarAxis>
      </VictoryChart>
      <button className="uk-button uk-button-primary uk-button-large uk-width-1-1 uk-margin-top">Upgrade Storage</button>
    </div>
  </div>)
}
export default Storage