// document.querySelector('button[type="submit"]').addEventListener('click', function() {
//     window.location.href = 'dashboard.html';
//   });

// function login() {
//     const username = document.getElementById("username").value;
//     const location = document.getElementById("location").value;
//     if (username && location) {
//       // Store username and location in local storage
//       localStorage.setItem("username", username);
//       localStorage.setItem("location", location);
//       // Redirect to dashboard
//       window.location.href = "dashboard.html";
//     } else {
//       alert("Please enter both username and location.");
//     }
//   }

// document.addEventListener("DOMContentLoaded", function() {
//   const firstPara = document.getElementById('firstPara');
//   const secondPara = document.getElementById('secondPara');

//   // Function to toggle between paragraphs
//   function toggleParagraphs() {
//       // Check which paragraph is currently displayed
//       if (firstPara.style.display === 'block') {
//           // Hide the first paragraph and show the second
//           firstPara.style.display = 'none';
//           secondPara.style.display = 'block';
//       } else {
//           // Hide the second paragraph and show the first
//           secondPara.style.display = 'none';
//           firstPara.style.display = 'block';
//       }
//   }

//   // Initial display of the first paragraph
//   firstPara.style.display = 'block';

//   // Set an interval to toggle paragraphs every 2 seconds (2000 milliseconds)
//   setInterval(toggleParagraphs, 2000); // Adjust the time as needed
// });