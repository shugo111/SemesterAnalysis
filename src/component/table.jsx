import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.totalData,
      subjects: Object.keys(this.props.totalData.Subjects),
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.totalData !== this.props.totalData) {
      this.setState({
        data: this.props.totalData,
        subjects: Object.keys(this.props.totalData.Subjects),
      });
    }
  }
  render() {
    const { data } = this.state;
    let i = 0;
    //console.log(data[data.SubjectCodes[0]].TotalAttendees);
    const items = [];
    const subjectScores=Object.entries(data.Subjects)
    for (i = 0; i < subjectScores.length; i++) {
      items.push(
        <tr key={subjectScores[i][0]}>
          <td>{i + 1}</td>
          {/* <td></td> */}
          <td>{subjectScores[i][0]}</td>
          {/* <td></td> */}
          <td>{subjectScores[i][1].Appeared}</td>
          <td>{subjectScores[i][1].Failed}</td>
          <td>{subjectScores[i][1].Fcd}</td>
          <td>{subjectScores[i][1].Fc}</td>
          <td>{subjectScores[i][1].Sc}</td>
          <td>{subjectScores[i][1].PassPercent}</td>
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
