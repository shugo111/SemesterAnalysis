export async function FetchData(dd1, dd2, dd3) {
  var url = "https://semdata.rxav.pw/batch/"
    .concat(dd1)
    .concat("/20")
    .concat(dd3)
    .concat("/")
    .concat(dd2)
    .concat("/summary");
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  //   const temp = data.SubjectCodes[0];
  //   console.log(data[temp]);
  return data;
}


