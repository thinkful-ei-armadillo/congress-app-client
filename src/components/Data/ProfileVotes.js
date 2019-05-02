import React, { Component } from "react";
import * as d3 from "d3";

export default class ProfileVotes extends Component {
  componentDidMount() {
    const values = Object.values(this.props);
    console.log(values);
    values.push(1 - values[0]);
    console.log(values);
    const data = values.map(num => num * 100);

    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal().range(["red", "blue"]);

    const pie = d3.pie().value(function(d) {
      return d;
    })(data);
    const arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(65);

    const labelArc = d3
      .arc()
      .outerRadius(radius)
      .innerRadius(radius - 40);
    const svg = d3
      .select("#profile-votes-graph")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    const g = svg
      .selectAll("arc")
      .data(pie)
      .enter()
      .append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("d", arc)
      .style("fill", function(d) {
        return color(d.data);
      });
  }

  render() {
    // let dataset = this.props;
    return <div id="profile-votes-graph" />;
  }
}

// const width = 480;
// const height = 225;
// const radius = Math.min(width, height) / 2;

// const svgGraph = d3
//   .select("#profile-votes-graph")
//   .append("svg")
//   .attr("width", width)
//   .attr("height", height);

// const pie = d3.layout
//   .pie()
//   .sort(null)
//   .value(function(d) {
//     return d;
//   });

// const arc = d3.svg
//   .arc()
//   .outerRadius(radius * 0.6)
//   .innerRadius(radius * 0.3);
// const outerArc = d3.svg
//   .arc()
//   .outerRadius(radius * 0.5)
//   .innerRadius(radius * 0.5);
