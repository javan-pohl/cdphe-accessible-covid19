import "./StackedBarPlot.css";

import Alert from "../../Alert/Alert"
import ResponsiveOrdinalFrame from "semiotic/lib/ResponsiveOrdinalFrame";
import React from "react";

const StackedBarPlot = ({ data, fillColors, rAccessor, title, rLabels }) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  });

  if (typeof data === "undefined" || data.length === 0) {
    return (
      <Alert
        type={"danger"}
        text={
          "Oops, we can't fetch that data at the moment. Please check back later."
        }
      />
    );
  }

  const frameProps = {
    /* --- Data --- */
    data: data,
    /* --- Size --- */
    size: [860, 400],
    responsiveWidth: true,
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
    // rAccessor: ["positiveTests", "negativeTests"],
    rAccessor: rAccessor,

    /* --- Customize --- */
    title: title,
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
            <tspan fill={fillColors[0]}>{rLabels[0]}</tspan> +{" "}
            <tspan fill={fillColors[1]}>{rLabels[1]}</tspan>
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
      },
    ],
    hoverAnnotation: true,
    tooltipContent: (d) => {
      return (
        <div className="tooltip-content">
          <p>Date: {d.date}</p>
          <p>
            {rLabels[0]}: {d[rAccessor[0]]}
          </p>
          <p>
            {rLabels[1]}: {d[rAccessor[1]]}
          </p>
        </div>
      );
    },
  };

  return <ResponsiveOrdinalFrame {...frameProps} />;
};

export default StackedBarPlot;
