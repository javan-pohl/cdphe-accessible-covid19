import OrdinalFrame from "semiotic/lib/OrdinalFrame";
import React from "react";

const BarPlot = ({ data, oAccessor, rAccessor }) => {
  const fillColors = ["#2e8b57", "#e4d96f", "red", "green"];
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
    rAccessor: ["testedAtCommercialLabs", "testedAtStateLabs"],

    /* --- Customize --- */
    style: (d) => {
      return {
        fill: fillColors[d.rIndex % fillColors.length],
        stroke: "white",
      };
    },

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
            <tspan fill={fillColors[0]}>Commercial Labs</tspan> +{" "}
            <tspan fill={fillColors[1]}>State Labs</tspan>
          </text>
        ),
        tickFormat: (x) => {
          return x / 1000 + "K";
        },
      },
    ],
  };

  return <OrdinalFrame {...frameProps} />;
};

export default BarPlot;
