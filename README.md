# WorkShop4
WS4 Project - Scrapbook
***
**Link = https://nech691.github.io/WorkShop_4/**

**#Tasks**
	
	[] Creating an interactive p5.js sketch with at least three different kinds of user input events 
	[] Experiment with ways to record and redeploy inputs from the user
	
##**Workshop**

> **Using randomness with user input & Resizing sketches to fit browser window**

***

###**Notes**

**Using randomness with user input**
	
	1. One way that we can add randomness using user input is by adding a *"mousePressed"* to our code, and moving the random image functions from inside the *"draw function"* to inside the *"mousePressed"* function. 
	2. You can build on this example using things like HTML elements (such as buttons, sliders, and other things)
		a. For example, to **create a button** we must add BLA to the set up function 
			i. i.e., *"let button = createButton('label to be displayed');"* 
		b. By adding *"button.possition(x, y)"* we can change the position of this button on the canvas 
		c. By adding *"button.mousePressed"* we can determine what happens when we click the button by using a nested function instead of the outside (previous) *"mousePressed"* function
			i. i.e., *"button.mousePressed(() => {what happens})"*
		d. You can add multiple buttons to your code 
	3. Another thing you can add to your code are **check boxes**
		a. You can do this by creating a variable for the check box and then initialising this variable in the *"setup"* function 
			i. i.e., *"checkbox = createCheckbox();"*
		b. Similar to the button, we can also change the position of this check box
		c. Then, in the *"draw"* function, we can set what happens when the checkbox is marked 
			i. i.e., *"if (checkbox.checked()){if checked what happens}"*
		d. With the *"if statement"* we can add what happens if the conditions specified are not met.
			i. i.e., *"...} else{what happens if not checked}"*
	4. You can also add **sliders** to you code 
		a. You can do this by creating a variable for the slider and initialising this variable in the *"setup"* function 
			i. i.e., *"slider = createSlider(min value, max value);"*
		b. You can also change the position and size of the slider in the *"setup"* function 
		c. Then, in the *"draw"* function, you can create a local variable to store the values of the slider - This is a constantly changing value, so it's in the *"function draw"* part
			i. i.e., *"let val = slider.value()"*
		d. Also in the *"draw"* function, you can add what the slider influences 
			i. E.g., *"background(val)"*
	5. We can also create a **drop down menu** in a similar manner 
		a. You can do this by creating a variable for the selections on the menu (*"let selection;"*) and initialising this variable in the *"setup"* function 
			i. i.e., *"selection = createSelect();"*
		b. You can also change the position and size of the slider in the *"setup"* function 
		c. Also in the *"setup"* function, you can add and change the options in the menu 
			i. E.g.., *"selection.option('Option 1');"* and so on for the next options
		d. Then, in the *"draw"* function, you can create a local variable to store the option selected 
			i. i.e., *"let x = selection.selected();"*
		e. Also in the *"draw"* function, you can add what the options do with *"if when"* loops 
			i. E.g., *"if (x === 'Option  1'){image(loadImge('Emojis/E1.png'))} else if (x === 'Option 2') {image(loadImge('Emojis/E2.png'))}"*
			ii. The "===" means *"exactly equal to"*
		f. Instead of drawing emojies, you could attach the options to *"setInterval"* functions
	6. Finally, you can also have users **create inputs** that affect the code using the *"createInput"* function 
		a. You can do this by creating an input variable (*"theInput"*) and initiating this variable in the *"setup"* function 
			i. You can also change the position and size of the input bar here 
		b. Then, in the *"function draw"* part, you can create a local variable to store the words used for input
			i. i.e., *"let words = theInput.value();"*
		c. You can then create a text using those words at the (for example) x 20 and y 50 position
			i. E.g. *"text(words, 20, 50)"*
		d. You can use input bars in much more complex ways
			- For example, you can add a button next to the input bar 
				- *"button.position(input.x + input.width, input.y)"*
			- You can also include a message above your input box using the *"create element('h2', 'Questions?')"* function and positioning above the box with the y position
		e. You can also use the input box to record and redeploy users' input by using a function to make a button to push the input  into an array, and reset the input bar.
			>  i.e., 
			>> *"function askSomething(){
			>>question = input.value(); 
			>> input.value(' ');
			>> listQuestions.push(questions);}"*
			i. Then, you can redeploy this input using a *"for loop"* to display the text inputs one line apart inside the *"draw function"*:
			> i.e., 
			>> *"for (x = 0; x < listQuestions.length; x++){
			>> text(listQuestions[x], 20, 180 + x * 20)}"* 
			ii. We can also limit the size of the array of input stored and deployed before the first element is removed, with an *"if loop"* in the *"askSomething"* function
			> i.e.,
			>> *"if (listQuestions.length > 3){
			>> listQuestions.shift();}"*
	
**Resizing sketches to fit browser window**
	
	1. To make sure that your coded canvas fits into the users' browser window, without leaving any margin, when creating your canvas (usually in the *"function setup"* part), you must use *"windowWidth"* and *"windowHeight"* instead of numerical values 
	2. However, this does not make this resizing dynamic. Thus, if the user changes the size of their window once the code has already loaded, it will maintain the original size it loaded as, instead of updating the canvas size. 
	3. To fix this, we must add a built in function [*"function windowResized(){}"*], inside which we add a code line to resize the canvas to re-fit the user's window [*"resizeCanvas(windowWidth, windowHeight);"*].
		
*** 

####**Project**

	>  Goal
	>> A code that has a button that when you click it randomises the array you have, then, when you click the mouse on the canvas, it uses that array to create a random image where the mouse is. The third user input will be a drop menu to change the back ground colour and the forth will be an input bar to generate words on random positions moving on the canvas.
	
	[] Creating an interactive p5.js sketch with at least three different kinds of user input events 
		- User input event 1 
			[] User clicks a button to randomise set of images used 
		- User input event 2
			[] User clicks mouse to generate new random image 
		- User input event 3
			[x] User selects background option from drop down menu 
		- User input event 4 
			[x] input bar that generates inputed words on canvas
	[] Experiment with ways to record and redeploy inputs from the user
		- Recorded user's input 
			§ Background option on drop down menu 
			§ Words added to the input bar
		- Deployed user's input 
			§ Background changing 
			§ Words displayed on canvas 
	
	**Issues & Solutions**
		
		**|Issue | Solution**|
		|redrawing images and words | |
		|mouse click on buttons generates images||
		
		
		
		
		
		
![image](https://github.com/Nech691/WorkShop_4/assets/163636824/afcfc05d-9e8c-4ee1-b470-28773bbb75b0)

