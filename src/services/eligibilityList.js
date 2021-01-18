var list = {
  CS197: [
    {
      Slno: 1,
      USN: "1CR16CS086",
      Name: "MAYANK NIGAM",
    },
    {
      Slno: 2,
      USN: "1CR15CS018",
      Name: "AKHIL RAVINDRA REDDY",
    },
    {
      Slno: 3,
      USN: "1CR16CS414",
      Name: "LAVANYA R A",
    },
    {
      Slno: 4,
      USN: "1CR16CS401",
      Name: "ASHISH GURUNG",
    },
    {
      Slno: 5,
      USN: "1CR15CS181",
      Name: "VISHNU R.KUMAR",
    },
    {
      Slno: 6,
      USN: "1CR15CS045",
      Name: "CHETAN S PAWAR",
    },
    {
      Slno: 7,
      USN: "1CR16CS431",
      Name: "SUNIL KUMAR",
    },
    {
      Slno: 8,
      USN: "1CR16CS119",
      Name: "PRAVEEN KUMAR R VELICHETI",
    },
    {
      Slno: 9,
      USN: "1CR16CS409",
      Name: "GOVINDARAJU S",
    },
    {
      Slno: 10,
      USN: "1CR17CS400",
      Name: "ABHINAY YADAV",
    },
  ],
  CS195: [
    {
      Slno: 11,
      USN: "1CR17CS025",
      Name: "BHARATH P A",
    },
    {
      Slno: 12,
      USN: "1CR17CS061",
      Name: "KOKA LAKSHMI NRUTHYA",
    },
    {
      Slno: 13,
      USN: "1CR17CS104",
      Name: "RAHUL RANJAN",
    },
    {
      Slno: 14,
      USN: "1CR17CS110",
      Name: "RISHAB MOHAN",
    },
    {
      Slno: 15,
      USN: "1CR17CS129",
      Name: "SANDHYA RISHAB",
    },
    {
      Slno: 16,
      USN: "1CR17CS146",
      Name: "SHUBHANKAR BERA",
    },
    {
      Slno: 17,
      USN: "1CR17CS152",
      Name: "SOURAV KUMAR GIRI",
    },
    {
      Slno: 18,
      USN: "1CR17CS182",
      Name: "ANAND SHAH",
    },
    {
      Slno: 19,
      USN: "1CR17CS183",
      Name: "BHUNESH SHARMA",
    },
    {
      Slno: 20,
      USN: "1CR17CS184",
      Name: "MANMOHAN KUSHWAHA",
    },
    {
      Slno: 21,
      USN: "1CR17CS185",
      Name: "NAZEEL M HUSSAN",
    },
    {
      Slno: 22,
      USN: "1CR15CS076",
      Name: "KARAN SHEKAR",
    },
    {
      Slno: 23,
      USN: "1CR18CS402",
      Name: "KAVITHA C",
    },
    {
      Slno: 24,
      USN: "1CR17CS028",
      Name: "BRIJESH BABU",
    },
  ],
};
export function getdata(dept, sem, year) {
  var str = dept + year + sem;
  return list[str];
}
