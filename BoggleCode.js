function initializeDice() {
 var i;
 var aside;
 var bloc=new Array(16);                           
 var range;
 var dice1="PEHNSI";
 var dice2="SUTELP";
 var dice3="LYBTIA";
 var dice4="CAPEMD";
 var dice5="LUKEDY";
 var dice6="WESODN";
 var dice7="KOTUDN";
 var dice8="BOJAMQ";
 var dice9="NVDZAE";
 var dice10="IYEEHF";
 var dice11="FXRBOI";
 var dice14="EGINVT";
 var dice15="RIGULW";
 var dice16="MORASH";
 var dice12="TACIAO";
 var dice13="SACERL";
 var diceall=[dice1, dice2, dice3,dice4,dice5,dice6,dice7,dice8,dice9,dice10,dice11,dice12,dice13,dice14,dice15,dice16]; 
//erase word list from previous game
  var spreadsheet=SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getRange('F:F').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  
 //randomly choose which side of each dice will appear 
for (i = 0; i < 16; i++) { 

  aside=Math.floor(Math.random()*6);

 //   range = spreadsheet.getRange("C"+(i+1));

  bloc[i]=diceall[i].charAt(Math.floor(Math.random()*6));
  if (bloc[i]=="Q") {bloc[i]="Qu"}
//  range.setValue(bloc[i]);
}

  // now shuffle the loc array to represent shuffling the dice
  var currentIndex=16;
var tempValue;
var randomIndex;
while (0 != currentIndex) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
// And swap it with the current element.
    tempValue = bloc[currentIndex];
    bloc[currentIndex] = bloc[randomIndex];
    bloc[randomIndex] = tempValue;
  }
// now display the board on the screen
  var j;
  var cellloc;
  for (i = 0; i < 4; i++) {
    for (j=0; j < 4; j++) {
      if (j==0) {(cellloc="A"+(i+1)) }
      if (j==1) {(cellloc="B"+(i+1)) }
      if (j==2) {(cellloc="C"+(i+1)) }
      if (j==3) {(cellloc="D"+(i+1)) }
  range = spreadsheet.getRange(cellloc);
  range.setValue(bloc[i*4+j]);}
//      range.setValue(cellloc+bloc[i*4+j]);}
  }
  
  range = spreadsheet.getRange("D6");
  range.setBackground("");
  range.setValue("");
 }

  
//  var ss = SpreadsheetApp.getActiveSpreadsheet();
//  var sheet = ss.getSheets()[0];


function boggleTimer() {
//    var spreadsheet = SpreadsheetApp.getActive();
// spreadsheet.getRange('D6').activate();
//  spreadsheet.getCurrentCell().setRichTextValue(SpreadsheetApp.newRichTextValue()
//  .setText('Time\'s Up')
//  .setTextStyle(0, 9, SpreadsheetApp.newTextStyle()
//  .setFontSize(18)
//  .setBold(true))
//  .build());
var maxtime=3; //maximum minutes  must be >=1 in 1/2 minute intervals
  var currentTime;
var range = SpreadsheetApp.getActiveSpreadsheet().getRange("D6");
  range.setBackground("");
  range.setValue("Time left: "+maxtime+" minutes");
  SpreadsheetApp.flush();
  //first count down minutes
  currentTime=maxtime;
  while (currentTime>1) {
    Utilities.sleep(60000);  // 1 min delay 
    currentTime=currentTime-1;
    range.setValue("Time left: "+currentTime+" minutes");
    SpreadsheetApp.flush();
  }
//now either 1 minute or 30 seconds are left
//only set delay for 30 seconds, so we can count down last 30 seconds
  if (currentTime==1) {
    range.setValue("Time left: 1 minute");
    SpreadsheetApp.flush();
    Utilities.sleep(30000);
  }
//last 30 seconds
  for (i=0; i<3; i++) {    
    range.setValue("Time left: "+parseInt((3-i)*10)+" sec");
    SpreadsheetApp.flush();
    Utilities.sleep(10000);  // 10 sec delay
}  
   range.setBackground("red");
    range.setValue('Time\'s Up')
  .setFontWeight("bold")
  .setFontSize(16);
SpreadsheetApp.flush();
}
 
function checkWord() {
    var range = SpreadsheetApp.getActiveSpreadsheet().getRange("B8");
    var word = range.getValues();
    var dictionaryaddress= "https://www.merriam-webster.com/dictionary/";
    var linkToWord=dictionaryaddress+word;
   showAnchor(word,linkToWord);
}

function showAnchor(name,url) {
  var html = '<html><body><a href="'+url+'" target="blank" onclick="google.script.host.close()">'+name+'</a></body></html>';
  var ui = HtmlService.createHtmlOutput(html)
  SpreadsheetApp.getUi().showModelessDialog(ui,"Is this a word?");
}

