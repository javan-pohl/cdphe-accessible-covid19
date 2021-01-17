import OrdinalFrame from "semiotic/lib/OrdinalFrame";
import React from 'react';

const BarPlot = ({data, oAccessor, rAccessor}) => {
    const fillColors = [
        '#2e8b57',
        '#e4d96f',
        'red',
        'green',
    ]
    // date field is a string date in YYYY-MM-DD format
    console.log('data: ', data);
    const dateLabels = data
        .map(x => x.date)
        .filter(dateStr => dateStr.endsWith('01'))
        .map(dateStr => {
            let formatter = new Intl.DateTimeFormat('en-US', {
                year: '2-digit',
                month: 'short',
                day: 'numeric',
            })
            let date = new Date(dateStr);
            date.setDate(date.getDate() + 1);
            return formatter.format(date);
        })
    console.log([...Array(dateLabels.length).keys()])
    const frameProps = {
        data: data,
        size: [860, 400],
        margin: {
            left: 80,
            bottom: 90,
            right: 10,
            top: 40
        },
        type: "bar",
        oAccessor: oAccessor,
        rAccessor: rAccessor,
        style: d => {
            return {fill: fillColors[d.rIndex % fillColors.length], stroke: "white"}
        },
        axes: [
            {
                orient: 'left',
                label: (
                    <text textAnchor='middle'>
                        <tspan fill={fillColors[0]}>Commercial Labs</tspan> + {" "}
                        <tspan fill={fillColors[1]}>State Labs</tspan>
                    </text>
                ),
                tickFormat: x => {
                    return x / 1000 + 'K';
                }
            },
            // TODO: figure out date labels on x-axis
            {
                orient: 'bottom',
                label: {
                    name: "Date",
                    locationDistance: 55
                },
                ticks: dateLabels.length,
                tickValues: [...Array(dateLabels.length).keys()],
                tickFormat: (i) => dateLabels[i],
            }
        ]
    }
    return <OrdinalFrame {...frameProps} />
}

export default BarPlot;