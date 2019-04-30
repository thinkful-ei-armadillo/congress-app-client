import React from 'react';
import * as d3 from 'd3';
import graphData from '../../services/graph-data-service';

export default function MissedVotesGraph() {
  let dataset = graphData.getNumbers();
  console.log(dataset);

  const svg = d3
    .select('div')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500)
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('width', 25)
    .attr('height', 200)
    .attr('x', (d, i) => i * 30)
    .attr('y', d => 500 - d * 2 + 'px')
    .attr('fill', 'red')
    .attr('class', 'bar');

  // const bars = svg
  //   .selectAll('rect')
  //   .data(dataset)
  //   .enter()
  //   .append('rect')
  //   .attr('width', 25)
  //   .attr('height', 200)
  //   .attr('x', (d, i) => i * 30)
  //   .attr('y', d => 500 - d * 2 + 'px')
  //   .attr('fill', 'red')
  //   .attr('class', 'bar');

  return (
    <div className='missed-votes-graph'>
    </div>
  );
}
