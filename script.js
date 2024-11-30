// Filter colleges based on criteria
function filterColleges() {
    const type = document.getElementById("type").value;
    const location = document.getElementById("location").value;
    const major = document.getElementById("major").value;
    const price = document.getElementById("price").value;

    const colleges = document.querySelectorAll("#college-list li");

    colleges.forEach(college => {
        const collegeType = college.getAttribute("data-type");
        const collegeLocation = college.getAttribute("data-location");
        const collegeMajor = college.getAttribute("data-major");
        const collegePrice = college.getAttribute("data-price");

        if (
            (type === "all" || type === collegeType) &&
            (location === "all" || location === collegeLocation) &&
            (major === "all" || major === collegeMajor) &&
            (price === "all" || price === collegePrice)
        ) {
            college.style.display = "block";
        } else {
            college.style.display = "none";
        }
    });
}

// Simulate booking a tour
function bookTour(collegeName) {
    const confirmation = confirm(`Would you like to book a tour for ${collegeName}?`);
    if (confirmation) {
        alert("Your tour has been booked! Payment processing will begin shortly.");
        // Here, you can integrate a payment system or redirect to a payment gateway.
    }
}
