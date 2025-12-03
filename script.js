// Dummy course data
const courses = [
    {
        id: 1,
        title: "Web Development",
        description: "Learn HTML, CSS, JavaScript and build real websites.",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 2,
        title: "Python Programming",
        description: "Master Python from basics to advanced.",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 3,
        title: "Data Science",
        description: "Learn data analysis, AI, and ML.",
        image: "https://via.placeholder.com/300x200"
    }
];

// Display Courses on index.html
if (document.getElementById("courseList")) {
    let container = document.getElementById("courseList");

    courses.forEach(course => {
        container.innerHTML += `
            <div class="course-card">
                <img src="${course.image}" alt="">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <button class="btn" onclick="viewCourse(${course.id})">View Details</button>
            </div>
        `;
    });
}

// Navigate to course.html
function viewCourse(id) {
    localStorage.setItem("selectedCourse", id);
    window.location.href = "course.html";
}

// Display Course Details on course.html
if (document.getElementById("courseTitle")) {
    let courseId = localStorage.getItem("selectedCourse");
    let course = courses.find(c => c.id == courseId);

    document.getElementById("courseTitle").textContent = course.title;
    document.getElementById("courseDescription").textContent = course.description;

    document.getElementById("enrollBtn").onclick = function() {
        enrollCourse(courseId);
    };
}

// Enroll Function
function enrollCourse(id) {
    let enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    if (!enrolled.includes(id)) {
        enrolled.push(id);
        localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
        alert("You have successfully enrolled!");
    } else {
        alert("You are already enrolled in this course!");
    }
}
