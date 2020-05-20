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
