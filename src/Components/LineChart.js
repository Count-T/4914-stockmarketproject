import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Line } from "react-chartjs-2";
function LineChart({ values, sent, label }) {
  // const [values, setValues] = useState({
  //   c: 0,
  //   h: 0,
  //   l: 0,
  //   o: 0,
  // });
  // if (sent) {
  //   setValues((prevValues) => valuePrices);
  // }
  let display = "";
  const [zoom, setZoom] = useState(0);
  useEffect(() => {}, [zoom, label]);
  return (
    <div>
      <h4>Zoom In or Out</h4>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          if (zoom - 10 < 0) {
            setZoom((prevZoom) => 0);
          } else {
            setZoom((prevZoom) => prevZoom - 10);
          }
        }}
      >
        -
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (zoom + 10 > values.o) {
          } else {
            setZoom((prevZoom) => values.o - 10);
          }
        }}
      >
        +
      </Button>
      <Line
        data={{
          labels: ["Open", "High", "Low", "Current"],
          datasets: [
            {
              label: label,
              data: [values.c, values.h, values.l, values.o],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={120}
        width={300}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  min: zoom,
                  callback: function (value, index, values) {
                    return "$" + value;
                  },
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default LineChart;
