import React, { Component } from "react";
import Dropdown from "../component/dropdown";
import Chart from "../component/charts";
import Table from "../component/table";
import { FetchData } from "../data/data";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropitem1: [
        {
          id: 1,
          value: "CS",
        },
      ],
      dropitem2: [
        {
          id: 1,
          value: "1",
        },
        {
          id: 2,
          value: "2",
        },
        {
          id: 3,
          value: "3",
        },
        {
          id: 4,
          value: "4",
        },
        {
          id: 5,
          value: "5",
        },
      ],
      dropitem3: [
        {
          id: 1,
          value: "15",
        },
        {
          id: 2,
          value: "16",
        },
        {
          id: 3,
          value: "17",
        },
      ],
      dd1: "CS",
      dd2: "4",
      dd3: "17",
      data: {},
      isLoaded: false,
      url: "",
      fcd: [],
      fc: [],
      sc: [],
      fail: [],
    };
    // var url = "https://semdata.rxav.pw/batch/"
    //   .concat(this.state.dd1)
    //   .concat("/20")
    //   .concat(this.state.dd3)
    //   .concat("/")
    //   .concat(this.state.dd2)
    //   .concat("/summary");
    // this.state.url = url;
  }
  componentDidMount() {
    // GetData(this.state.url).then((result) =>
    //   this.setState({
    //     data: result,
    //     isLoaded: true,
    //   })
    // );
    // let url = "https://semdata.rxav.pw/batch/CS/2017/5/summary";
    // this.setState({ url });
    console.log("didmount");

    FetchData(this.state.dd1, this.state.dd2, this.state.dd3).then((result) => {
      var fcd = [],
        fc = [],
        sc = [],
        fail = [];
      for (var i = 0; i < result.SubjectCodes.length; i++) {
        fcd[i] = result[result.SubjectCodes[i]].FCD;
        fc[i] = result[result.SubjectCodes[i]].FC;
        sc[i] = result[result.SubjectCodes[i]].SC;
        fail[i] = result[result.SubjectCodes[i]].FailPercentage;
      }
      this.setState({
        data: result,
        isLoaded: true,
        fcd,
        fc,
        sc,
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.dd1 !== this.state.dd1||prevState.dd2 !== this.state.dd2||prevState.dd3 !== this.state.dd3) {
      // let url = "https://semdata.rxav.pw/batch/CS/2017/5/summary";
      // this.setState({ url });
      console.log("didupdate");
      FetchData(this.state.dd1, this.state.dd2, this.state.dd3).then(
        (result) => {
          var fcd = [],
            fc = [],
            sc = [],
            fail = [];
          for (var i = 0; i < result.SubjectCodes.length; i++) {
            fcd[i] = result[result.SubjectCodes[i]].FCD;
            fc[i] = result[result.SubjectCodes[i]].FC;
            sc[i] = result[result.SubjectCodes[i]].SC;
            fail[i] = result[result.SubjectCodes[i]].FailPercentage;
          }
          this.setState({
            data: result,
            isLoaded: true,
            fcd,
            fc,
            sc,
          });
        }
      );
    }
  }
  onSelect1 = (item) => {
    this.setState({ dd1: item });
  };
  onSelect2 = (item) => {
    this.setState({ dd2: item });
  };
  onSelect3 = (item) => {
    this.setState({ dd3: item });
  };

  render() {
    console.log("render");

    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      // let url = "20"
      //   .concat(this.state.dd3)
      //   .concat("_")
      //   .concat(this.state.dd2)
      //   .concat(".csv");
      // this.state.url = url;

      return (
        <>
          <div
            style={{
              maxWidth: "1000px",
              margin: "100px auto",
            }}
          >
            <div className="row">
              <Dropdown
                items={this.state.dropitem1}
                selected={this.onSelect1}
                title="Department"
              />
              <Dropdown
                items={this.state.dropitem2}
                selected={this.onSelect2}
                title="Semester"
              />
              <Dropdown
                items={this.state.dropitem3}
                selected={this.onSelect3}
                title="Scheme"
              />
              <button className="waves-effect waves-light btn">Print</button>
            </div>
            <div className="card z-depth-5" style={{}}>
              <Chart
                totalData={this.state.data}
                FCD={this.state.fcd}
                FC={this.state.fc}
                SC={this.state.sc}
                FAIL={this.state.fail}
              />
            </div>
          </div>
          <div
            className="card z-depth-5"
            style={{
              maxWidth: "1300px",
              padding: 10,
              margin: "auto",
            }}
          >
            <Table totalData={this.state.data} />
          </div>
        </>
      );
    }
  }
}

export default HomePage;
