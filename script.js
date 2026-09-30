// ============================================================
//  🎟  Event Welcome Center — script.js
//  JavaScript Foundations · Lab 5
// ============================================================

// ── Challenge 1: Event Information ──────────────────────────
// Create your variables here and log each one to the console.

let eventName = "Tech Summit";
let attendeeName = "Jordan";
let speakerName = "Dr. Lee";
let roomNumber = 204;

console.log(eventName);
console.log(attendeeName);
console.log(speakerName);
console.log(roomNumber);

// ── Challenge 2: Personalized Greetings ─────────────────────
// Combine your variables with strings to build welcome messages.

console.log("Welcome " + attendeeName + " to " + eventName + "!");
console.log(attendeeName + " will be in Room " + roomNumber + ".");

// ── Challenge 3: Build Functions ────────────────────────────
// Create at least two functions and call them below.

function welcomeGuest() {
  console.log("Welcome " + attendeeName + " to " + eventName + "!");
}

function displaySessionInfo() {
  console.log(
    "Today's speaker is " + speakerName + " in Room " + roomNumber + ".",
  );
}

welcomeGuest();
displaySessionInfo();

// ── Challenge 4: Alert Messages ─────────────────────────────
// Send messages directly to the user with alert().
alert("Welcome to " + eventName + "!");

// ── Challenge 5: Attendee Counter ───────────────────────────
// Track how many attendees have checked in.
let attendeeCount = 0;

attendeeCount = attendeeCount + 1;
console.log("Attendees checked in: " + attendeeCount);

attendeeCount = attendeeCount + 1;
console.log("Attendees checked in: " + attendeeCount);

// ── 🚀 Level Up Challenges ──────────────────────────────────
// LU1: Add displaySpeaker(), displayRoom(), displayAgenda()
function attendeeGreeting() {
  console.log(attendeeName + " just checked in!");
}

attendeeGreeting(attendeeName);

// LU2: Create variables for 3 attendees with personalized messages
let attendee2 = "Sam";
let attendee3 = "Taylor";

attendeeGreeting(attendee2);
attendeeGreeting(attendee3);

// LU3: Build a mini conference dashboard (variables + functions + console)
console.table([
  { name: attendeeName, event: eventName, room: roomNumber },
  { name: attendee2, event: eventName, room: roomNumber },
  { name: attendee3, event: eventName, room: roomNumber },
]);

console.info("Event Welcome Center is running successfully!");
// LU4: Research and demo console.warn(), console.table(), or console.info()
