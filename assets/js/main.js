// Add an effect to header on scrolling
let header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  header.classList.toggle("sticky", window.scrollY > 100);
});
// Show nav menu in mobile
const menuIcon = document.querySelector("header .nav-menu");
let nav = document.querySelector("header nav");
menuIcon.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    menuIcon.setAttribute("name", "close-outline");
  } else {
    menuIcon.setAttribute("name", "menu-outline");
  }
});

// Add active class to nav links
const navLinks = Array.from(
  document.querySelectorAll("header nav .nav-link , header .btns > a")
);
navLinks.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    nav.classList.remove("active");
    menuIcon.setAttribute("name", "menu-outline");
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// Fac Section  Accordion
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Show header buttons on scrolling for small devices

const navMobileBtns = document.querySelector(".mobile-btns");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 220) {
    header.classList.add("mobile");
    navMobileBtns.classList.add("mobile");
  } else {
    header.classList.remove("mobile");
    navMobileBtns.classList.remove("mobile");
  }
});

// Flip services card on click event
const servicesCards = Array.from(
  document.querySelectorAll("#services .services-items .flip-card")
);
servicesCards.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    servicesCards.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  });
});

// Scroll to fast quote on i click on the button

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 600) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(li => {
        li.classList.remove('active');
        document.querySelector('header nav .nav-link[href*= ' + current + ']').classList.add('active');
    });
});

// Scroll to top button 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("scrollToTopBtn").onclick = function() {
  scrollToTop();
};

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
