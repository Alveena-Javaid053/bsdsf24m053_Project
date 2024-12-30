function explorecourses() {
    alert("Explore Courses from our website!Thank you!");
}


function careers() {
    alert("Discover exciting career opportunities with us!");
}


function login() {
    alert("Redirecting the login page..");
}


function join() {
    alert("Thanks for joining us!");
}
function enrollnow(){
    alert("Thank you for enrolling yourself for this course!");
}

function searchcourses() {
    
    let search = document.getElementById("searchbar").value.toLowerCase();
  
    let availableCourses = ["cyber security", "web development", "graphic designing", "shopify"];
    
   
    if (availableCourses.includes(search)) {
        alert(search.charAt(0).toUpperCase() + search.slice(1) + " is available! Kindly check our online courses!");
    } else {
        alert("Sorry, " + search+ " is not available as an online degree.");
    }
}
document.getElementById("search").addEventListener("click", searchcourses);
document.getElementById("Explore").addEventListener("click", explorecourses);
document.getElementById("career").addEventListener("click", careers);
document.getElementById("login").addEventListener("click", login);
document.getElementById("join").addEventListener("click", join);
document.getElementById("enroll").addEventListener("click", enrollnow);

