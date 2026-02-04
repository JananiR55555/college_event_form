const mode = document.getElementById("mode");
const teamSection = document.getElementById("teamSection");

mode.addEventListener("change", () => {
    if (mode.value === "team") {
        teamSection.classList.remove("hidden");
    } else {
        teamSection.classList.add("hidden");
    }
});

document.getElementById("eventForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Registration Successful!\nSee you at TECHVYOM 2026.");
    this.reset();
    teamSection.classList.add("hidden");
});
