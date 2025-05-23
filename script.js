// 1. Define a data structure for feelings
const feelingsData = [
    {
        keywords: ["sad", "down", "lonely", "unhappy", "depressed", "blue"],
        name: "Sadness",
        meditation: "Loving-kindness meditation: Focus on sending compassion to yourself and others. Allow yourself to feel the sadness without judgment, acknowledging it as a temporary state. Sit comfortably, close your eyes, and repeat phrases like 'May I be happy, may I be healthy' silently to yourself. Then, extend these wishes to loved ones, neutral persons, difficult people, and finally to all beings."
    },
    {
        keywords: ["stressed", "anxious", "worried", "overwhelmed", "nervous", "tense"],
        name: "Anxiety / Stress",
        meditation: "Mindful breathing: Pay attention to your breath. Notice the sensation of each inhale and exhale. If your mind wanders, gently bring your focus back to your breath. Try a 4-7-8 count if it helps: inhale for 4, hold for 7, exhale for 8. This can be done for a few minutes anytime you feel anxious."
    },
    {
        keywords: ["happy", "joyful", "grateful", "content", "pleased", "excited"],
        name: "Happiness / Joy",
        meditation: "Gratitude meditation: Focus on things you are grateful for, big or small. Allow yourself to feel the positive emotions associated with gratitude. Savor the feeling of joy and let it fill you. Close your eyes and bring to mind people, experiences, or things that you appreciate."
    },
    {
        keywords: ["angry", "frustrated", "irritated", "annoyed", "mad"],
        name: "Anger",
        meditation: "Observing anger meditation: Acknowledge the anger without acting on it. Notice the physical sensations of anger in your body (e.g., heat, tension). Breathe deeply and imagine the anger as a storm cloud passing by, observing it with detachment until it subsides."
    },
    {
        keywords: ["calm", "peaceful", "relaxed", "serene", "tranquil"],
        name: "Calmness / Peace",
        meditation: "Body scan meditation: Bring gentle awareness to each part of your body, from your toes to the top of your head. Notice any sensations without judgment. This practice helps to release tension and cultivate a sense of peace throughout your body."
    },
    {
        keywords: ["distracted", "unfocused", "scattered", "need focus", "clarity"],
        name: "Need for Focus / Clarity",
        meditation: "Focused attention meditation: Choose a single point of focus, such as your breath, a sound, or a visual object (like a candle flame). Whenever your mind wanders, gently bring your attention back to your chosen point. Start with short sessions (5-10 minutes)."
    }
];

// 2. Get references to HTML elements
const feelingInput = document.getElementById('feelingInput');
const submitBtn = document.getElementById('submitBtn');
const feelingResult = document.getElementById('feelingResult');
const meditationTechnique = document.getElementById('meditationTechnique');

// 3. Implement a function to find the feeling
function findFeeling(userInput) {
    if (!userInput) {
        return null;
    }
    const lowerInput = userInput.toLowerCase();
    for (const feeling of feelingsData) {
        for (const keyword of feeling.keywords) {
            if (lowerInput.includes(keyword.toLowerCase())) {
                return feeling; // Return the first matching feeling object
            }
        }
    }
    return null; // No match found
}

// 4. Implement a function to display the result
function displayResult(feelingObject) {
    if (feelingObject) {
        feelingResult.textContent = `Identified feeling: ${feelingObject.name}`;
        meditationTechnique.textContent = `Suggested technique: ${feelingObject.meditation}`;
    } else {
        feelingResult.textContent = "Sorry, we couldn't identify your feeling. Try other words or be more specific.";
        meditationTechnique.textContent = ""; // Clear meditation technique
    }
}

// 5. Add an event listener to the submit button
if (submitBtn) {
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        const userText = feelingInput.value;
        const foundFeeling = findFeeling(userText);
        displayResult(foundFeeling);
    });
} else {
    console.error("Submit button not found. Ensure your HTML has a button with id 'submitBtn'.");
}

// Optional: Add an event listener for the 'Enter' key in the input field
if (feelingInput) {
    feelingInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission on Enter
            // Trigger the button click event
            if (submitBtn) {
                submitBtn.click();
            }
        }
    });
} else {
    console.error("Feeling input not found. Ensure your HTML has an input with id 'feelingInput'.");
}
