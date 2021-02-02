import './Graph.css';

import { formatComma, formatDate } from '../../utils/utilities'

import Alert from '../Alert/Alert';
import React from "react";
import XYFrame from "semiotic/lib/XYFrame";
import { curveCatmullRom } from "d3-shape"
import { scaleTime } from "d3-scale"

const theme = ["#FF0000"];

const Graph = ({data, type, yAccessor}) => {

    if (typeof(data) === "undefined" || data.length === 0) {
        return (
            <Alert type={"danger"} text={"Oops, we can't fetch that data at the moment. Please check back later."} />
        )
    }

    const frameProps = {
        lines: {
            coordinates: [
                    ...data
                ]
            },
        size: [860, 400],
        margin: {
            left: 80,
            bottom: 90,
            right: 10,
            top: 40
        },
        lineType: {
            type: "line",
            interpolator: curveCatmullRom
        },
        xScaleType: scaleTime(),
        xAccessor: function(e) {
            return new Date(e.Date);
        },
        yAccessor: yAccessor,
        yExtent: [0],
        lineStyle: (d, i) => ({
            stroke: theme[i],
            strokeWidth: 2,
            fill: "none"
        }),
        title: (
            <text textAnchor="middle">Number of Colorado Covid-19 {type} by Day</text>
        ),
        axes: [
            {
                orient: "left",
                label: "Number of Cases",
                tickFormat: function(e){
                    return e / 1e3 + "k";
                }
            },
            {
                orient: "bottom",
                tickFormat: function(e) {
                    return e.getMonth() + 1 + "/" + e.getDate();
                },
                label: {
                    name: "Date",
                    locationDistance: 55
                }
            }
        ],
        hoverAnnotation: true,
        tooltipContent: d => (
            <div className="tooltip-content">
                <p>Date: {formatDate(d.Date)}</p>
                <p>Total {type} Count: {formatComma(d.Cases)}</p>
            </div>
        )
    }
    return <XYFrame {...frameProps} />
}

export default Graph;