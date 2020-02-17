import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

class Basiccolumn extends React.Component {
  render() {
    const data = [
      {
        year: "1951",
        sales: 38
      },
      {
        year: "1952",
        sales: 52
      },
      {
        year: "1956",
        sales: 61
      },
      {
        year: "1957",
        sales: 145
      },
      {
        year: "1958",
        sales: 48
      },
      {
        year: "1959",
        sales: 38
      },
      {
        year: "1960",
        sales: 38
      },
      {
        year: "1962",
        sales: 38
      }
    ];
    const cols = {
      sales: {
        tickInterval: 20
      }
    };
    return (
      <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="sales" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="year*sales" />
        </Chart>
      </div>
    );
  }
}

export default Basiccolumn;