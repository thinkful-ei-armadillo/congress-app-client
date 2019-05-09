import React, { Component } from 'react';
import * as d3 from 'd3';
import graphData from '../../services/graph-data-service';
import './Graph.css';

export default class MissedVotesGraph extends Component {
  async componentDidMount() {
    let dataset = await graphData.getNumbers();
    // console.log(dataset);

    const h = 200;
    const w = 250;

    const x = d3.scaleLinear().range([0, w]);
    const y = d3.scaleLinear().range([h, 0]);

    y.domain([
      0,
      d3.max(dataset, function(d) {
        return d + 1.5;
      })
    ]);

    d3.select('#missed-votes-graph-wrapper')
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
      .attr('x', (d, i) => i * 60 + 60)
      .attr('y', d => y(d) - d + 'px')
      .attr('id', function(d, i) {
        if (i === 0) {
          return 'repubs';
        } else if (i === 1) {
          return 'dems';
        } else if (i === 2) {
          return 'ind';
        }
      })
      .attr('fill', function(d, i) {
        if (i === 0) {
          return 'red';
        } else if (i === 1) {
          return 'blue';
        } else if (i === 2) {
          return 'green';
        }
      });

    d3.select('#graph')
      .append('g')
      .attr('transform', `translate(28, ` + (h - 5) + ')')
      .style('fill', '#333')
      .call(d3.axisBottom(x));

    d3.select('#graph')
      .append('text')
      .style('color', 'black')
      .attr('transform', 'rotate(-90)')
      .attr('y', -5)
      .attr('x', -100)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '16')
      .text('Percentage');

    d3.select('#graph')
      .append('text')
      .attr('x', 60)
      // .attr('y', 70)
      .attr('y', y(dataset[0]) - dataset[0] - 5 + 'px')
      .attr('fill', 'red')
      .text(dataset[0].toFixed(2) + '%');

    d3.select('#graph')
      .append('text')
      .attr('x', 120)
      .attr('y', y(dataset[1]) - dataset[1] - 5 + 'px')
      .attr('fill', 'blue')
      .text(dataset[1].toFixed(2) + '%');

    d3.select('#graph')
      .append('text')
      .attr('x', 180)
      .attr('y', y(dataset[2]) - dataset[2] - 5 + 'px')
      .attr('fill', 'green')
      .text(dataset[2].toFixed(2) + '%');
  }

  render() {
    return (
      <div id="missed-votes-graph">
        <h2 id="missed-votes-title">Average % of Missed Votes By Party</h2>
        <div id="missed-votes-graph-wrapper" />
        <p className="legend">
          <span className="legend-item">
            <svg height="10" width="10">
              <circle cx="10" cy="10" r="10" id="repub-key" />
            </svg>{' '}
            Republican{' '}
          </span>
          <span className="legend-item">
            <svg height="10" width="10">
              <circle cx="10" cy="10" r="10" id="dem-key" />
            </svg>{' '}
            Democrats{' '}
          </span>
          <span className="legend-item">
            <svg height="10" width="10">
              <circle cx="10" cy="10" r="10" id="ind-key" />
            </svg>{' '}
            Independent{' '}
          </span>
        </p>
        <p />
        <p />
        <br />
      </div>
    );
  }
}
