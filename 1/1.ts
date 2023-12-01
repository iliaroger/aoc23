/*
--- Day 1: Trebuchet?! ---
Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?

*/

import * as fs from "fs";

const getTextData = () => {
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (!err) {
      const parsedData = data.split(/\r?\n/);
      let sum = 0;
      for (let item of parsedData) {
        let itemIndex: Array<Array<string | number>> = [];
        item.split("").map((elem, index) => {
          let charCode = elem.charCodeAt(0);
          if (charCode >= 48 && charCode <= 57) {
            itemIndex.push([parseInt(elem), index]);
          }
        });
        [
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
        ].forEach((elem) => {
          let itemOccurrence = item.indexOf(elem);
          while (itemOccurrence !== -1) {
            itemIndex.push([elem, item.slice(0, itemOccurrence).length]);
            itemOccurrence = item.indexOf(elem, itemOccurrence + 1);
          }
        });
        console.log(itemIndex);
        let sortedElement = itemIndex
          .sort((a, b) => (b[1] as number) - (a[1] as number))
          .reverse();
        let firstElement = sortedElement[0];
        let secondElement = sortedElement[sortedElement.length - 1];
        let parsedElements: any = [firstElement, secondElement].map(
          (element) => {
            if (typeof element[0] !== "number") {
              switch (element[0]) {
                case "one": {
                  return [1, element[1]];
                }
                case "two": {
                  return [2, element[1]];
                }
                case "three": {
                  return [3, element[1]];
                }
                case "four": {
                  return [4, element[1]];
                }
                case "five": {
                  return [5, element[1]];
                }
                case "six": {
                  return [6, element[1]];
                }
                case "seven": {
                  return [7, element[1]];
                }
                case "eight": {
                  return [8, element[1]];
                }
                case "nine": {
                  return [9, element[1]];
                }
              }
            } else return element;
          }
        );
        let stringElement =
          parsedElements[0][0].toString() + parsedElements[1][0].toString();
        sum += parseInt(stringElement);
      }
      console.log(sum);
    } else {
      throw new Error("could not read file");
    }
  });
};

console.log(getTextData());
