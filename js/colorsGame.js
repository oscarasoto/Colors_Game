
var target;
var target_index;
var colors = ["blue", "green", "magenta", "red", "yellow"];
var guess_input;
var finished = false;
var guesses = 0;

function do_game()
{
    target_index = (Math.floor(Math.random()* colors.length));
    target = colors[target_index];
    alert("color:" + target);

    while (!finished)
    {
        guess_input = prompt("I'm thinking of one of these colors:\n\n " +
            colors + "\n\n What is the color?");
        guesses += 1;
        finished = check_guess();
    }
}

function check_guess()
{
    //Check whether user click the cancel button
    if(guess_input == null){
        return true;
    }
    //Check whether user guess is in array of colors
    if (colors.indexOf(guess_input)<0)
    {
        alert("Sorry, I don't recognize the color.\n\n" + "Please try again.");
        return false;
    }
    if (guess_input > target)
    {
        alert ("Sorry, your guess is not correct!\n\n" + "Hint: Your color is alphabetically higher than mine.\n\n" + "Please try again.");
        return false;
    }
    if (guess_input < target)
    {
        alert ("Sorry, your guess is not correct!\n\n" + "Hint: Your color is alphabetically lower than mine.\n\n" + "Please try again.");
        return false;
    }

    // Change website background color to target.
    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background=target;
    alert("Congratulations! You have guessed the color! " + target + ".\n\nIt took you " + guesses + " guesses to finish the game!\n\n" + "You can see the color in the background");
    return true;

}