let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => navbar.classList.toggle('active'));

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.remove('active')
    }
})

// === type js =====
var typed = new Typed('.textTyped', {
    strings: ['Data Analyst', 'B.I Analyst', 'Financial Analyst'],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true
});

// AOS animation
AOS.init();






// Function for footer
 const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Function to get Email

function sendMail(){
    let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("message").value,
    }
    emailjs.send("service_hw25rf8","template_g4ylbds",parms).then(alert("Email Sent!"))
}










