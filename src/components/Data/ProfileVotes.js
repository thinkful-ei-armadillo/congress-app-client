import React, { Component } from "react";
import * as d3 from "d3";

export default class ProfileVotes extends Component {
  componentDidMount() {
    const width = 480;
    const height = 225;
    const radius = Math.min(width, height) / 2;

    const svgGraph = d3
      .select("#profile-votes-graph")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const pie = d3.layout
      .pie()
      .sort(null)
      .value(function(d) {
        return d;
      });

    const arc = d3.svg
      .arc()
      .outerRadius(radius * 0.6)
      .innerRadius(radius * 0.3);
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
