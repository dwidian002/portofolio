//toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // stiky navbar

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon and navbar when click navbar link (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//scroll reveal

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .resume-box, .heading:not(.resume-detail .heading)", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, project-box, .content form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, about-content", { origin: "right" });

//typed js

const typed = new Typed(".multiple-text", {
  strings: ["Student of Informatics", "Web Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//resume

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {

    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');

    resumeDetails.forEach(detail => {
        detail.classList.remove('active');
      });
    resumeDetails[idx].classList.add('active');


  });
});

// Modal

// Modal
class ModalHandler {
  constructor() {
      this.initializeModals();
  }

  initializeModals() {
      const modalTriggers = document.querySelectorAll('[data-modal]');
      
      modalTriggers.forEach(trigger => {
          const modalId = trigger.dataset.modal;
          const modal = document.getElementById(modalId);
          const closeBtn = modal.querySelector('.close');

          trigger.onclick = (e) => {
              e.preventDefault();
              this.openModal(modal);
          };

          closeBtn.onclick = () => {
              this.closeModal(modal);
          };

          modal.onclick = (event) => {
              if (event.target === modal) {
                  this.closeModal(modal);
              }
          };
      });

      document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
              const openModal = document.querySelector('.modal[style*="display: block"]');
              if (openModal) {
                  this.closeModal(openModal);
              }
          }
      });
  }

  openModal(modal) {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }

  closeModal(modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ModalHandler();
});