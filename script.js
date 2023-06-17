// Variables
const bookList = document.getElementById("book-list");
const loadMoreBtn = document.getElementById("load-more-btn");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginOverlay = document.getElementById("login-overlay");
const signupOverlay = document.getElementById("signup-overlay");
const loginCloseBtn = document.getElementById("login-close-btn");
const signupCloseBtn = document.getElementById("signup-close-btn");
const signupLink = document.getElementById("signup-link");
const loginLink = document.getElementById("login-link");


// Add event listeners to the buttons
loginBtn.addEventListener('click', showLoginOverlay);
signupBtn.addEventListener('click', showSignupOverlay);
loginCloseBtn.addEventListener('click', hideLoginOverlay);
signupCloseBtn.addEventListener('click', hideSignupOverlay);

// Function to show the login overlay
function showLoginOverlay() {
  const loginOverlay = document.getElementById('login-overlay');
  loginOverlay.style.display = 'block';
  loginBtn.style.display = 'none'; // Hide the login button
  signupBtn.style.display = 'none'; // Hide the signup button
}

// Function to hide the login overlay
function hideLoginOverlay() {
  const loginOverlay = document.getElementById('login-overlay');
  loginOverlay.style.display = 'none';
}

// Function to show the signup overlay
function showSignupOverlay() {
  const signupOverlay = document.getElementById('signup-overlay');
  signupOverlay.style.display = 'block';
  loginBtn.style.display = 'none'; // Hide the login button
  signupBtn.style.display = 'none'; // Hide the signup button
}

// Function to hide the signup overlay
function hideSignupOverlay() {
  const signupOverlay = document.getElementById('signup-overlay');
  signupOverlay.style.display = 'none';
}



// Add event listeners to the buttons
loginBtn.addEventListener('click', showLoginOverlay);
signupBtn.addEventListener('click', showSignupOverlay);
loginCloseBtn.addEventListener('click', hideLoginOverlay);
signupCloseBtn.addEventListener('click', hideSignupOverlay);

// Function to show the login overlay
function showLoginOverlay() {
  const loginOverlay = document.getElementById('login-overlay');
  loginOverlay.style.display = 'block';
}

// Function to hide the login overlay
function hideLoginOverlay() {
  const loginOverlay = document.getElementById('login-overlay');
  loginOverlay.style.display = 'none';
}

// Function to show the signup overlay
function showSignupOverlay() {
  const signupOverlay = document.getElementById('signup-overlay');
  signupOverlay.style.display = 'block';
}

// Function to hide the signup overlay
function hideSignupOverlay() {
  const signupOverlay = document.getElementById('signup-overlay');
  signupOverlay.style.display = 'none';
}

// Check if the user is logged in or signed up
const isLoggedIn = false; // Replace with your login/signup logic

// Hide the login and signup buttons if the user is logged in or signed up
if (isLoggedIn) {
  loginBtn.style.display = 'none';
  signupBtn.style.display = 'none';
}


// Add event listeners to the buttons
loginBtn.addEventListener('click', showLoginOverlay);
signupBtn.addEventListener('click', showSignupOverlay);

// Function to show the login overlay
function showLoginOverlay() {
  const loginOverlay = document.getElementById('login-overlay');
  loginOverlay.style.display = 'block';
}

// Function to show the signup overlay
function showSignupOverlay() {
  const signupOverlay = document.getElementById('signup-overlay');
  signupOverlay.style.display = 'block';
}


let page = 1;
let books = [];

// Functions
function showBooks() {
  bookList.innerHTML = "";

  books.forEach((book) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <p>Year: ${book.year}</p>
      <p>Availability: ${book.available ? "Available" : "Not Available"}</p>
      <p>Copies: ${book.copies}</p>
    `;
    bookList.appendChild(li);
  });
}

function fetchBooks() {
  // Simulating an API call
  setTimeout(() => {
    books = [
      {
        title: "Book 1",
        author: "Author 1",
        genre: "Genre 1",
        year: 2021,
        available: true,
        copies: 3
      },
      {
        title: "Book 2",
        author: "Author 2",
        genre: "Genre 2",
        year: 2022,
        available: false,
        copies: 0
      },
      {
        title: "Book 3",
        author: "Author 3",
        genre: "Genre 3",
        year: 2023,
        available: true,
        copies: 5
      }
    ];

    showBooks();
  }, 1000);
}

function loadMoreBooks() {
  page++;
  fetchBooks();
}

function showLoginOverlay() {
  loginOverlay.style.display = "flex";
  loginBtn.style.display = "none";
  signupBtn.style.display = "none";
}

function hideLoginOverlay() {
  loginOverlay.style.display = "none";
  loginBtn.style.display = "block";
  signupBtn.style.display = "block";
}

function showSignupOverlay() {
  signupOverlay.style.display = "flex";
  loginBtn.style.display = "none";
  signupBtn.style.display = "none";
}

function hideSignupOverlay() {
  signupOverlay.style.display = "none";
  loginBtn.style.display = "block";
  signupBtn.style.display = "block";
}



// Event Listeners
window.addEventListener("DOMContentLoaded", fetchBooks);
loadMoreBtn.addEventListener("click", loadMoreBooks);
loginCloseBtn.addEventListener("click", hideLoginOverlay);
signupCloseBtn.addEventListener("click", hideSignupOverlay);
signupLink.addEventListener("click", () => {
  hideLoginOverlay();
  showSignupOverlay();
});
loginLink.addEventListener("click", () => {
  hideSignupOverlay();
  showLoginOverlay();
});
