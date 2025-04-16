// How to accept user input
// 1. EASY WAY -> window prompt
// 2. PROFESSIONAL WAY -> HTML textbox

// EASY WAY
// =======
// let username; 

// username = window.prompt("What's your username?");

// console.log(username);


// PROFESSIONAL WAY
// ===============
let username;

document.getElementById('mySubmit').onclick = function() {
    username = document.getElementById('myText').value;
    
    document.getElementById('username').textContent = "Welcome, " + username;
}