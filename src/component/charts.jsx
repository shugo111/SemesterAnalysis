import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: Object.keys(this.props.totalData.Subjects),
        datasets: [
          {
            label: `# of failures (${this.props.TOTALFAIL})`,
            data: this.props.FAIL,
            backgroundColor: [
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
          {
            label: `# of Second Class (${this.props.TOTALSC})`,
            data: this.props.SC,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
          {
            label: `# of FC (${this.props.TOTALFC})`,
            data: this.props.FC,
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
          {
            label: `# of FCD (${this.props.TOTALFCD})`,
            data: this.props.FCD,
            backgroundColor: [
              "rgba(153, 102, 255, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    };
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.totalData !== this.props.totalData) {
  //     this.setState({
  //       data: {
  //         labels: this.props.totalData.SubjectCodes,
  //         datasets: [
  //           {
  //             label: "# of failures",
  //             data: this.props.FAIL,
  //             backgroundColor: [
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //             ],
  //             borderColor: [
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //             ],
  //             borderWidth: 1,
  //           },
  //           {
  //             label: "# of Second Class ",
  //             data: this.props.SC,
  //             backgroundColor: [
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(255, 99, 132, 0.2)",
  //             ],
  //             borderColor: [
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //             ],
  //             borderWidth: 1,
  //           },
  //           {
  //             label: `# of FC ${this.props.TOTALFC}`,
  //             data: this.props.FC,
  //             backgroundColor: [
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //             ],
  //             borderColor: [
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //             ],
  //             borderWidth: 1,
  //           },
  //           {
  //             label: "# of FCD",
  //             data: this.props.FCD,
  //             backgroundColor: [
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //             ],
  //             borderColor: [
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(255, 99, 132, 1)",
  //             ],
  //             borderWidth: 1,
  //           },
  //         ],
  //       },
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        <Bar
          data={this.state.data}
          options={{
            scales: {
              xAxes: [
                {
                  stacked: true,
                },
              ],
              yAxes: [
                {
                  stacked: true,
                },
              ],
            },
            animation: {
              onComplete: function () {
                var ctx = this.chart.ctx;
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.textBaseline = "top";

                this.data.datasets.forEach(function (dataset) {
                  for (var i = 0; i < dataset.data.length; i++) {
                    for (var key in dataset._meta) {
                      var model = dataset._meta[key].data[i]._model;
                      ctx.fillText(dataset.data[i], model.x, model.y);
                    }
                  }
                });
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
