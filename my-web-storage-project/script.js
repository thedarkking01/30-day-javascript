// Theme switching logic with LocalStorage
if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"));
} else {
    document.body.classList.add("light-mode"); // Default theme
}
  
document.getElementById("theme-toggle-button").addEventListener("click", function() {
if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");  // Save preference in LocalStorage
} else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");  // Save preference in LocalStorage
}
});

// SessionStorage Example: Save and Clear Data
document.getElementById("save-session").addEventListener("click", function() {
sessionStorage.setItem("sessionData", "Session Data Saved!");
document.getElementById("session-storage-info").textContent = sessionStorage.getItem("sessionData");
});

document.getElementById("clear-session").addEventListener("click", function() {
sessionStorage.removeItem("sessionData");
document.getElementById("session-storage-info").textContent = "SessionStorage cleared!";
});

// LocalStorage Example: Save and Clear Data
document.getElementById("save-local").addEventListener("click", function() {
localStorage.setItem("localData", "Local Data Saved!");
document.getElementById("local-storage-info").textContent = localStorage.getItem("localData");
});

document.getElementById("clear-local").addEventListener("click", function() {
localStorage.removeItem("localData");
document.getElementById("local-storage-info").textContent = "LocalStorage cleared!";
});
