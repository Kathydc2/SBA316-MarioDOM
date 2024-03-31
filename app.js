window.alert("Welcome to Super Mario's Matching Game");
window.alert("Fill out form to earn Mushroom")
// Function to handle form submission
function formSubmission(e) {
  e.preventDefault(); // Prevents default form submission behavior
  
  const nameInput = document.getElementById('nameInput');
  const favoriteCharacterInput = document.getElementById('characterInput');
  // Name validation
  if (!nameInput.value) {
    return; 
  }

  // Favorite Character validation
  if (!favoriteCharacterInput.value) {
    return; 
  }

  document.getElementById('myForm').remove();
}

// Attach event listener to form submission
document.getElementById('myForm').addEventListener('submit', formSubmission);

function cloneAndModifyLabel() {
  const originalLabel = document.querySelector('#myForm label');
  const clonedLabel = originalLabel.cloneNode(true);
  clonedLabel.textContent = " Earn";
  clonedLabel.style.fontWeight = "bold";

  const myForm = document.getElementById("myForm");
  const firstChild = myForm.firstChild;
  myForm.insertBefore(clonedLabel, firstChild);
}

// Call the function
cloneAndModifyLabel();

//Create container to put NavBar in
const container = document.getElementsByClassName("mainContainer")[0];
container.style.backgroundImage = "url('https://www.sideshow.com/cdn-cgi/image/height=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/910005/super-mario-retro-wallpaper-mural_nintendo_gallery_61bbe2f03ba00.jpg')";
container.style.backgroundSize = "cover";
container.style.width = "90vw";
container.style.height = "95vh";
container.style.padding = "10px";
container.style.margin = "0 auto";
container.style.border = "2px solid #ccc";
container.style.borderRadius = "10px";
console.log(container)

//Create Nav with gif of Mario
let navBar = document.createElement("nav");
navBar.setAttribute("class", "nav");
navBar.style.backgroundColor = "#6895D2";
navBar.style.width = "90vw";
navBar.style.height = "8vh"
console.log(navBar);

//Create div for Marios GIF
let marioGif = document.createElement("div");
marioGif.style.position = "fixed";
marioGif.style.width = "90vw";
marioGif.style.height = "8vh";
marioGif.style.backgroundImage = "url('https://media.tenor.com/UkvleU1dQK4AAAAi/2d-mario-running.gif')";
marioGif.style.backgroundSize = "contain";
marioGif.style.backgroundRepeat = "no-repeat";
marioGif.style.animation = "marioRun 6s linear infinite";
console.log(marioGif)

//handle the change Mario button
function changeMario() {
  marioGif.style.backgroundImage = "url('https://66.media.tumblr.com/tumblr_mc247nrpWQ1rfjowdo1_500.gif')";
}

let changeMarioBtn = document.createElement("button");
changeMarioBtn.textContent = "Change Mario";
console.log(changeMarioBtn)

changeMarioBtn.addEventListener("click", changeMario);

// Append the button to the container
container.appendChild(changeMarioBtn);

// Set keyframe animation for Mario's run
let style = document.createElement("style");
style.innerHTML = `
@keyframes marioRun {
  0% { transform: translateX(0%); } 
  15% { transform: translateX(15%) ; } 
  30% { transform: translateX(30%) ; } 
  45% { transform: translateX(45%) ; }
  60% { transform: translateX(60%) ; }
  75% { transform: translateX(75%) ; }
  100% { transform: translateX(95%) ; }
}`

//Creating the inside container where the table and cards will go
let cardContainer = document.getElementById("insideContainer");
// cardContainer.style.padding = "20px";
cardContainer.style.display = "flex";
cardContainer.style.justifyContent = "center";

//Creating the table for the cards
let table = document.createElement("table");

// Create a table with rows and columns
let rows = 3;
let cols = 6;

let tdStyle = {
padding: "5px",
border: "5px solid black",
height: "18vh",
width: "100px",
backgroundColor: "#FFAF45"
};

//Create a score
let score = 0;

//Creating the scoreboard
let scoreBoard = document.createElement("div");
scoreBoard.textContent = ` Score: ${score}`;
scoreBoard.style.color = "black";
scoreBoard.style.fontWeight = "bold";
scoreBoard.style.backgroundColor = "rgb(36, 187, 36)"
scoreBoard.style.fontSize = "21px";
scoreBoard.style.padding = "10px";
table.appendChild(scoreBoard);

let attempt = 10;
let attemptsTotal = document.createElement("div");
attemptsTotal.textContent = ` Attempts: ${attempt} `;
attemptsTotal.style.color = "black";
attemptsTotal.style.fontWeight = "bold";
attemptsTotal.style.backgroundColor = "rgb(36, 187, 36)"
attemptsTotal.style.fontSize = "18px";
attemptsTotal.style.padding = "8px";
table.appendChild(attemptsTotal);


//Create the array of cards
let cards = [ 
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_flower_fire_2.png?fmt=webp&w=500", name: "fire" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_super_3.png?fmt=webp&w=500", name: "mushroom1" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_feather.png?fmt=webp&w=500", name: "feather" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_1up_3.png?fmt=webp&w=500", name: "mushroom2" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_coin.png?fmt=webp&w=500", name: "coin" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_star.png?fmt=webp&w=500", name: "star" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_flower_fire_2.png?fmt=webp&w=500", name: "fire" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_feather.png?fmt=webp&w=500", name: "feather" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_coin.png?fmt=webp&w=500", name: "coin" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_flower_fire_2.png?fmt=webp&w=500", name: "fire" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_star.png?fmt=webp&w=500", name: "star" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_feather.png?fmt=webp&w=500", name: "feather" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_coin.png?fmt=webp&w=500", name: "coin" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_star.png?fmt=webp&w=500", name: "star" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_1up_3.png?fmt=webp&w=500", name: "mushroom2" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_feather.png?fmt=webp&w=500", name: "feather" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_flower_fire_2.png?fmt=webp&w=500", name: "fire" },
{ url: "https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_super_3.png?fmt=webp&w=500", name: "mushroom1" },
];

const defaultImageUrl = "https://i.pinimg.com/564x/b9/59/86/b959866122dd7aeba21a527121506131.jpg";

let clickCount = 0;
let clickedCards = [];
let attempts = 11;
  
for (let r = 0; r < rows; r++) {
  let trow = document.createElement("tr");

  for (let c = 0; c < cols; c++) {
    let tcolumn = document.createElement("td");
    Object.assign(tcolumn.style, tdStyle);

    let cardIndex = r * cols + c;

    //The default image for the cards
    let img = document.createElement("img");
    img.src = "https://i.pinimg.com/564x/b9/59/86/b959866122dd7aeba21a527121506131.jpg";
    img.style.width = "100px"; 
    img.style.height = "auto";

    img.addEventListener("click", () => {
      if (!clickedCards.includes(cards[cardIndex])) {
      console.log("Clicked card:", cards[cardIndex].name); // Log the name of the clicked card
      console.log("Clicked cards:", clickedCards); // Log the current state of clicked cards
    
      if (img.src === defaultImageUrl) {
       img.src = cards[cardIndex].url;
        clickedCards.push(cards[cardIndex]); // Store the card object
      } else {
         img.src = defaultImageUrl;
        clickedCards.splice(clickedCards.indexOf(cards[cardIndex]), 1); // Remove the card object
      }
      clickCount++;
    
      if (clickedCards.length === 2) {
        console.log("Two cards clicked. Checking for match...");
        console.log("First clicked card:", clickedCards[0]);
        console.log("Second clicked card:", clickedCards[1]);
        if (clickedCards[0].name === clickedCards[1].name) {
          // If they match, increment the score
          score++;
          // Update the score board
          scoreBoard.textContent = `Score: ${score}`;
          clickedCards = []; // Clear the clicked cards array
        } else {
          console.log("No match");

          // If cards don't match, set them back to default after a delay
          setTimeout(() => {
            img.src = defaultImageUrl;
            // Also, set the src of the previously clicked card back to defaultImageUrl
            document.querySelectorAll('img[src="' + clickedCards[0].url + '"]').forEach(card => {
              card.src = defaultImageUrl;
            });
            clickedCards = []; // Clear the clicked cards array
          }, 1000);
        }
      }

      // Check if maximum attempts reached
      if (clickCount === attempts) { // Plus 1 because attemptsTotal is 10
        alert("GAME OVER");
        console.log("Maximum clicks reached.");
        window.location.reload(); // Reload the page
      }
    }
});
  console.log(trow)
  console.log(tcolumn)
    
  tcolumn.appendChild(img)
  trow.appendChild(tcolumn);

}
table.appendChild(trow);

};
  
//Append navBar and inside container to topContainer First and then the gif to the navBar, 
//the style (keyframe) to the head and the table to the inside container
container.insertBefore(navBar, cardContainer);
navBar.appendChild(marioGif);
document.head.appendChild(style);
cardContainer.appendChild(table);




