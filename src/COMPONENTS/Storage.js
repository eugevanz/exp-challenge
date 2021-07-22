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
  const [data, setData] = useState()
  const [maxima, setMaxima] = useState()
  useEffect(() => {
    setData(processData(characterData))
    setMaxima(getMaxima(characterData))
  }, [data, maxima])
  return (<div className="uk-card uk-card-body">
    <p>
      <span className="uk-margin-small-left" style={{ fontSize: '2em', color: 'white' }}>65% <span className="uk-text-default uk-text-muted uk-margin-small-left">Income</span></span>
      <br></br>
      <span className="uk-text-success uk-margin-small-left uk-margin-large-bottom">Increase in Average</span>
    </p>
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
  </div>)
}
export default Storage