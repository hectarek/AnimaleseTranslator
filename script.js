// Code for making an Animalese interpreter 

// Array of letters to correspond to various audio files.
let letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','th','sh',' ','.']
let pitch = 'high' // choose between 'high', 'med', 'low', or 'lowest'
let audioFileNum = "01";
let audioFileArray = [];

// Random input
let sentence = "The great cat"

//Make sentence Array of Characters
let sentenceArray = sentence.toLowerCase().split("");

// My Translate button
const translateButton = document.getElementById('translate-button');

// Iterate thought each letter of the sentence and add it to an array to play thought.
for (letr in sentenceArray) {
        
    let letterValue = letter.indexOf(sentenceArray[letr]) + 1;

    if(letterValue < 10) {
        letterValue = "0" + letterValue;
    }

    console.log(letterValue);

    audioFileNum = letterValue;

    let audioFolderName = "./sounds/" + pitch + "/"
    let audioFileName = "sound" + audioFileNum + ".wav";

    let audioName = audioFolderName + audioFileName

    console.log(audioName);

    audioFileArray.push(audioName);

    // let audio = new Audio(audioName);
}  

let audio = new Audio();


// Play sounds on click
translateButton.addEventListener("click", () => {

    let i = 0;
    audio.addEventListener('ended', function () {
        i = ++i < audioFileArray.length ? i : 0;
        console.log(i)
        audio.src = audioFileArray[i];
        audio.play();
    });
    audio.volume = 0.3;
    audio.loop = false;
    audio.src = audioFileArray[0];
    audio.play();

})


