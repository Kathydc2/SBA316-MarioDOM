//Create container to put NavBar in
const container = document.getElementsByClassName("mainContainer")[0];
container.style.backgroundColor = "black";
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
navBar.style.backgroundColor = "green";
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
cardContainer.style.padding = "30px";
cardContainer.style.display = "flex";
cardContainer.style.justifyContent = "center";

//Creating the table for the cards
let table = document.createElement("table");

// Create a table with rows and columns
let rows = 3;
let cols = 6;

let tdStyle = {
    padding: "15px",
    border: "10px solid black",
    height: "20vh",
    width: "100px",
    backgroundColor: "orange"
  };

  //Create an array of potential cards to choose
  let cards = ["https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_flower_fire_2.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_super_2.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_feather.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_1up_3.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_coin.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_star.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_p_wing.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_super_2.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_coin.png?fmt=webp&w=500"];

  //Make the cards random
//   cards.sort(() => Math.random() - 0.5);

  //Create the array to capture the clicked cards
  let clickedCards = []

  //Create a score
  let score = 0;

  //Creating the scoreboard
  let scoreBoard = document.createElement("div");
  scoreBoard.textContent = `Score: ${score}`;
  scoreBoard.style.color = "white";
  scoreBoard.style.fontSize = "22px";
  scoreBoard.style.padding = "10px"
  table.appendChild(scoreBoard);
  
  for (let r = 0; r < rows; r++) {
    let trow = document.createElement("tr");

    for (let c = 0; c < cols; c++) {
      let tcolumn = document.createElement("td");
      Object.assign(tcolumn.style, tdStyle);

      //The default image for the cards
      let img = document.createElement("img");
      img.src = "https://i.pinimg.com/564x/b9/59/86/b959866122dd7aeba21a527121506131.jpg";
      img.style.width = "100px"; 
      img.style.height = "auto";

       let clickCount = 0;

        // Add onclick event to change the image
        img.addEventListener("click", () => {
            if (clickCount < 8) {
              clickCount++;

              if (clickCount >= 8) {
                alert("You Lose");
                clickCount = 0
                return;
                
              }
              if (!clickedCards.includes(img)) {
                // Add the clicked card to the clickedCards array
                clickedCards.push(img);
                
                // Set the image source to the corresponding card from the shuffled array
                img.src = cards.shift();

                // Check if two cards have been clicked
                if (clickedCards.length === 2) {
                    // Check if the images match
                    if (clickedCards[0].src === clickedCards[1].src) {
                        // If they match, increment the score
                        score++;
                        // Update the score board
                        scoreBoard.textContent = `Score: ${score}`;
                    }
                  
                    // Clear the clickedImages array for the next turn
                    clickedCards = [];
                }
            } else {
                      // If the same card is clicked twice
                      img.src = "https://i.pinimg.com/564x/b9/59/86/b959866122dd7aeba21a527121506131.jpg";
                    }
        
                    // Reset cards if needed after each click
                    if (cards.length === 0 && clickedCards.length === 0) {
                        cards = ["https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_flower_fire_2.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_super_2.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_feather.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_1up_3.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_coin.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_star.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_p_wing.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_mushroom_super_2.png?fmt=webp&w=500","https://images.freeimages.com/fic/images/icons/2297/super_mario/256/retro_coin.png?fmt=webp&w=500"];
                       
            
            }
            
                
    
        setTimeout(() => {
            img.src = "https://i.pinimg.com/564x/b9/59/86/b959866122dd7aeba21a527121506131.jpg"; // Change back to the original image
          
        }, 3000);

        }

               
    });
    

    console.log(trow)
    console.log(tcolumn)

    tcolumn.appendChild(img)
    trow.appendChild(tcolumn);
    }
  table.appendChild(trow);
  }

//Append navBar and inside container to topContainer First and then the gif to the navBar, 
//the style (keyframe) to the head and the table to the inside container
container.insertBefore(navBar, cardContainer);
navBar.appendChild(marioGif);
document.head.appendChild(style);
cardContainer.appendChild(table);