const form = document.querySelector("#eventForm");
const attendeeType = document.querySelector("#attendeeType");
const studentContainer = document.querySelector("#studentContainer");
const guestContainer = document.querySelector("#guestContainer");
const output = document.querySelector("#output");


function updateAttendeeFields() {
  const value = attendeeType.value;

  // Handle fields depending on student or guest selection
   if (value === "student") {
    studentContainer.hidden = false;
    guestContainer.hidden = true;

  } else if (value === "guest") { 
    studentContainer.hidden = true;
    guestContainer.hidden = false;

  } else {
    studentContainer.hidden = true;
    guestContainer.hidden = true;
  }
}

attendeeType.addEventListener("change", updateAttendeeFields);
updateAttendeeFields();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

// Ensure students choose a student id number that has exactly 9 digits and no letters
function isValidStudentId(value) {
  return value.length === 9 && !isNaN(value);
}

// Ensure guests enter proper access code
function isValidAccessCode(value) {
  return value === "EVENT131";
}



form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.attendeeType.value;
  const eventDate = form.eventDate.value;
  const studentId = form.studentId.value.trim();
  const accessCode = form.accessCode.value.trim();

  // Validate the input
  // Validate student id 
  if (type === "student" && !isValidStudentId(studentId)) {
    output.textContent = "Student I# must contain exactly 9 digits.";
    return;
  } 

  
  // Validate guest access code
  if (type === "guest" && !isValidAccessCode(accessCode)) {
    output.textContent = "Please enter a valid access code.";
    return;
  }
  
  // Validate event date
  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Reserved</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Type: ${type}</p>
  <p>Event Date: ${eventDate}</p>
  `;

  form.reset();
  updateAttendeeFields();
});
          