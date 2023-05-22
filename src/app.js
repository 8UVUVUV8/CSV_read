const fs = require("fs");
const { parse } = require("csv-parse");
const csvData = [];
const splitedCsv = [];
const wrongData = [];

fs.createReadStream("./LottoSzamok.csv")
.pipe( parse({ delimiter: ",", from_line: 1 }))
.on("data", function (row) {
  csvData.push(row)
})
.on("error", function (error) {
  console.log(error.message)
})
.on("end", function () {
  console.log("finisheddsadas"),
  printAray()
});

function printAray(){
    for (let i = 0; i < csvData.length; i++) {
        var row = csvData[i].toString();
        splitedCsv.push(row.split(";"));
    }
    console.log(splitedCsv[0])
    dataCheck()
}

function dataCheck(){
    console.log(splitedCsv[0].length)
    for (let i = 0; i < csvData.length; i++) {
        console.log("i" + i)

        if (splitedCsv[i]?.length == 5) {
 
        }else{
            wrongData.push(splitedCsv[i])
            splitedCsv.splice(i,1);
        }
    }
    console.log(splitedCsv.length)
    for (let i = 0; i < wrongData.length; i++) {
        console.log(wrongData[i])
    }
}