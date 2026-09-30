// ============================================================
//  🎟  Event Welcome Center — script.js
//  JavaScript Foundations · Lab 5
// ============================================================

// ── Challenge 1: Event Information ──────────────────────────
// Create your variables here and log each one to the console.

let eventName = "Tech Summit";
let speakerName = "Dr. Lee";
let roomNumber = 204;

console.log(eventName);
console.log(speakerName);
console.log(roomNumber);

// ── Challenge 2: Personalized Greetings ─────────────────────
// Combine your variables with strings to build welcome messages.

console.log("Welcome guests to " + eventName + "!");
console.log("The event is in Room " + roomNumber + ".");

// ── Challenge 3: Build Functions ────────────────────────────
// Create at least two functions and call them below.

function welcomeGuest(name) {
  console.log("Welcome " + name + " to " + eventName + "!");
}

function displaySessionInfo() {
  console.log(
    "Today's speaker is " + speakerName + " in Room " + roomNumber + ".",
  );
}

displaySessionInfo();

// ── Live Check-In ────────────────────────────────────────────
let attendees = [];
const checkinForm = document.querySelector("#checkin-form");
const attendeeCount = document.querySelector("#attendee-count");
const attendeeList = document.querySelector("#attendee-list");
const formMessage = document.querySelector("#form-message");

function renderAttendees() {
  attendeeCount.textContent = attendees.length;

  if (attendees.length === 0) {
    attendeeList.innerHTML =
      '<li class="empty-state">No attendees checked in yet.</li>';
    return;
  }

  attendeeList.replaceChildren(
    ...attendees.map((attendee) => {
      const listItem = document.createElement("li");
      const details = document.createElement("div");
      const name = document.createElement("strong");
      const email = document.createElement("span");
      const session = document.createElement("small");

      name.textContent = attendee.name;
      email.textContent = attendee.email;
      session.textContent = attendee.session;
      details.append(name, email);
      listItem.append(details, session);
      listItem.className = "attendee-item";
      return listItem;
    }),
  );
}

checkinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(checkinForm);
  const attendee = {
    name: formData.get("name").trim(),
    email: formData.get("email").trim(),
    session: formData.get("session"),
  };

  attendees.push(attendee);
  renderAttendees();
  welcomeGuest(attendee.name);
  console.table(attendees);
  formMessage.textContent = `${attendee.name} is checked in!`;
  formMessage.className = "form-message success";
  alert("Welcome " + attendee.name + " to " + eventName + "!");
  checkinForm.reset();
});

renderAttendees();
console.info("Event Welcome Center is running successfully!");
