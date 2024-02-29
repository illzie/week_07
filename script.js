/*
    1) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
        a) Programmatically subtract the value of the first element in the array from the value in the last element of the array.
            • Do not use numbers to reference the last element, find it programmatically.
            • ages[7] - ages[0] is not allowed!
        b) Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
        c) Use a loop to iterate through the array and calculate the average age. 
*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);
// [ages.length - 1] gets last item in array no matter the length.
ages.push(10);
//adding number to end
console.log(ages[ages.length - 1] - ages[0]);
ages.pop(ages.length - 1)
//removing number from end
let averageAge = () => {
    let sum = 0;
    //Have to define sum to initialize it for the for loop function to work
    for (let i = 0; i < ages.length; i++) {
        //   Loops through ages array
        sum += ages[i];
        //   Basiclly [0]+[1]+[2]+ect. till the end of the array. I think, at least. It works tho :D
    } return sum / ages.length;
    // Gets sum from above and divides sum from the number of array objects and spits out the average
}
console.log(averageAge());

/*
    2) Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
        a) Use a loop to iterate through the array and calculate the average number of letters per name.
        b) Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var sum = 0;
// redeclaring sum variable back to 0 .
let nameList = [''];
// Like with the average function, I needed to initialize the variable with an empty array for the for nameList function to hook onto.
for (let i = 0; i < names.length; i++) {
    sum += names[i].length;
    // similar to first array but name[i].length pulls each array object out and counts the number of letters in each object to be added together. 
    nameList += names[i].concat(' ');
    // Grabs each array object and adds a space after each to output the array into a string
}
console.log((sum / names.length));
console.log(nameList);
/*
    3) How do you access the last element of any array?
        arr[arr.length - 1](prefered) or arr[lastindexnumber]

    4) How do you access the first element of any array?
        arr[0]
//        
    5) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
*/
var sum = 0;
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length++);
    // push() pushes array objects into empty nameLengths array
}
console.log(nameLengths);

/*
    6) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);
/*
    7) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/
let = repeatWord = (word, n) => word.repeat(n);
// 
console.log(repeatWord("Hello", 3));
console.log(repeatWord("Goodbye", 2));
/*
    8) Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
*/
let fullName = (firstName, lastName) => firstName.concat(" " + lastName);
// concatinates name variables and a space
console.log(fullName("Iliana", "Franco"));
console.log(fullName("Terry", "Pratchett"))
/*
    9) Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/


function greaterThan(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum >= 100) {
        return true;
    } else {
        return false;
    }
}
console.log(greaterThan([4, 12, 36, 50]));
console.log(greaterThan([4, 3, 2, 1]));
/*
    10) Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/

let average = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum / arr.length;
}
console.log(average([5, 18, 19, 7, 12, 4, 15]));
console.log(average([12, 1, 2, 70, 11, 5, 36]));
/*
    11) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/
function greaterThanA(a, b) {
    let avgA = () => {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum += a[i];
        } return sum / a.length;
    }
    let avgB = () => {
        let sum = 0;
        for (let i = 0; i < b.length; i++) {
            sum += b[i];
        } return sum / b.length;
    }
    // the two let functions above pull the averages from each array to use in the ifelse 
    if (avgA() > avgB()) {
        return true
    } else {
        return false;
    }
}
console.log(greaterThan([8, 2, 5, 1, 3, 17, 12, 4], [15, 13, 1, 4, 11, 9, 10, 6]));
console.log(greaterThan([12, 15, 22], [6, 2, 1]));
/*
    12) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/
let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside == true && moneyInPocket < 10.50) {
        // checks if both isHotOutside and moneyInPocket are true
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 9.99));
console.log(willBuyDrink(false, 8));
console.log(willBuyDrink(false, 12.5));
/*
    13) Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/
// I think a function to check what system theme a client is using is super useful for both UI, UX, and accessibility reasons.  Ofc a functional version would include something like  window.matchMedia to check for real but I decided it was outside the scope of this demo

let systemTheme = (userTheme) => {
    if (userTheme == "light") {
        // "light" would be replaced w/ window.matchMedia  
        return "Light Theme is active";
    } else {
        return "Dark Theme is Active";
    }
}
console.log(systemTheme("light"));
console.log(systemTheme("dark"));
console.log(systemTheme("theme"));

