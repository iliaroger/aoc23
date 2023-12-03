import * as fs from "fs";

const getData = () => {
  try {
    fs.readFile("2/data.txt", "utf-8", (err, data) => {
      if (!err) {
        const parsedData = data.split("\n");
        let validIds = 0;
        for (let row of parsedData) {
          let gameRegex = new RegExp(/(?<=Game )\d+(?=:)/);
          let currentGame = row.match(gameRegex)?.[0] as string;

          let allReds = row
            .match(/ \d+ red/g)
            ?.map((element) => element.split("red")[0].trim());
          let allBlues = row
            .match(/ \d+ blue/g)
            ?.map((element) => element.split("blue")[0].trim());
          let allGreens = row
            .match(/ \d+ green/g)
            ?.map((element) => element.split("green")[0].trim());
          let checkAllReds = allReds?.every(
            (element) => parseInt(element) <= 12
          );
          let checkAllBlues = allBlues?.every(
            (element) => parseInt(element) <= 14
          );
          let checkAllGreens = allGreens?.every(
            (element) => parseInt(element) <= 13
          );
          if (checkAllReds && checkAllBlues && checkAllGreens)
            validIds += parseInt(currentGame);
        }
        console.log(validIds);
      }
    });
  } catch (err) {}
};

const getData2 = () => {
  try {
    fs.readFile("2/data.txt", "utf-8", (err, data) => {
      if (!err) {
        let parsedData = data.split("\n");
        let validPairRegex = new RegExp(
          /\s\d+\s(?:red|blue|green)(?:,\s\d+\s(?:red|blue|green))*(?:;)?/g
        );
        let allPowers = 0;
        for (let item of parsedData) {
          let foundMatches = item.match(validPairRegex);
          console.log(foundMatches);
          if (!foundMatches) break;
          let allBlues: number[] = [];
          let allGreens: number[] = [];
          let allReds: number[] = [];
          foundMatches?.forEach((element) => {
            let blueElement = element.match(/\d+ blue/);
            allBlues.push(
              parseInt(blueElement?.[0].split("blue")[0].trim() as string)
            );
            let greenElement = element.match(/\d+ green/);
            allGreens.push(
              parseInt(greenElement?.[0].split("green")[0].trim() as string)
            );
            let redElement = element.match(/\d+ red/);
            allReds.push(
              parseInt(redElement?.[0].split("red")[0].trim() as string)
            );
          });
          allPowers +=
            Math.max(...allBlues.filter(Boolean)) *
            Math.max(...allGreens.filter(Boolean)) *
            Math.max(...allReds.filter(Boolean));
        }
        console.log(allPowers);
      }
    });
  } catch (err) {
    throw new Error(err);
  }
};

getData2();
