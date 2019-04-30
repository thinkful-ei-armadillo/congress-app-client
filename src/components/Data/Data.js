import React from "react";
import * as d3 from "d3";
import graphData from "../../services/graph-data-service";

export default function MissedVotesGraph() {
  let dataset = graphData.getNumbers();
  const w = 500;
  const h = 500;

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  const bars = svg
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("width", 25)
    .attr("height", 200)
    .attr("x", (d, i) => i * 30)
    .attr("y", d => h - d * 2 + "px")
    .attr("fill", "red")
    .attr("class", "bar");

  return (
    <div className="missed-votes-graph">
      {this.svg}
      {this.bars}
    </div>
  );
}
