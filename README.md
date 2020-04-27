# Social-Distancing-Boggle
A Boggle Game Board that can be used while videoconferencing.  This program is meant to display a Boggle Game Board to each player on a computer or whatever device the player desires.  It is not intended to automate the social part of playing the game, only to enable players in different locations to play together.

Now we can play Boggle even while social distancing.

Basic Directions:

This script is meant to be a bound code to Google Sheets. First you need to create the Boggle board in Google Sheets.  Then copy the
BoggleGame.js javascript code into the spreadsheet script window.  Finally connect the buttons on the spreadsheet to the appropriate
functions in the script.  To play, share the link for the Google Sheet with all the players.  Only players on a computer logged into a 
google account can roll the dice and set the timer, but all players can see the gameboard

How to set up the Google Sheet

The Boggle board is in cells A1:D4.  I set the background of these cells to be yellow (to look like an actual Boggle Game) and then
I put borders around all 4 sides of these cells.  You can make the cells designated as the game board look however you want.
Next insert a drawing into cells A5:A6.  The drawing should consist of a text box with the words "Roll Dice". 
Then, insert a dawing into cells B5:B6 and create a text box with the words "Start Timer".  The timer will be displayed in cell D6
during the game.

In cell A8, I typed "Word to check:", and cell C8 insert a drawing with a text box with the word "check".  This button will be used to
look up the definition of the word you type into cell B8.  A window will pop up with the word you put in B8 with a link to a dictionary
definition of it.  When you click on the link, the definition will appear in a new tab.

Mext, click on Tools menu and choose "Script Editor".  In the script editor, replace the default with BoogleGame.js and save it.  You
should probably change the "Untitled" to something like Boggle Code. Then save the script. 

Finally, on the menu in the script editor, choose '"Publlsh" and "Deploy as web app".  Make sure to choose to Execute the app as you
and click OK.  Now  people that you share this game with should not get the warning that this script is not safe. Now return to the 
spreadsheet tab.

Now, we need to make the three drawings into buttons.  If you right click on the text box that says "Roll Dice", you will see three
dots appear in the upper right hand corner of the drawing.  Click on the dots to get a menu and choose "assign script". Type
 "initializeDice" in the box that appears and press "OK".  The "Start Timer" text box should be assigned the script "boggleTimer"
 and the "check" text box should be assigned the script "checkWord".  Now these three text boxes will work as buttons. 

Finally, change the name of the spreadsheet to Boggle Game Board.  I do not know if publishin (from the File menu)g the spreadsheet is useful.

How to play the game:

The first step is to share the Boggle Game Board with all the players.  Everyone using a link to the same spreadsheet is the key to playing the game successfully.  Here is an explanation of how to play on different devices:
1.  On a computer, including a Chromebook, open the link to the game in your browser.  In order to press the buttons, the person must be logged into a Google account and be given permission to edit the spreadsheet.  Without a Google accoumt, the board will still display in the browser and change automatically when the dice are rolled.
2.  On a mobile device (Android or Apple), the easiest way is to download the Google Sheet app.  I have not been able to get the buttons to work on a mobile device. 
3.  On a mobile device without the Google Sheet app, the game will still work.  However, if it is loaded into the browser, the player will have to refresh the browser window in order to see the board change.

At least one player needs to be on a computer, logged into a Google account and given permission to edit the spreadsheet to press the buttons.  Not all Google accounts will allow users to edit this type of file (for instance, my kids' accounts at school).  

Display each player's word list (optional):

Sometimes we have trouble hearing other players read his/her word list.  So, I created a Google Form to allow players to create a 
digital word list.  Players do not press the submit button when time is up, they press the submit button when it is time to share
his/her words.  Here are directions to create a form to type in a Boggle word list:
1.  Create a Form with two fields: a Name field which takes a short answer and a Word List field which accepts a long answer.
2.  Click on the menu in the upper right corner of the screen, go to the script editor.  Then replace the default code with 
shareWordList.js.  Change the name of the code and save it. 
4.  Put the URL of your Boggle Game spreadsheeet in line 5
5.  Next, follow the steps from the spreadsheet to publish this script.
6.  Finally, return to the Form editor, go into the settings (icon to the left of the Send button) and at the bottom of the General
Tab, put a check in the box labeled 'Edit aftersSubmit'

When a player presses submit, his/her word list will be displayed on the Boggle Game spreadsheet in column F.  If necessary, the editor of the Form can access all the responses and can manually modify the word list in the spreadsheet as necessary.  After a player presses submit, he/she can choose to edit the response in order to review or edit the word list.

Keyboards are available that can allow users to write words instead of typing them, such as Google Handwriting.  However, the each 
player would have to install it on their own and be able to switch between a standard keyboard and a handwriting keyboard on their own.
