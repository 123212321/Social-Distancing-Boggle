# Social-Distancing-Boggle
A Boggle Game Board that can be used while videoconferencing.  This program is meant to display a Boggle Game Board to each player on a computer or whatever device the player desires.  It is not intended to automate the social part of playing the game, only to enable players in different locations to play together.

Basic Directions:

This is meant to be a bound code to Google Sheets. First you need to create the Boggle board in Google Sheets.  Then copy the Boggle Game javascript code into the spreadsheet script window.  Finally connect the buttons on the spreadsheet to the appropriate functions in the script.  To play, share the link for the Google Sheet with all the players.  Only players on a computer logged into a google account can roll the dice and set the timer, but all players can see the gameboard

How to set up the Google Sheet

The Boggle board is in cells A1:D4.  I set the background of these cells to be yellow (to look like an actual Boggle Game) and then I put borders around all 4 sides of these cells.  You can make the cells designated as the game board look however you want.
Next insert a drawing into cells A5:A6.  The drawing should consist of a text box with the words "Roll Dice". 
Then, insert a dawing into cells B5:B6 and create a text box with the words "Start Timer".  The timer is shown in cell D6.

In cell A8, I typed "Word to check:", and cell C8 insert a drawing with a text box with the word "check".  This button will be used to look up the definition of the word you type into cell B8.  A window will pop up with the word you put in B8 with a link to a dictionary definition of it.  When you click on the word, the definition will appear in a new tab.

Mext, click on Tools menu and choose "Script Editor".  In the script editor, replace the default with Boogle Code.js and save it.  You should probably change the "Untitled" to something like Boggle Code. Then save the script and return to the spreadsheet tab.

Now, we need to make the three drawings into buttons.  If you right click on the text box that says "Roll Dice", you will see three dots appear in the upper right hand corner of the drawing.  Click on the dots to get a menu and choose "assign script". Type "initializeDice" in the box that appears and press "OK".  The "Start Timer" text box should be assigned the script "boggleTimer" and the "check" text box should be assigned the script "checkWord".  Now these three text boxes will work as buttons. 

Finally, change the name of the spreadsheet to Boggle Game Board.

How to play the game:

The first step is to share the Boggle Game Board with all the players.  Everyone using a link to the same spreadsheet is the key to playing the game successfully.  Here is an explanation of how to play on different devices:
1.  On a computer, including a Chromebook, open the link to the game in your browser.  In order to press the buttons, the person must be logged into a Google account and be given permission to edit the spreadsheet.  Without a Google accoumt, the board will still display in the browser and change automatically when the dice are rolled.
2.  On a mobile device (Android or Apple), the easiest way is to download the Google Sheet app.  I have not been able to get the buttons to work on a mobile device. 
3.  On a mobile device without the Google Sheet app, the game will still work.  However, if it is loaded into the browser, the player will have to refresh the browser window in order to see the board change.

At least one player needs to be on a computer, logged into a Google account and given permission to edit the spreadsheet to press the buttons.  Not all Google accounts will allow users to edit this type of file (for instance, my kids' accounts at school).

Now we can play traditional Boggle together while keeping a safe social distance during
COVID-19 Pandemic.

