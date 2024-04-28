// -> Declaring variables, strings and arrays 
let C0, C1, C2, C3, C4;
let F0, F1, F2, F3, F4;
let P0, P1, P2, P3, P4;
let S0, S1, S2, S3, S4;
let selection;
let selectionHeading;
let resetButton;
let input;
let generateButton;
let palavra;
let generateHeading;
let rwh, rww;
let imagesButton;
let rArray;
let Instructions;
let InstructionsText;
let listPalavras = [];
let Cards = [];
let Flowers = [];
let Paper = [];
let Statues = [];
let Arrays = [Cards, Flowers, Paper, Statues];
let currentArray = [];

// -> Preloading images 
function preload(){
  C0 = loadImage("Images/Cards/C0.png");
  C1 = loadImage("Images/Cards/C1.png");
  C2 = loadImage("Images/Cards/C2.png");
  C3 = loadImage("Images/Cards/C3.png");
  C4 = loadImage("Images/Cards/C4.png");
  F0 = loadImage("Images/Flowers/F0.png");
  F1 = loadImage("Images/Flowers/F1.png");
  F2 = loadImage("Images/Flowers/F2.png");
  F3 = loadImage("Images/Flowers/F3.png");
  F4 = loadImage("Images/Flowers/F4.png");
  P0 = loadImage("Images/Paper/P0.png");
  P1 = loadImage("Images/Paper/P1.png");
  P2 = loadImage("Images/Paper/P2.png");
  P3 = loadImage("Images/Paper/P3.png");
  P4 = loadImage("Images/Paper/P4.png");
  S0 = loadImage("Images/Statues/S0.png");
  S1 = loadImage("Images/Statues/S1.png");
  S2 = loadImage("Images/Statues/S2.png");
  S3 = loadImage("Images/Statues/S3.png");
  S4 = loadImage("Images/Statues/S4.png");
  InstructionsText = loadStrings("Texts/Instructions.txt")
}

function setup() {
 // -> Putting images into arrays 
  Cards.push(C0);
  Cards.push(C1);
  Cards.push(C2);
  Cards.push(C3);
  Cards.push(C4);
  Flowers.push(F0);
  Flowers.push(F1);
  Flowers.push(F2);
  Flowers.push(F3);
  Flowers.push(F4);
  Paper.push(P0);
  Paper.push(P1);
  Paper.push(P2);
  Paper.push(P3);
  Paper.push(P4);
  Statues.push(S0);
  Statues.push(S1);
  Statues.push(S2);
  Statues.push(S3);
  Statues.push(S4);
  
  // -> Canvas size set to user's window size
  createCanvas(windowWidth, windowHeight); 
 
  // -> Background menu pt I
  // -> initiaising selection variable
  selection = createSelect();
  // -> Menu position, style & size
  selection.position(40, 70);
  selection.size(195);
  selection.style('background','linear-gradient(to right, #EFE4CA, #C4B898)');
  selection.style('color', '#8C6A1B');
  selection.style('border', '1px solid #8C6A1B');
  // -> Menu options 
  selection.option('Backgroud Color - Sand')
  selection.option('Backgroud Color - Bloom')
  selection.option('Backgroud Color - Dust')
  selection.option('Backgroud Color - Dawn')
  selection.option('Backgroud Color - Twilight')
  selection.option('Backgroud Color - Primavera')

  // -> Reset button pt I
  // - initiating variable 
  resetButton = createButton('Reset')
  // - position, style & mousepress 
  resetButton.position(308, 88);
  resetButton.style('background','linear-gradient(to right, #EFE4CA, #C4B898)');
  resetButton.style('color', '#8C6A1B');
  resetButton.style('border', '1px solid #8C6A1B');
  resetButton.mousePressed(ChangeAction);

  // -> Input bar & Generate button pt I
  // -> Input bar, bar position & style
  input = createInput();
  input.position(120, 160);
  input.style('background','linear-gradient(to right, #EFE4CA, #C4B898)');
  input.style('color', '#8C6A1B');
  input.style('border', '1px solid #8C6A1B');
  // -> Input button, position & style
  generateButton = createButton('Generate');
  generateButton.position(input.x + input.width, input.y);
  generateButton.style('background','linear-gradient(to right, #EFE4CA, #C4B898)');
  generateButton.style('color', '#8C6A1B');
  generateButton.style('border', '1px solid #8C6A1B');
  // -> input button mousepress 
  generateButton.mousePressed(generatePalavras);

  // -> Change immages button pt I
  // -> Images Button
  imagesButton = createButton('Change Group of Images');
  imagesButton.position(40, 230);
  imagesButton.size (165, 18);
  imagesButton.style('background','linear-gradient(to right, #EFE4CA, #C4B898)');
  imagesButton.style('color', '#8C6A1B');
  imagesButton.style('border', '1px solid #8C6A1B');
  imagesButton.mousePressed(() => {
    rArray = random(Arrays);
    currentArray.push(rArray);
  });

  //- > Fixing frame rate so that images/text is only drawn once
  noLoop();
}

// -> Resizing canvas with window update
function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
}

// Input pt II
// -> setting up mousePressed function for input button
function generatePalavras(){
  palavra = input.value();
  input.value(''); // -> Resetting value to empty bar
  listPalavras.push(palavra);
  // - Runs draw function once when button is pushed 
  redraw();
}

// -> Reset button pt II
function ChangeAction(){
  // -> Reset words
  listPalavras = [];
  // -> Runs draw function once when button is pushed 
  // - Refresh background, clear images
  redraw();
}

// -> Change Images pt II
function mousePressed(){
  // -> Check if the mouse is pressed inside the generateButton
  if (mouseX > generateButton.position().x && 
    mouseX < generateButton.position().x + generateButton.width && 
    mouseY > generateButton.position().y && 
    mouseY < generateButton.position().y + generateButton.height) {
  // - If so, return without producing an image
  return;
  }

  // -> Check if the mouse is pressed inside the imagesButton
  if (mouseX > imagesButton.position().x && 
    mouseX < imagesButton.position().x + imagesButton.width && 
    mouseY > imagesButton.position().y && 
    mouseY < imagesButton.position().y + imagesButton.height) {
  // - If so, return without producing an image
  return;
  }

  // -> Check if the mouse is pressed inside the resetButton
  if (mouseX > resetButton.position().x && 
    mouseX < resetButton.position().x + resetButton.width && 
    mouseY > resetButton.position().y && 
    mouseY < resetButton.position().y + resetButton.height) {
  // - If so, return without producing an image
  return;
  }

  // -> Check if the mouse is pressed inside the input bar
  if (mouseX > input.position().x && 
    mouseX < input.position().x + input.width && 
    mouseY > input.position().y && 
    mouseY < input.position().y + input.height) {
  // - If so, return without producing an image
  return;
  }
  // -> Internal variable to randomise from ...
  // ... current random array 
  let r = random(rArray);
  // -> Produce image
  image(r, mouseX, mouseY);
}

function draw() {
  // -> Backgroung menu pt II
  // -> Local variable for seleced option
  let sed = selection.selected();
  // -> If loop for selection
  if (sed === 'Backgroud Color - Sand'){
    background(239, 229, 195)
  } else if (sed === 'Backgroud Color - Bloom'){
    background(251, 226, 234)
  } else if (sed === 'Backgroud Color - Dust'){
    background(238, 229, 215)
  } else if (sed === 'Backgroud Color - Dawn'){
    background(242, 221, 175)
  } else if (sed === 'Backgroud Color - Twilight'){
    background(200, 208, 243)
  } else if (sed === 'Backgroud Color - Primavera'){
    background(255, 251, 203)
  }
  // -> Generate button pt II
  for (x = 0; x < listPalavras.length; x++) {   
    rww = random(windowWidth);
    rwh = random(windowHeight);
    //->  Check if the word position is inside the text region
    while (rww < 410 && rwh < 420) {
      // -> If so, generate new random positions until it's ...
      //... outside that region
      rww = random(windowWidth);
      rwh = random(windowHeight);
    }

    // ->Word style, font, etc
    textSize(48);
    fill("#453B29")
    textFont('Blackadder ITC');
    textStyle(ITALIC)
    text(listPalavras[x], rww, rwh);
    frameRate(1);
  }
  // -> Instructions 
  // -> Instructions text on draw function (so it always shows up)
  // + Instruction heading, position, size, font  & style
  Instructions = createElement('h2', 'Instructions');
  Instructions.position(20, 0);
  Instructions.style('color', '#204469');
  Instructions.style('font-size', '18px');
  Instructions.style('font-family', 'Bradley Hand ITC');
  // - Instructions text 
  textSize(14); 
  fill("#102E4C"); // - Set text color
  textStyle(BOLD) // - Bold text
  textFont('Bradley Hand ITC'); // Set font family
  text(InstructionsText, 20, 40, 400); // Draw text on the canvas
}