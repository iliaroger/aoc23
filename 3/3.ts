import * as fs from "fs";

const getData = () => {
  fs.readFile("3/data.txt", "utf-8", (err, data) => {
    if (!err) {
      let parsedData = data.split("\n");
      let rowsLength = parsedData[0].split("");
      let columnsLength = parsedData;

      for (let x in rowsLength) {
        for (let y in columnsLength) {
          if (/[^\w.]/.test(parsedData[y][x])) {
          }
        }
      }
    }
  });
};

getData();
