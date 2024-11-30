// Function to filter colleges based on the selected major
function filterColleges() {
    const selectedMajor = document.getElementById("major").value;
    const colleges = document.querySelectorAll("#college-list li");

    colleges.forEach(college => {
        const major = college.getAttribute("data-major");

        if (selectedMajor === "all" || major === selectedMajor) {
            college.style.display = "block"; // Show the college
        } else {
            college.style.display = "none"; // Hide the college
        }
    });
}
