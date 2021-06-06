// Step 1 - Create... a variable called childHeight that is a number. Give it any whole, positive number you like.
var childHeight = 52;

// Step 2 - Create a function called displayIfChildIsAbleToRideTheRollerCoaster
// function displayIfChildIsAbleToRideTheRollerCoaster()

// Step 3 - If the childHeight is great than 52, the console.log should say "Get on that ride, kiddo!". Else, console.log should say "Sorry kiddo. Maybe next year."
function displayIfChildIsAbleToRideTheRollerCoaster(height) {
    if(height >= 52){
        console.log("Get on that ride, kiddo!");
    }
    else{
        console.log("Sorry kiddo. Maybe next year.");
    }
}

console.log(displayIfChildIsAbleToRideTheRollerCoaster(childHeight));