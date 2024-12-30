function explorecourses() {
    alert("Explore our wide range of courses!");
}


function careers() {
    alert("Discover exciting career opportunities with us!");
}


function login() {
    alert("Redirecting to the login page...");
}


function join() {
    alert("Start your free trial today!");
}
function enrollnow(){
    alert("Thank you for enrolling yourself for this course!");
}

document.getElementById("Explore").addEventListener("click", explorecourses);
document.getElementById("career").addEventListener("click", careers);
document.getElementById("login").addEventListener("click", login);
document.getElementById("join").addEventListener("click", join);
document.getElementById("enroll").addEventListener("click", enrollnow);

function toggleAnswer(id) {
    const answer = document.getElementById(id);
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}
