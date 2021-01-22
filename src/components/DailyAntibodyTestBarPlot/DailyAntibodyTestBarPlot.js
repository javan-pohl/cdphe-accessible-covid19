import "./DailyAntibodyTestBarPlot.css";

import OrdinalFrame from "semiotic/lib/OrdinalFrame";
import React from "react";

const DailyAntibodyTestBarPlot = ({ data }) => {
  console.log('data: ', data);
  const fillColors = ["#ff6945", "#0000FF"];
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  });

  const frameProps = {
    /* --- Data --- */
    data: data,
    /* --- Size --- */
    size: [860, 400],
    /* --- Layout --- */
    margin: {
      left: 80,
      bottom: 90,
      right: 10,
      top: 40,
    },
    type: "bar",
    /* --- Process --- */
    oAccessor: "date",
    rAccessor: ["positiveTests", "negativeTests"],


    /* --- Customize --- */
    title: "Daily Antibody Tests",
    style: (d) => {
      return {
        fill: fillColors[d.rIndex % fillColors.length],
        stroke: "white",
      };
    },

    /* --- Interact --- */
    pieceHoverAnnotation: [
      {
        type: "highlight",
        style: {
          stroke: "white",
          fill: "yellow",
          strokeWidth: 4,
          strokeOpacity: 0.5,
        },
      },
      { type: "frame-hover" },
    ],

    /* --- Annotate --- */
    oLabel: (d) => {
      if (d.endsWith("01")) {
        const date = new Date(d);
        date.setDate(date.getDate() + 1);
        const formatted = formatter.format(date);
        return <text fontSize={12}>{formatted}</text>;
      }
    },
    axes: [
      {
        orient: "left",
        label: (
          <text textAnchor="middle">
            <tspan fill={fillColors[0]}>Positive</tspan> +{" "}
            <tspan fill={fillColors[1]}>Negative</tspan>
          </text>
        ),
        tickFormat: (x) => {
          return x / 1000 + "K";
        },
      },
      {
        orient: "bottom",
        label: {
          name: "Date",
          locationDistance: 55,
        },
        tickFormat: (x) => "",
        tickLineGenerator: (x) => "",
      }
    ],
    hoverAnnotation: true,
    tooltipContent: (d) => {
      return (
        <div className="tooltip-content">
          <p>Date: {d.date}</p>
          <p>Tests conducted: {d.antibodyTests}</p>
          <p>Positive Tests: {d.positiveTests}</p>
          <p>Negative Tests: {d.negativeTests}</p>
        </div>
      );
    },
  };

  return <OrdinalFrame {...frameProps} />;
};

export default DailyAntibodyTestBarPlot;
