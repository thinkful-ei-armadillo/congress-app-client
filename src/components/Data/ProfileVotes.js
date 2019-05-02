import React, { Component } from "react";
import * as d3 from "d3";

export default class ProfileVotes extends Component {
  componentDidMount() {
    let data = [60, 40];
    const width = 480;
    const height = 225;
    const radius = Math.min(width, height) / 2;

    const svgGraph = d3
      .select("#profile-votes-graph")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const group = svgGraph.append("g").attr("transform", "translate(300, 300)");
    const arc = d3.svg
      .arc()
      .outerRadius(radius * 0.6)
      .innerRadius(radius * 0.3);

    const pie = d3.layout.value(function(d) {
      return d;
    });

    const arcs = group
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    const outerArc = d3.svg
      .arc()
      .outerRadius(radius * 0.5)
      .innerRadius(radius * 0.5);
  }

  render() {
    let dataset = this.props;
    return <div id="profile-votes-graph" />;
  }
}
