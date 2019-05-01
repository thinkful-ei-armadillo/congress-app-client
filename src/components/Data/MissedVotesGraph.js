import React, { Component } from 'react';
import * as d3 from 'd3';
import graphData from '../../services/graph-data-service';
import './Graph.css'

export default class MissedVotesGraph extends Component {
  
  async componentDidMount() {
    let dataset = await graphData.getNumbers();
    console.log(dataset);

    const h = 200;
    const w = 200;
  
    const svgGraph = d3
      .select('#missed-votes-graph-wrapper')
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .attr('id', 'graph')
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', 200)
      .attr('x', (d, i) => (i * 60) + 20)
      .attr('y', d => h - (d * 30) + 'px')
      .attr('fill', function(d, i) {
        if (i === 0) {
          return 'red';
        }
        else if (i === 1) {
          return 'blue';
        }
        else if (i === 2) {
          return 'green';
        }
      });
      

    const tooltips = svgGraph
      .selectAll('title')
      .data(dataset)
      .enter()
      .append('title')
      .text(function(d, i) {
        return 'Missed voting % is ' + d.toFixed(2) + '%';
      })

    const labels = svgGraph
      .selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .attr('x', (d,i)=>i*30)
      .attr('y', (d)=>h-2*d-3)
      .text((d)=>d)
      .attr('fill', 'red')
      .style('font-size', 25);
  }

  

  // svg.selectAll('text')
  //       .data(dataset)
  //       .enter()
  //       .append('text')
  //       .attr('x',(d,i)=>d[0]+5)
  //       .attr('y',(d,i)=>h-d[1])
  //       .text((d)=>d[0]+','+d[1]);

  render() {

    return (
      <div id='missed-votes-graph'>
       <h3 id='missed-votes-title'>Average % of Missed Votes By Party</h3>
       <div id='missed-votes-graph-wrapper'></div>
       <p><svg height='10' width='10'><circle cx='10' cy='10' r='10' id='repub-key'></circle></svg> = Republican</p>
       <p><svg height='10' width='10'><circle cx='10' cy='10' r='10' id='dem-key'></circle></svg> = Democrats</p>
       <p><svg height='10' width='10'><circle cx='10' cy='10' r='10' id='ind-key'></circle></svg> = Independent</p>
       <br />
      </div>
    )
  }
}