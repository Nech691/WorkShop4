# WorkShop4
WS4 Project - Scrapbook
***

**Link = https://nech691.github.io/WorkShop_4/**

***

# **Tasks**

- [x] Creating an interactive p5.js sketch with at least three different kinds of user input events 
- [x] Experiment with ways to record and redeploy inputs from the user

***

### **Project**

>  **Goal**
>> A code that has a button that, when you click, randomizes the array you have; then, when you click the mouse on the canvas, it uses that array to create a random image where the mouse is. The third user input will be a drop menu to change the background color, and the fourth will be an input bar to generate words in random positions moving on the canvas.
	
- [ ] Creating an interactive p5.js sketch with at least three different kinds of user input events 
   - **User input event 1** 
      - [x] User clicks a button to randomize set of images used 
   - **User input event 2**
      - [x] User clicks mouse to generate new random image 
   - **User input event 3**
      - [x] User selects background option from drop down menu 
   - **User input event 4** 
      - [x] input bar that generates inputted words on canvas
- [x] Experiment with ways to record and redeploy inputs from the user
   - **Recorded user's input** 
      - Background option on drop down menu 
      - Words added to the input bar
   - **Deployed user's input** 
      - Background changing 
      - Words displayed on canvas 

***

# **Workshop Notes**

> **Using randomness with user input & Resizing sketches to fit browser window**

***

# **Notes**

**Using randomness with user input**
	
1. One way that we can add randomness using user input is by adding a *"mousePressed"* to our code, and moving the random image functions from inside the *"draw function"* to inside the *"mousePressed"* function. 
2. You can build on this example using things like HTML elements (such as buttons, sliders, and other things)
   - For example, to **create a button** we must add BLA to the set up function 
      - i.e., *"let button = createButton('label to be displayed');"* 
   - By adding *"button.possition(x, y)"* we can change the position of this button on the canvas 
   - By adding *"button.mousePressed"* we can determine what happens when we click the button by using a nested function instead of the outside (previous) *"mousePressed"* function
      - i.e., *"button.mousePressed(() => {what happens})"*
   - You can add multiple buttons to your code 
3. Another thing you can add to your code are **check boxes**
   - You can do this by creating a variable for the check box and then initializing this variable in the *"setup"* function 
      - i.e., *"checkbox = createCheckbox();"*
   - Similar to the button, we can also change the position of this check box
   - Then, in the *"draw"* function, we can set what happens when the checkbox is marked 
      - i.e., *"if (checkbox.checked()){if checked what happens}"*
   - With the *"if statement"* we can add what happens if the conditions specified are not met.
      - i.e., *"...} else{what happens if not checked}"*
4. You can also add **sliders** to you code 
   - You can do this by creating a variable for the slider and initializing this variable in the *"setup"* function 
      - i.e., *"slider = createSlider(min value, max value);"*
   - You can also change the position and size of the slider in the *"setup"* function 
   - Then, in the *"draw"* function, you can create a local variable to store the values of the slider - This is a constantly changing value, so it's in the *"function draw"* part
      - i.e., *"let val = slider.value()"*
   - Also in the *"draw"* function, you can add what the slider influences 
      - E.g., *"background(val)"*
5. We can also create a **drop down menu** in a similar manner 
   - You can do this by creating a variable for the selections on the menu (*"let selection;"*) and initializing this variable in the *"setup"* function 
      - i.e., *"selection = createSelect();"*
   - You can also change the position and size of the slider in the *"setup"* function 
   - Also in the *"setup"* function, you can add and change the options in the menu 
      - E.g.., *"selection.option('Option 1');"* and so on for the next options
   - Then, in the *"draw"* function, you can create a local variable to store the option selected 
      - i.e., *"let x = selection.selected();"*
   - Also in the *"draw"* function, you can add what the options do with *"if when"* loops 
      - E.g., *"if (x === 'Option  1'){image(loadImge('Emojis/E1.png'))} else if (x === 'Option 2') {image(loadImge('Emojis/E2.png'))}"*
      - The "===" means *"exactly equal to"*
   - Instead of drawing emojis, you could attach the options to *"setInterval"* functions
6. Finally, you can also have users **create inputs** that affect the code using the *"createInput"* function 
   - You can do this by creating an input variable (*"theInput"*) and initiating this variable in the *"setup"* function 
      - You can also change the position and size of the input bar here 
   - Then, in the *"function draw"* part, you can create a local variable to store the words used for input
      - i.e., *"let words = theInput.value();"*
   - You can then create a text using those words at the (for example) x 20 and y 50 position
      - E.g. *"text(words, 20, 50)"*
   - You can use input bars in much more complex ways
      - For example, you can add a button next to the input bar 
         - *"button.position(input.x + input.width, input.y)"*
      - You can also include a message above your input box using the *"create element('h2', 'Questions?')"* function and positioning above the box with the y position
   - You can also use the input box to record and redeploy users' input by using a function to make a button to push the input  into an array, and reset the input bar.
      - i.e., 
         - *"function askSomething(){
         - question = input.value(); 
         - input.value(' ');
         - listQuestions.push(questions);}"*
      - Then, you can redeploy this input using a *"for loop"* to display the text inputs one line apart inside the *"draw function"*:
         - i.e., 
            - *"for (x = 0; x < listQuestions.length; x++){
            - text(listQuestions[x], 20, 180 + x * 20)}"* 
      - We can also limit the size of the array of input stored and deployed before the first element is removed, with an *"if loop"* in the *"askSomething"* function
         - i.e.,
            - *"if (listQuestions.length > 3){
            - listQuestions.shift();}"*

**Resizing sketches to fit browser window**
	
1. To make sure that your coded canvas fits into the users' browser window, without leaving any margin, when creating your canvas (usually in the *"function setup"* part), you must use *"windowWidth"* and *"windowHeight"* instead of numerical values 
2. However, this does not make this resizing dynamic. Thus, if the user changes the size of their window once the code has already loaded, it will maintain the original size it loaded as, instead of updating the canvas size. 
3. To fix this, we must add a built in function [*"function windowResized(){}"*], inside which we add a code line to resize the canvas to re-fit the user's window [*"resizeCanvas(windowWidth, windowHeight);"*].
		
*** 
