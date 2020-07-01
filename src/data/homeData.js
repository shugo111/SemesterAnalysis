export async function GetData(url) {
  
  const response = await fetch(url);
  const data = await response.text();
  const rows = data.split("\n").slice(1);
  let counts40 = [0, 0, 0, 0, 0, 0, 0, 0],
    counts50 = [0, 0, 0, 0, 0, 0, 0, 0],
    counts60 = [0, 0, 0, 0, 0, 0, 0, 0],
    countpass = [0, 0, 0, 0, 0, 0, 0, 0],
    countfail = [0, 0, 0, 0, 0, 0, 0, 0],
    countabsent = [0, 0, 0, 0, 0, 0, 0, 0],
    countappeared = [0, 0, 0, 0, 0, 0, 0, 0],
    subjects = [
      "Management and Entrepreneurship for IT Industry",
      "Computer Network",
      "Database Management System",
      "Automata theory and Computability",
      "Advanced JAVA and J2EE",
      "Dot Net framework for application development",
      "DBMS LAB",
      "CN Lab",
    ],
    total = 0,
    subcode = [
      "17CS51",
      "17CS52",
      "17CS53",
      "17CS54",
      "17CS55",
      "17CS56",
      "17CSL57",
      "17CSL58",
    ],
    facultyname = [
      "Dr. Malmurugan, Prof. M. S Kokila,  Prof. Santhosh",
      "Mrs. Shanti M.B, Mr. Shivraj, Dr. Jacob Augustine",
      "Mrs. Manjima , Mrs. Anjali Gupta",
      "Mrs. Sagarika Behera, Mrs. Savitha S",
      "Mrs. PreetiSheebha H, Mrs. Shashikala K.S",
      "Mrs. Vivia J,  Mrs. Priya John",
      "Mrs. Sagarika B, Mrs. Priya John, Mrs. Manjima , Mrs. Anjali Gupta",
      "Mr. Shivraj, Mrs. Shanthi,  Mr. Kiran Babu, Dr. Shyam Joy",
    ],
    lables40,
    lables50,
    lables60,
    faillables;
  rows.forEach((elt) => {
    const row = elt.split(",");
    let full = {
      allsub: [
        row[6],
        row[10],
        row[14],
        row[18],
        row[22],
        row[26],
        row[30],
        row[34],
      ],
      passsub: [
        row[7],
        row[11],
        row[15],
        row[19],
        row[23],
        row[27],
        row[31],
        row[35],
      ],
    };
    total = total + 1;
    for (let i = 0; i < 8; i++) {
      if (full.allsub[i] >= 40 && full.allsub[i] < 60) {
        counts40[i] = counts40[i] + 1;
      } else if (full.allsub[i] >= 60 && full.allsub[i] < 70) {
        counts50[i] = counts50[i] + 1;
      } else if (full.allsub[i] >= 70) {
        counts60[i] = counts60[i] + 1;
      }
    }
    lables40 = counts40.slice();
    lables50 = counts50.slice();
    lables60 = counts60.slice();
    for (let i = 0; i < 8; i++) {
      if (full.passsub[i] === "A") {
        countabsent[i] = countabsent[i] + 1;
      } else {
        countappeared[i] = countappeared[i] + 1;
        if (full.passsub[i] === "P") {
          countpass[i] = countpass[i] + 1;
        } else {
          countfail[i] = countfail[i] + 1;
        }
      }
    }
    faillables = countfail.slice();
  });
  var finalData = {
    total,
    countappeared,
    countfail,
    counts40,
    counts50,
    counts60,
    countpass,
    faillables,
    lables40,
    lables50,
    lables60,
  };
  return finalData;
}
