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
  printAray()
});

function printAray(){
    for (let i = 0; i < csvData.length; i++) {
        var row = csvData[i].toString();
        splitedCsv.push(row.split(";"));
    }
    for (let i = 0; i < splitedCsv.length; i++) {
      //console.log(splitedCsv[i])
    }
    console.log(' 27 , ' + splitedCsv.length)
    console.log(" 28 , " + splitedCsv[498])
    
    dataCheck()
}

function dataCheck(){
    console.log('34 , ' + splitedCsv.length)
    for (let i = 0; i < csvData.length; i++) {
        console.log("i" + i)
        console.log(csvData[i])

        if (splitedCsv[i].length != 5) {
          console.log("WRONG  " + splitedCsv[i])
          //wrongData.push(splitedCsv[i])
          //splitedCsv.splice(i,1);
        }
    }
//    for (let i = 0; i < wrongData.length; i++) {
//      console.log("wrongData" + wrongData[i])
//
//    }
//    for (let i = 0; i < splitedCsv.length; i++) {
//      console.log(splitedCsv[i])
//    }
}