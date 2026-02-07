import { Radar } from '@ant-design/plots';
import React from 'react';

type AlignmentRadarProps = {
  names: string[];
  values: number[];
  colour?: string;
};

export const AlignmentRadar: React.FC<AlignmentRadarProps> = ({ names, values, colour }) => {
  const data = names.map((name, i) => ({
    item: name,          // match xField
    score: values[i] ?? 0, // match yField
  }));

  const fillColor = colour || '#630436';
  const pointColor = '#630436';

  const config = {
    data,
    xField: 'item',
    yField: 'score',
    coordinateType: 'polar',
    theme: {
      type: 'dark',
      components: {
        axis: {
          common: {
            label: {
              style: {
                fill: '#ffffff', // grid + axis text
              },
            },
            title: {
              style: {
                fill: '#ffffff',
              },
            },
          },
        },
        legend: {
          common: {
            itemName: {
              style: {
                fill: '#ffffff',
              },
            },
          },
        },
        tooltip: {
          domStyles: {
            'g2-tooltip': {
              color: '#ffffff',
            },
          },
        },
      },
    },
    axis: {
      x: {
        grid: true,
        gridLineWidth: 1,
        tick: false,
        gridLineDash: [0, 0],
        line: false,
      },
      y: {
        zIndex: 1,
        title: false,
        gridConnect: 'line',
        gridLineWidth: 1,
        gridLineDash: [0, 0],
      },
    },
    area: {
      style: { fill: fillColor, fillOpacity: 0.5 },
    },
    line: { style: { stroke: fillColor, lineWidth: 2 } },
    point: {
      visible: true,
      size: 3,
      style: { fill: pointColor, stroke: pointColor, lineWidth: 2 },
    },
    scale: { x: { padding: 0, margin: 0, align: 0 }, y: { tickCount: 5, min: 0, max: 80 } },
  };

  return <Radar {...config} className={"rounded-2xl m-[-2rem] p-0 h-[20rem!important]"} />;
};
