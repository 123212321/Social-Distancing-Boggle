function onSubmit(e)  {
  
  var ss = SpreadsheetApp.openById("17XzrbgarItm0WFD3JRJ4FnNJa57xv65aBpvUsbg-QOs");
  SpreadsheetApp.setActiveSpreadsheet(ss);
  var firstSheet = ss.getSheets()[0];
  var form=FormApp.getActiveForm();
  var lastResponse=form.getResponses().slice(-1)[0];
   var response = getUserResponse(lastResponse);

// create array from list of words
//words are separated by line feed, unicode character 10
  var separator=String.fromCharCode(10);
 
  var words=response.userWords;
  wordArray=words.split(separator);
  Logger.log(words);
  range=firstSheet.getRange("F1");  //put name at top of list
  range.setValue(response.userName);
//put list in Boggle spreadsheet
  var i;
  var location;
  for (i=2; i<=wordArray.length+1; i++) {
    location="F"+i;
    range=firstSheet.getRange(location);
    Logger.log(location);
    range.setValue(wordArray[i-1]);
  }  
}

  function getUserResponse(response) {
  return {
        userName: response.getItemResponses()[0].getResponse(),
        userWords: response.getItemResponses()[1].getResponse(),    
  }
}
