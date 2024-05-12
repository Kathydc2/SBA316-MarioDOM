I created a Mario Matching card game.

In the HTML I used two div's. A Main Container and inside another div called "inside container. Inside that div i added the form. 
The form had a label,two inputs and a button. I added HTML validation required for both inputs and a maxLength character of 10 to the name input. 
I styled the form button and label in CSS. I added an image as that i adjusted in CSS. 

The rest of my work was done in Javascript dynamically. This project was alot of fun to do. It helped me study as I used my slides for reference when needed. 

To start I added two window Alerts that welcomes the user and lets the user know to fill out the form to earn a mushroom
To the form itself I added a preventfedault to prevent form from submission. I also used the remove method so it disappears once its submitted.

I used the cloneNode to clone the label on HTML and modify it. I created multiple elements such as the Nav,div and button. I style most of everything I created on Js directly. The Mario on the navbar running I added a button that it dynamically change it to another mario with Yoshi
I created a table ti rows and columns that I used to make the cards. I created an array of images for each card I wanted and a defauly image . I set a timout to flip the card back around if the two cards didnt match. That took me the most time. I tried multiple different ways of doing this
but I finally got it to work. 

I created the score board to keep score of the game everytime the user matched two cards. This was also created dynamically in the DOM. Finally I limited the attempts to 10. After the 10th click I set up and alert saying "game Over" and used window.location.reload() 
to refresh the entire page again. 

