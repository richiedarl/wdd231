const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true, type: "wdd" },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true, type: "wdd" },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false, type: "wdd" },
  { code: "CSE 121", name: "Python Programming", credits: 3, completed: false, type: "cse" }
];

const courseList = document.getElementById("course-list");
const creditSpan = document.getElementById("totalCredits");

function displayCourses(list) {
  courseList.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");

    if (course.completed) {
      div.classList.add("completed");
    }

    div.textContent = `${course.code} - ${course.name}`;
    courseList.appendChild(div);
  });

  const totalCredits = list.reduce((sum, c) => sum + c.credits, 0);
  creditSpan.textContent = totalCredits;
}

displayCourses(courses);

document.querySelectorAll(".filters button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    if (filter === "all") {
      displayCourses(courses);
    } else {
      displayCourses(courses.filter(c => c.type === filter));
    }
  });
});
