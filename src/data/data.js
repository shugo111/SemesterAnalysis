export async function FetchData(url) {
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  //   const temp = data.SubjectCodes[0];
  //   console.log(data[temp]);
  return data;
}
