// Functions

// Set the name of your character
function setCharacter () {
    return prompt("Please enter the name of your character:");
}

// Choose where you're going
function setScene () {
    let outString = "Where would you like your story to unfold:\nbeach, forest or desert"
    return prompt(outString);
}


// Choose what you're going to do
function setAction (scene) {
    let outString;

    if (scene == "forest") {
        outString = `What would you like to do in the forest? 
        You can either "climb a tree" or "explore a cave"`;
    } else if (scene == "desert") {
        outString = `What would you like to do in the desert? 
        Would you like to "look for water" or "ride camel"`;
    } else if (scene == "beach") {
        outString = `What would you like to do at the beach?
        Choose between "brave the sands" or "swim in the depths"`;
    }

    return prompt(outString);
}


// Generate the story
function generateStory() {
    let name = setCharacter();
    let scene = setScene();
    let action = setAction(scene);

    alert(`${name} starts their journey in a ${scene}. They look around and they decide to ${action}`);
}

generateStory();

