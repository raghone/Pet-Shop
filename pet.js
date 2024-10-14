const form = document.querySelector('form');


function sendEmail(fullName, email, mobile, subject, message) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "raghavananandan1111@gmail.com",
        Password: "025CF9A0A8A6607FAF44A78388E02F7E80F8",
        To: 'raghavananandan1111@gmail.com',
        From: "raghavananandan1111@gmail.com",
        Subject: subject,
        Body: `Name: ${fullName}<br>Email: ${email}<br>Mobile: ${mobile}<br>Message: ${message}`
    }).then(
        message => alert(message)
    ).catch(error => alert("Error sending email: " + error));
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = form.querySelector('input[placeholder="Full Name"]').value;
    const email = form.querySelector('input[placeholder="Email Address"]').value;
    const mobile = form.querySelector('input[placeholder="Mobile Number"]').value;
    const subject = form.querySelector('input[placeholder="Email Subject"]').value;
    const message = form.querySelector('textarea[placeholder="Your Message"]').value;


    sendEmail(fullName, email, mobile, subject, message);
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}



