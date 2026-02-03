const modeSelect = document.getElementById("mode");
const teamSection = document.getElementById("teamSection");

modeSelect.addEventListener("change", () => {
    if (modeSelect.value === "team") {
        teamSection.classList.remove("hidden");
    } else {
        teamSection.classList.add("hidden");
    }
});

document.getElementById("eventForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("🎉 Registration Successful! Thank you for registering.");
    this.reset();
    teamSection.classList.add("hidden");
});
