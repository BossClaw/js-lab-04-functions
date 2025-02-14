// LAB 04 -  FUNCTIONS

// HELPER
function randi(exclusive_max) {
    return Math.floor(Math.random() * exclusive_max)
}


// PART 1
function greet(input_name) {

    let greetings_arr = ["Hello", "G'Day", "Howdy", "Greetings"];
    let unknown_arr = ["you", "someone", "person", "sentient being"];

    // ADD FIRST PART
    let ret_str = greetings_arr[randi(greetings_arr.length)] + " ";

    if (input_name == null || input_name.length < 1) {
        ret_str += unknown_arr[randi(unknown_arr.length)];
    }
    else {
        ret_str += input_name;
    }

    // ADD EXCITEMENT
    ret_str += "!";

    // RETURN THE DYN STRING
    return ret_str;
}


// PART 2
function addNumbers(num1, num2) {

    const parse_float_1 = parseFloat(num1);
    const parse_float_2 = parseFloat(num2);

    if (isNaN(parse_float_1))
    {
        return "Value 1 is not a number!";
    }
    
    if (isNaN(parse_float_2))
    {
        return "Value 2 is not a number!";
    }

    var sum = parse_float_1 + parse_float_2;
    return "The sum of " + parse_float_1 + " plus " + parse_float_2 + " is " + sum;
}



// PART 3 
let scope_x = 10;

function changeValue(new_val) {

    // RE-DECLARE
    let scope_x = 0;

    // IF NULL, ASSIGN A RANDOM VALUE
    if (new_val == null) {
        scope_x = randi(1000);
    }
    else {
        scope_x = new_val;
    }

    console.log("FUNCTION SCOPE X IS [" + scope_x + "]");
    return "FUNCTION SCOPE X IS [" + scope_x + "]";
}

function log_scope_x() {
    console.log("GLOBAL SCOPE X IS [" + scope_x + "]");
}

// PART 6
function outerFunction() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const counter = outerFunction();


// QUICK ASSIGN
window.changeValue = changeValue


function do_task(task_id, input_val_1, input_val_2, output_div) {


    // MAKE RETURN OUTPUT TEXT
    var resText = "";

    // console.log("\nTASK ID[" + task_id + "] - STARTED\n\n");

    switch (task_id) {
        case 1:
            // Part 1: Declaring and Invoking Functions
            // Step 1: Declare a simple function in script.js
            // Write a function named greet that takes a single parameter (a person's name) and returns a greeting message.
            // The function should return a string combining "Hello" and the name provided.

            // Hint:
            // Use parameters inside the function to dynamically change the output.

            // Bonus Challenge:
            // Modify the greet function to provide a default greeting if no name is passed.

            // Snippet:

            // function greet(name) {
            //     // return greeting here
            // }

            // Step 2: Invoke the function
            // Call the greet function and log its result to the console.
            // Make sure to pass a name when you call the function.

            resText = greet(input_val_1);
            break;

        case 2:
            // Part 2: Working with Parameters and Returning Values


            // Step 3: Create a function to add two numbers
            // Create a function named addNumbers that accepts two parameters.
            // It should return the sum of those parameters.

            // Hint:
            // Think about how you can use multiple parameters to calculate something and return the result.

            // Snippet:

            // function addNumbers(num1, num2) {
            //     // return sum here
            // }

            resText = addNumbers(input_val_1, input_val_2);
            break;

        case 3:
            // Part 3: Function Scope

            // Step 4: Local and Global Scope
            // Declare a variable globally, 
            // then declare a function changeValue() 
            // that re-declares the same variable name inside the function 
            // and assigns it a different value.
            // Observe the scope behavior by 
            // logging the variable in different places.


            // Hint:
            // Be mindful of where variables are declared 
            // (inside or outside functions) 
            // and how they behave in different scopes.


            // Snippet:
            // let x = 10;

            // function changeValue() {
            //     // declare a new x locally here
            // }
            resText = changeValue(input_val_1);
            resText += "\nGLOBAL   SCOPE_X IS [" + scope_x + "]";
            // log_scope_x();
            break;

        case 4:
            // Part 4: Closures
            // Step 5: Create a function with closure
            // Write a function outerFunction 
            // that declares a local variable 
            // and returns an inner function.

            // The inner function should update the local variable 
            // each time it's called.

            // Hint:
            // Closures allow the inner function to remember 
            // the local variables of the outer function 
            // even after the outer function is done.

            // Snippet:

            // function outerFunction() {
            //     let count = 0;
            //     return function() {
            //         // update count here
            //     }
            // }

            let updated_closure_value = counter();
            resText = "CLOSURE VALUE IS NOW[" + updated_closure_value + "]";
            break;
    }


    // SET TEXT ON OUTPUT DIV & LOG
    output_div.innerText = resText;

    // LOG IT
    console.log(resText)
    // console.log("");
    // console.log("TASK ID[" + task_id + "] - FINISHED");
}
