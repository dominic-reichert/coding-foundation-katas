function extractClassName(sessionTitle) {
  let result = "";

  const table = {
    Januar: "01",
    Febuar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };

  const arr = sessionTitle.split(" ");

  if (arr.length !== 4 || !arr.includes("Class")) {
    return null;
  }

  result += arr[2] + "-" + table[arr[3]];

  if (result.length !== 7) {
    return null;
  }

  return result;
}
