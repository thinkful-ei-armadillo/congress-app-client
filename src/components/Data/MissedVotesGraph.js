import React, { Component } from "react";
import * as d3 from "d3";
import graphData from "../../services/graph-data-service";
import "./Graph.css";

// async function MissedVotesGraph() {
export default class MissedVotesGraph extends Component {
  async componentDidMount() {
    let dataset = await graphData.getNumbers();
    console.log(dataset);

    const h = 200;
    const w = 300;

    const x = d3.scaleLinear().range([0, w]);
    const y = d3.scaleLinear().range([h, 0]);
    // const valueLine = d3.line().y(function(d) {
    //   return y(d);
    // });

    y.domain([
      0,
      5
      // d3.max(dataset, function(d) {
      //   return d;
      // })
    ]);

    const svgGraph = d3
      .select("#missed-votes-graph-wrapper")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("id", "graph")
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("width", 40)
      .attr("height", 200)
      .attr("x", (d, i) => i * 60 + 85)
      .attr("y", d => y(d) - d + "px")
      .attr("fill", function(d, i) {
        if (i === 0) {
          return "red";
        } else if (i === 1) {
          return "blue";
        } else if (i === 2) {
          return "green";
        }
      });

    // d3.select("#graph")
    //   .append("path")
    //   .data([dataset])
    //   .attr("class", "line")
    //   .attr("d", valueLine);

    d3.select("#graph")
      .append("g")
      .style("fill", "black")
      .attr("transform", `translate(45, ` + -6 + ")")
      .call(d3.axisLeft(y));

    d3.select("#graph")
      .append("g")
      .attr("transform", `translate(39, ` + (h - 5) + ")")
      .style("fill", "black")
      .call(d3.axisBottom(x));

    d3.select("#graph")
      .append("text")
      .style("color", "black")
      .attr("transform", "rotate(-90)")
      .attr("y", -5)
      .attr("x", -100)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Percentage");

    // const tooltips = svgGraph
    d3.select("#graph")
      .selectAll("title")
      .data(dataset)
      .enter()
      .append("title")
      .text(function(d, i) {
        return "Missed voting % is " + d.toFixed(2) + "%";
      });

    const labels = svgGraph
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .attr("x", (d, i) => i * 30)
      .attr("y", d => h - 2 * d - 3)
      .text(d => d)
      .attr("fill", "red")
      .style("font-size", 25);
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
      <div id="missed-votes-graph">
        <h3 id="missed-votes-title">Percentage of Missed Votes By Party</h3>
        <div id="missed-votes-graph-wrapper" />
        <p>
          <svg height="10" width="10">
            <circle cx="10" cy="10" r="10" id="repub-key" />
          </svg>{" "}
          = Republican
        </p>
        <p>
          <svg height="10" width="10">
            <circle cx="10" cy="10" r="10" id="dem-key" />
          </svg>{" "}
          = Democrats
        </p>
        <p>
          <svg height="10" width="10">
            <circle cx="10" cy="10" r="10" id="ind-key" />
          </svg>{" "}
          = Independent
        </p>
        <br />
      </div>
    );
  }
}
