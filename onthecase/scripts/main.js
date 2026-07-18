// Needed for story panel to show story parts
let storyParts = [];     // holds the 3 completed story sections
let currentPart = 0;     // 0 = beginning, 1 = middle, 2 = ending


// Story Beginnings
const beginnings = [
    {
        id: 1,
        text: `The gathering at {PLACE} ended abruptly when the valuable {OBJECT} vanished from a locked display case. {NAME}, who had been standing nearby with a watchful {ANIMAL}, remembered that the room had become strangely {ADJECTIVE} just before the discovery. Although the doors remained secured, pale dust crossed the floor and disappeared beneath a heavy curtain. Behind it lay a torn piece of dark fabric and a note marked with an unfamiliar symbol.`
    },

    {
        id: 2,
        text: `At {PLACE}, the evening's most admired possession was a rare {OBJECT} kept inside a glass cabinet. Minutes later, {NAME} returned with a restless {ANIMAL} and discovered that the cabinet was empty. Nothing appeared broken, but the room felt unusually {ADJECTIVE}, and pale dust formed a narrow trail toward the hallway. Beside it were a torn piece of dark fabric and a note bearing an unfamiliar symbol.`
    },

    {
        id: 3,
        text: `A celebration was underway at {PLACE} when someone announced that the treasured {OBJECT} could not be found. {NAME} began searching while a curious {ANIMAL} lingered near pale dust that ended beside a recently moved wall panel. The most {ADJECTIVE} discovery was a torn piece of dark fabric caught along its edge. Inside the shallow space behind the panel rested a note marked with an unfamiliar symbol.`
    }
];

// Story Middles
const middles = [
    {
        id: 1,
        text: `The {ANIMAL} repeatedly returned to a narrow cabinet near the back of the room. Inside, investigators found dust matching the trail, while the torn fabric fit a rough metal latch hidden behind the cabinet. The note seemed deliberately {ADJECTIVE}, but several letters had been pressed more deeply than the others. Read together, they formed an instruction to {VERB} beside the oldest clock. Following it revealed a lever that opened a concealed passage through the wall.`
    },

    {
        id: 2,
        text: `Traces of pale dust on the {ANIMAL} led the investigation toward a loose floorboard. Beneath it were a small key and a diagram marked with the same symbol found on the note. The markings appeared {ADJECTIVE} at first, but the torn fabric matched material caught beside one of the diagrammed doors. A written instruction said to {VERB} when the hallway bell sounded. Testing the mechanism caused part of the wall to slide silently open.`
    },

    {
        id: 3,
        text: `A faint sound caused the {ANIMAL} to stare toward a shelf covered with pale dust. Closer examination revealed fresh scratches, a hidden hinge, and the same symbol that appeared on the note. The arrangement looked {ADJECTIVE}, yet the torn fabric showed that someone had recently passed through the narrow opening. Beneath the symbol was one underlined instruction: {VERB}. Carrying it out released a concealed drawer containing a key and a map of the hidden route.`
    }
];

// Story Endings
const endings = [
    {
        id: 1,
        text: `{NAME} followed the hidden route through {PLACE} and found the missing {OBJECT} inside a locked storage chest. The owner's assistant was waiting nearby and admitted hiding it after overhearing a guest plan to steal it. The assistant had left the clues so someone trustworthy would discover the truth before the thief could act, then intended to {VERB} and explain everything. The planned theft was prevented, the object was restored to its display, and the guilty guest was removed before the gathering resumed.`
    },

    {
        id: 2,
        text: `The combined clues led {NAME} to a concealed room beneath {PLACE}, where the missing {OBJECT} rested beside a set of copied keys. A nervous employee confessed to taking it to prove that the building's security could be defeated. The employee had planned to {VERB} and return it before anyone noticed, but the dust, fabric, note, and hidden route exposed the scheme. The object was returned, the employee was dismissed, and the owner ordered the security system replaced before reopening the building.`
    },

    {
        id: 3,
        text: `{NAME} reached the end of the hidden passage at {PLACE} and discovered the missing {OBJECT} behind a false wall. A former caretaker stepped forward and admitted hiding it because the owner planned to sell it to a private collector. Believing it belonged with the community, the caretaker had decided to {VERB} and remove it before the sale. After hearing the truth, the owner canceled the sale and placed the object in a public exhibit, while the caretaker surrendered the key and accepted responsibility.`
    }
];

// Get the user words from the story mixer form
function getUserWords() {
    const words = {
        NAME: document.querySelector("#name").value,
        ANIMAL: document.querySelector("#animal").value,
        PLACE: document.querySelector("#place").value,
        ADJECTIVE: document.querySelector("#adjective").value,
        VERB: document.querySelector("#verb").value,
        OBJECT: document.querySelector("#object").value
    };

    return words;
}


function chooseRandomSegment(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Place user words 
function replaceWords(text, words) {
    let updatedText = text;

    // Object.keys(words) creates an array of word-property names and forEach() repeats the replacement for every property
    Object.keys(words).forEach(key => {
        updatedText = updatedText.replaceAll(`{${key}}`, words[key]);
});

    return updatedText;
}


function createStory(event) {
    event.preventDefault();

    const storyButton = document.querySelector("#create-story");

    // Only collect and validate words on the first click
    if (currentPart === 0) {

        const words = getUserWords();

        // Validation only on first click
        if (
            words.NAME === "" ||
            words.ANIMAL === "" ||
            words.PLACE === "" ||
            words.ADJECTIVE === "" ||
            words.VERB === "" ||
            words.OBJECT === ""
        ) {
            storyOutput.textContent = "Please complete every field.";
            return;
        }

        // Build the story only once
        const beginning = chooseRandomSegment(beginnings);
        const middle = chooseRandomSegment(middles);
        const ending = chooseRandomSegment(endings);

        const part1 = replaceWords(beginning.text, words);
        const part2 = replaceWords(middle.text, words);
        const part3 = replaceWords(ending.text, words);

        storyParts = [part1, part2, part3];
    }

    // Show the current part
    storyOutput.innerHTML = `<p>${storyParts[currentPart]}</p>`;


           // The flow of story parts 1st click ends with Continue Investigation and 2nd Solve the Case
        if (currentPart === 0) {
            storyButton.textContent = "Continue Investigation";
        } else if (currentPart === 1) {
            storyButton.textContent = "Solve the Case";
        }

        // Go to the next story part
        currentPart++;

        // If the user finished all 3 parts, reset for a new story
        if (currentPart > 2) {
            currentPart = 0;
            storyButton.innerHTML = `
                <img src="images/search-icon.svg" alt="" aria-hidden="true">
                Create Story
            `; // reset the button to the original 
        }
}


const storyForm = document.querySelector("#story-form");
const storyOutput = document.querySelector("#story-output");


// Story listener for Create Story button
storyForm.addEventListener("submit", createStory);
