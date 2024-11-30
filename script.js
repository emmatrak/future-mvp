let currentUser = null;

// Mock college data
const colleges = [
    { name: "North University", type: "public", location: "north", major: "engineering", price: "low", link: "https://www.northuniversity.edu" },
    { name: "South Arts College", type: "private", location: "south", major: "arts", price: "medium", link: "https://www.southartscollege.edu" },
    { name: "East Science Institute", type: "public", location: "east", major: "science", price: "high", link: "https://www.eastscience.edu" },
];

// Render college list
function renderColleges(filteredColleges) {
    const collegeList = document.getElementById("collegeList");
    collegeList.innerHTML = ""; // Clear current list

    filteredColleges.forEach(college => {
        const card = document.createElement("div");
        card.className = "college-card";
        card.innerHTML = `
            <h3>${college.name}</h3>
            <p>Major: ${college.major}</p>
            <p>Location: ${college.location}</p>
            <p>Price: ${college.price}</p>
            <button onclick="viewTour('${college.link}')">View Tour</button>
            <button onclick="bookTour()">Book Tour</button>
        `;
        collegeList.appendChild(card);
    });
}

// Handle search bar input
function searchColleges() {
    const search = document.getElementById("searchBar").value.toLowerCase();
    const filtered = colleges.filter(college => college.name.toLowerCase().includes(search));
    renderColleges(filtered);
}

// Handle filtering
function filterColleges() {
    const type = document.getElementById("type").value;
    const location = document.getElementById("location").value;
    const major = document.getElementById("major").value;
    const price = document.getElementById("price").value;

    const filtered = colleges.filter(college => {
        return (type === "all" || college.type === type) &&
               (location === "all" || college.location === location) &&
               (major === "all" || college.major === major) &&
               (price === "all" || college.price === price);
    });
    renderColleges(filtered);
}

// View Tour Link
function viewTour(link) {
    window.open(link, "_blank");
}

// Book Tour
function bookTour() {
    alert("Tour booked! Please proceed with payment.");
    showPayment();
}

// Show Payment Section
function showPayment() {
    document.getElementById("paymentSection").style.display = "block";
}

// Simulate Payment Processing
function processPayment() {
    alert("Payment successful! Your tour is booked.");
}

// Show Login Form
function showLogin() {
    // Placeholder logic for login
    currentUser = "user"; // Simulate user login
    document.getElementById("authSection").style.display = "none";
    document.getElementById("filterSection").style.display = "block";
    renderColleges(colleges); // Render colleges after login
}

// Show Signup Form
function showSignup() {
    // Placeholder logic for sign-up
    currentUser = "user"; // Simulate user sign-up
    document.getElementById("authSection").style.display = "none";
    document.getElementById("filterSection").style.display = "block";
    renderColleges(colleges); // Render colleges after sign-up
}

// Admin Dashboard (for adding new colleges)
function addNewCollege() {
    const newCollege = {
        name: "New College",
        type: "private",
        location: "south",
        major: "engineering",
        price: "medium",
        link: "https://www.newcollege.edu"
    };
    colleges.push(newCollege); // Add college to list
    alert("New college added!");
    renderColleges(colleges); // Re-render the college list
}
