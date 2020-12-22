import React from "react";
import XYFrame from "semiotic/lib/XYFrame";
import { curveCatmullRom } from "d3-shape"
import { scaleTime } from "d3-scale"
import { formatComma, formatDate } from '../../../utils/utilities'
import './Graph.css';


const theme = ["#FF0000"];

const Graph = (props) => {

    const frameProps = {   
        lines: { 
            coordinates: [
                    ...props.data 
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
        yAccessor: "Hosp",
        yExtent: [0],
        lineStyle: (d, i) => ({
            stroke: theme[i],
            strokeWidth: 2,
            fill: "none"
        }),
        title: (
            <text textAnchor="middle">Total Colorado Covid-19 People Hospitalized by Date</text>
        ),
        axes: [
            { 
                orient: "left", 
                label: "Number of People Hospitalized", 
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
                <p>Total People Hospitalized Count: {formatComma(d.Hosp)}</p>
            </div>
        )
    }
    return <XYFrame {...frameProps} />
}

export default Graph;