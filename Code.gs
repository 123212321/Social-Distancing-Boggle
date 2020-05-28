function doGet() {
//  return HtmlService.createHtmlOutputFromFile('index')
 //     .setSandboxMode(HtmlService.SandboxMode.IFRAME);

  var html = HtmlService.createTemplateFromFile("index").evaluate();
  html.setTitle("Social Distancing Boggle");
  return html;
}

function getData(){
  var sheet = SpreadsheetApp.openById("**Your google sheets id***").getSheets()[0];
  range=sheet.getRange("A1:D4");
  return range.getValues();
}

function saveDice(diceSide) {
  var sheet = SpreadsheetApp.openById("**Your google sheets id***").getSheets()[0];

    var i,j;
  var cellloc;
  for (i = 0; i < 4; i++) {
    for (j=0; j < 4; j++) {
      if (j==0) {(cellloc="A"+(i+1)) }
      if (j==1) {(cellloc="B"+(i+1)) }
      if (j==2) {(cellloc="C"+(i+1)) }
      if (j==3) {(cellloc="D"+(i+1)) }
  range = sheet.getRange(cellloc);
  range.setValue(diceSide[i*4+j]);}
  }
    range = sheet.getRange("D6");
  range.setBackground("");
  range.setValue("Ready!");
}

function addToSheet(playerName,wordList) {
  var sheet = SpreadsheetApp.openById("17XzrbgarItm0WFD3JRJ4FnNJa57xv65aBpvUsbg-QOs").getSheets()[0];
  sheet.insertColumns(6,1);  //shift previously loaded word lists to the right and add new one
  var range=sheet.getRange("F1");
  range.setValue(playerName);// put plauer's name at the top of the list
//words are separated by line feed, unicode character 10
  var separator=String.fromCharCode(10);

  wordArray=wordList.split(separator);
  wordArray.sort();

//put list in Boggle spreadsheet
  var i;
  var cell;
  for (i=2; i<=wordArray.length+1; i++) {
    cell="F"+i;
    range=sheet.getRange(cell);
    Logger.log(cell);
    range.setValue(wordArray[i-2]);
  } 
//  cells="F2:F"+(wordArray.length+1).toString();
//  range=sheet.getRange(cells);
//  range.sort(1);

}

function addToSheet(playerName,wordList) {
  var sheet = SpreadsheetApp.openById("17XzrbgarItm0WFD3JRJ4FnNJa57xv65aBpvUsbg-QOs").getSheets()[0];
  sheet.insertColumns(6,1);  //shift previously loaded word lists to the right and add new one
  var range=sheet.getRange("F1");
  range.setValue(playerName);// put plauer's name at the top of the list
//words are separated by line feed, unicode character 10
  var separator=String.fromCharCode(10);

  wordArray=wordList.split(separator);
  wordArray.sort();  //sort in Javascript

//put list in Boggle spreadsheet
  var i;
  var cell;
  for (i=2; i<=wordArray.length+1; i++) {
    cell="F"+i;
    range=sheet.getRange(cell);
    Logger.log(cell);
    range.setValue(wordArray[i-2]);
  } 
//  cells="F2:F"+(wordArray.length+1).toString();
//  range=sheet.getRange(cells);
//  range.sort(1);
}

