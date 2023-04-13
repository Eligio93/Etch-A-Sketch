# Etch-A-Sketch

In this project the user choose a grid dimension and passing the mouse over the divs created, they change color. Building everything was not easy. 

The main issue was that i couldn't figure out in which part of script.js,  I should have added the event listener mouse over ale to change the color of my divs.

Another Problem was resetting the grid and give again the last dimension chosen by the user. I've realized that there were same action performed at various stages of the file so i decided to create a function resetGrid containing all those actions. Doing this I've reduced the code written so the document in totl looks cleaner.

In future i would like to improve the part of choosing color and choosing grid so idon't have to click a button to choose them but maybe adding a slider which automatically change the dimension of my grid.