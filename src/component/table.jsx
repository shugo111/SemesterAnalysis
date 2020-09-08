import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.totalData,
      subjects: this.props.totalData.SubjectCodes,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.totalData !== this.props.totalData) {
      this.setState({
        data: this.props.totalData,
        subjects: this.props.totalData.SubjectCodes,
      });
    }
  }
  render() {
    const { data } = this.state;
    let i = 0;
    console.log(data[data.SubjectCodes[0]].TotalAttendees);
    const items = [];
    for (i = 0; i < data.SubjectCodes.length; i++) {
      items.push(
        <tr key={data.SubjectCodes[i]}>
          <td>{i + 1}</td>
          {/* <td></td> */}
          <td>{data.SubjectCodes[i]}</td>
          {/* <td></td> */}
          <td>{data[data.SubjectCodes[i]].TotalAttendees}</td>
          <td>{data[data.SubjectCodes[i]].Fail}</td>
          <td>{data[data.SubjectCodes[i]].FCD}</td>
          <td>{data[data.SubjectCodes[i]].FC}</td>
          <td>{data[data.SubjectCodes[i]].SC}</td>
          <td>{data[data.SubjectCodes[i]].PassPercentage.toFixed(2)}</td>
        </tr>
      );
    }
    return (
      <div>
        <table className="striped  responsive-table" id="marks_table">
          <thead>
            <tr>
              <th>Sno</th>
              {/* <th>Subject</th> */}
              <th>Subject Code</th>
              {/* <th>Faculty Name</th> */}
              <th>Students appeared</th>
              <th>No of failure</th>
              <th>FCD</th>
              <th>FC</th>
              <th>Second Class</th>
              <th>Pass Percentage</th>
            </tr>
          </thead>

          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
