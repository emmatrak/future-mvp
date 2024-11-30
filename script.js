// Mock data for colleges
const colleges = [
    {
        name: "North University",
        type: "public",
        location: "north",
        major: "engineering",
        price: "low",
        description: "A prestigious public university located in the North with a focus on Engineering and Science.",
        link: "https://www.northuniversity.edu",
    },
    {
        name: "South Arts College",
        type: "private",
        location: "south",
        major: "arts",
        price: "medium",
        description: "A private college offering excellent programs in the Arts and Humanities.",
        link: "https://www.southartscollege.edu",
    },
    {
        name: "East Science Institute",
        type: "public",
        location: "east",
        major: "science",
        price: "high",
        description: "A leading institution for research and studies in various scientific fields.",
        link: "https://www.eastscience.edu",
    },
];

// Render college list
function renderColleges(filteredColleges) {
    const collegeList = document.getElementById("collegeList");
    collegeList.innerHTML = ""; // Clear current list

    filteredColleges.forEach((college) => {
        const card = document.createElement("div");
        card.className = "college-card";

        card.innerHTML = `
            <h3>${college.name}</h3>
            <p>${college.description}</p>
            <ul>
                <li>Type: ${college.type}</li>
                <li>Location: ${college.location}</li>
                <li>Major: ${college.major}</li>
                <li>Price: ${college.price}</li>
            </ul>
            <button onclick="viewTour('${college.link}')">View Tour</button>
            <button onclick="bookTour()">Book Tour</button>
        `;

        collegeList.appendChild(card);
    });
}

// Initial render
renderColleges(colleges);

// Filter colleges
function filterColleges() {
    const type = document.getElementById("type").value;
    const location = document.getElementById("location").value;
    const major = document.getElementById("major").value;
    const price = document.getElementById("price").value;

    const filtered = colleges.filter((college) => {
        return (
            (type === "all" || college.type === type) &&
            (location === "all" || college.location === location) &&
            (major === "all" || college.major === major) &&
            (price === "all" || college.price === price)
        );
    });

    renderColleges(filtered);
}

// Search colleges
function searchColleges() {
    const search = document.getElementById("searchBar").value.toLowerCase();

    const filtered = colleges.filter((college) => {
        return college.name.toLowerCase().includes(search);
    });

    renderColleges(filtered);
}

// View tour (redirect to link)
function viewTour(link) {
    window.open(link, "_blank");
}

// Book tour (simulate payment)
function bookTour() {
    alert("Tour booked successfully! Payment processed.");
}

// Submit review
function submitReview() {
    const reviewForm = document.getElementById("reviewForm");
    const reviewText = reviewForm.querySelector("textarea").value;

    if (!reviewText) {
        alert("Please write a review before submitting.");
        return;
    }

    const reviewList = document.getElementById("reviewList");
    const reviewItem = document.createElement("p");
    reviewItem.textContent = reviewText;

    reviewList.appendChild(reviewItem);
    reviewForm.querySelector("textarea").value = ""; // Clear input
}

