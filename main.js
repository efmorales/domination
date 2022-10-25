/* Part One - Querying DOM Elements
These functions don't need to return anything.*/

// Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!

function listLine(){
    let firstLi = document.querySelector('li');
    firstLi.style.textDecoration = 'line-through';

}


// Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.


listLine();

// Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.

function imageSet(id, url){

    let image = document.querySelector("#" + id);
    
    image.src = url;
    image.style.height = "300px";

}

// Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!


imageSet("image-1", "https://mj-gallery.com/dde73199-4b2d-4825-9e75-a01d9ee70124/grid_0.png");
imageSet("image-2", "https://mj-gallery.com/d6468b77-30b2-44f2-9b48-3b36e4c4e561/grid_0.png");
imageSet("image-3", "https://mj-gallery.com/696ed7a9-2808-428b-a879-6629c9a17138/grid_0.png");


// This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>

function removeLi(){
    let firstLi = document.querySelector('li');

    firstLi.remove();
}


// Now use it to remove the first two items from that list. You'll need to call it twice!

removeLi();
removeLi();


// Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.

function textSize(text,id){

    let idNum = document.querySelector("#" + id);

    idNum.style.fontSize = text + "px";

}

// Try using it to change the size of any text on the page.

textSize("50","heading");



// Part Two - DOM Elements as Function Parameters
// These functions will take in DOM elements as parameters. They also don't need to return anything.
// Write a function that takes in a DOM element and appends it to the Arguments <ul>.

function childAssignment(element){

    let arguments = document.querySelector("#arguments");

    // let element = document.createElement('li');

    // arguments.appendChild(element);

    arguments.appendChild(element);
    
}


// Let's use it! Create an image element in Javascript and pass it into your function.

let newImage = document.createElement('img');

newImage.src = "https://mj-gallery.com/18b3e453-f7b5-45b4-9964-aa73bf84172f/grid_0.png";

newImage.style.height = "300px";

childAssignment(newImage);


// Write a function that takes in an image element and modifies its height to be 30 pixels.

function imageSz(image){
    image.style.height = "30px";
}

// Let's use it. Query an image element and then pass it into the function.

imageSz(newImage);

// Write a function that takes in an element and gives it the class invisible.



function invisibleClass(element){
    
    // let toHide = document.querySelector(element);

    element.className = "invisible"

    element.style.visibility = "hidden";

}


// Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)

let thing1 = document.querySelector("#thing-1");
let thing2 = document.querySelector("#thing-2");

invisibleClass(thing1);
invisibleClass(thing2);


// Part Three - Creating DOM Elements
// These functions will return new DOM elements.

// Write a function that takes in text and returns a new <li> with the given text parameter as its innerText.

function newLi(text){
    
    let newLi = document.createElement("li");

    newLi.innerText = text;

    return newLi;
}

// Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).

let hola = newLi("Hola");

childAssignment(hola);


// Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an <h3>) with that text in it.

function newHeaders(size, text){

    if (size === 1){
        let newH1 = document.createElement("h1");
        newH1.innerText = text;
        return newH1;
    } else if (size === 2){
        let newH2 = document.createElement("h2");
        newH2.innerText = text;
        return newH2;
    } else if (size === 3){
        let newH3 = document.createElement("h3");
        newH3 = document.createElement("h3");
        newH3.innerText = text;
        return newH3
    } else if (size === 4){
        let newH4 = document.createElement("h4");
        newH4 = document.createElement("h4");
        newH4.innerText = text;
        return newH4;
    }

}

// Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).

let testHeader1 = newHeaders(1, "Test");
let testHeader2 = newHeaders(2, "Test");
let testHeader3 = newHeaders(3, "Test");
let testHeader4 = newHeaders(4, "Test");

childAssignment(testHeader1);
childAssignment(testHeader2);
childAssignment(testHeader3);
childAssignment(testHeader4);