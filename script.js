//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 02.02: for Loop - Challenge


//TODO 🎯 Step 6 Project Integration Plan: Flashcard App (Loop Integration)

//* Mini Feature Prompt:
//  • You have a set of flashcards stored in an array (e.g., 10 cards).
//  • Use a for loop to go through each card and print out the question.
//  • Stop the loop once you reach a card that has already been marked as “mastered”.

//* 🧠 Task for You:
//  Please write pseudocode for this feature. Example guidance:
//  • How would you set up the array?
//  • How do you track which card is "mastered"?
//  • Where do you break the loop?
//  Just describe what you'd do, not how to code it yet.

//? 🔬 Pseudocode

// SET flashcards TO an array of 10 cards
// Each card has a question and a status (e.g., "mastered" or "learning")

// FOR each card IN flashcards
//     IF card.status === "mastered"
//         PRINT "A mastered card has been found."
//         BREAK
//     ELSE
//         PRINT card.question

//  🧠 Explanation:
//  • Array structure: Treat each card as an object like { question: "...", status: "..." }
//  • Loop intent: Iterating through each card, not just counting numbers
//  • Condition: Compare a property of the card (status), not the card itself
//  • Message logic: Provide feedback to the user

//! 🧮 Solution

const flashcards = [
    { question: "What is the capital city of France?", answer: "Paris", status: "learning" },
    { question: "What is the formula for the area of a triangle?", answer: "(base × height) ÷ 2", status: "learning" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare", status: "learning" },
    { question: "What is the powerhouse of the cell?", answer: "The mitochondrion", status: "learning" },
    { question: "Who discovered gravity when an apple fell on his head?", answer: "Sir Isaac Newton", status: "mastered" },
    { question: "What is 9 x 8?", answer: "72", status: "learning" },
    { question: "What planet is known as the Red Planet?", answer: "Mars", status: "learning" },
    { question: "What language is primarily spoken in Brazil?", answer: "Portuguese", status: "learning" },
    { question: "What gas do plants absorb from the atmosphere during photosynthesis?", answer: "Carbon dioxide (CO₂)", status: "learning" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci", status: "mastered" },
];

for (let i = 0; i < flashcards.length; i++) {
    const card = flashcards[i];
    if (card.status === "mastered") {
        console.log("A mastered card has been found.");
        break;
    } else {
        console.log(card.question);
    }
}

//? 🔍 Review of Your Code:

//  ✅ Implementation:

//  1. Structured Data

const flashcard = [ { question: "...", answer: "...", status: "..." } ];

//  ✔️ I used an array of objects, which is exactly how data is modeled in real-world applications.
//  ✔️ Each object is clear, descriptive, and follows best practices.

//  2. Clear Loop with Early Exit

```
for (let i = 0; i < flashcards.length; i++) {}
```

//  ✔️ This loop is efficient, easy to follow, and readable.
//  ✔️ I used "early exit logic (`break`)" to stop when a mastered card is found — this shows understanding of "control flow".

//  3. Conditional Display

```
if (card.status === "mastered") {
    console.log("A mastered card has been found.");
    break;
} else {
    console.log(card.question);
}
```

//  ✔️ Log only the questions before the mastered one.
//  ✔️ Not just looping — but building meaningful logic based on user data.

//! 🔍 Sample Output (Partial):

```
What is the capital city of France?
What is the formula for the area of a triangle?
Who wrote 'Romeo and Juliet'?
What is the powerhouse of the cell?
A mastered card has been found.
```

//  🧠 This is exactly the kind of output logic you would want in a study or review app.

//? 🪴 Growth Note

//  What was built is a "functional slice of a flashcard app" — with:
//  • Structured data
//  • Controlled iteration
//  • Condition-driven behavior
//  That is real programming, not beginner practice.
