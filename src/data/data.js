export async function FetchData(dd1, dd2, dd3) {
  var url = "https://semdata.rxav.pw/summary/"
    .concat("20")
    .concat(dd3)
    .concat("/")
    .concat(dd1)
    .concat("/")
    .concat(dd2);

  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  // const subjectScores = Object.entries(data.Subjects);
  // console.log(Object.keys(data.Subjects));
  //   const temp = data.SubjectCodes[0];
  //   console.log(data[temp]);
  return data;
}

export async function FetchSummary(batch, dept) {
  var url = "https://semdata.rxav.pw/batch/"
    .concat(batch)
    .concat("/summary?dept=")
    .concat(dept);
  const response = await fetch(url);
  const data = await response.json();
  return data["ScoreDetail"];
}
export async function FetchAggregate(batch, dept) {
  var url = "https://semdata.rxav.pw/batch/"
    .concat(batch)
    .concat("/aggregate?dept=")
    .concat(dept);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export async function FetchDetained(batch, dept) {
  var url = "https://semdata.rxav.pw/batch/"
    .concat(batch)
    .concat("/detained?dept=")
    .concat(dept);
  const response = await fetch(url);
  const data = await response.json();
  console.log("list:" + data);
  return data;
}
