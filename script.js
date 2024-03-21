document.addEventListener("scroll", function () {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;

  const progressElement = document.getElementById("scroll-progress");

  progressElement.style.width = scrolledPercentage + "%";

  if (scrolledPercentage > 20) {
    progressElement.style.position = "fixed";
    progressElement.style.left = "0";
    progressElement.style.top = "0";
  } else {
    progressElement.style.position = "sticky";
    progressElement.style.left = null;
    progressElement.style.top = null;
  }
});

// cookie bar

document.addEventListener("DOMContentLoaded", function () {
  const cookieBar = document.getElementById("cookie-bar");
  const acceptCookiesBtn = document.getElementById("accept-cookies");
  const closeCookieBarBtn = document.getElementById("close-cookie-bar");

  // Check if user has accepted cookies before
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (cookiesAccepted) {
    cookieBar.style.display = "none";
  } else {
    cookieBar.classList.add("show");
  }

  // Event listener for accepting cookies
  acceptCookiesBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", true);
    hideCookieBar();
  });

  // Event listener for closing cookie bar
  closeCookieBarBtn.addEventListener("click", function () {
    hideCookieBar();
  });

  // Function to hide cookie bar by sliding it out from right to left
  function hideCookieBar() {
    cookieBar.style.animation = "slideOutLeft 1s forwards";
    setTimeout(function () {
      cookieBar.style.display = "none"; // Hide cookie bar after animation
    }, 500);
  }
});

//

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function pauseAllAudio() {
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach((audio) => {
    audio.pause();
  });
}
// Function to handle scroll events and play/pause audio accordingly
function handleScroll() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    if (isElementInViewport(section)) {
      pauseAllAudio();
    }
  });
}

window.addEventListener("scroll", handleScroll);

handleScroll();

// Set up an Intersection Observer to trigger the function on scroll
const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
observer.observe(document.getElementById("recent-works"));

// Helper function to debounce scroll event
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// Detect scroll event with debounce
window.addEventListener(
  "scroll",
  debounce(function () {
    // Get the projects div and calculate the scroll percentage
    var projectsDiv = document.querySelector(".image-container");
    var rotateImg = document.querySelector(".rotating-image");
    var scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    // Calculate the offset for the images
    var offset = -scrollPercentage * 50; // Adjust the factor as needed

    // Apply the offset to the images with smooth scrolling
    projectsDiv.style.transform = `translateX(${offset}px)`;

    // Calculate the rotation angle based on the scroll position
    var rotationSpeedFactor = 0.01; // Adjust this value to control rotation speed
    var rotationAngle = scrollPercentage * 360 * rotationSpeedFactor;

    // Apply rotation to the image
    rotateImg.style.transform = `rotate(${rotationAngle}deg)`;
  }, 10)
);

// Debounce function to limit the frequency of scroll event handling
function debounce(func, wait) {
  var timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

// Adjust .projects div width to match total width of images
window.addEventListener("load", function () {
  var projectsDiv = document.querySelector(".projects");
  var images = projectsDiv.querySelectorAll("img");
  var totalWidth = 0;

  images.forEach(function (img) {
    totalWidth += img.offsetWidth + 20;
  });

  projectsDiv.style.width = totalWidth + "px";
});

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// window.addEventListener("scroll", function () {
// 	var navbar = document.querySelector(".column");

// 	if (isElementInViewport(navbar)) {
// 		// Apply the entrance animation
// 		navbar.style.opacity = 0;
// 		navbar.style.transform = "translateY(40px)";

// 		setTimeout(function () {
// 			navbar.style.transition = "opacity 1s ease, transform 1s ease";
// 			navbar.style.opacity = 1;
// 			navbar.style.transform = "translateY(0)";
// 		}, 0); // No delay, animation starts immediately
// 	}
// });
// window.addEventListener("scroll", function () {
// 	var navbar = document.querySelector(".row");

// 	if (isElementInViewport(navbar)) {
// 		// Apply the entrance animation
// 		navbar.style.opacity = 0;
// 		navbar.style.transform = "translateY(50px)";

// 		setTimeout(function () {
// 			navbar.style.transition = "opacity 1s ease, transform 1s ease";
// 			navbar.style.opacity = 1;
// 			navbar.style.transform = "translateY(0)";
// 		}, 0); // No delay, animation starts immediately
// 	}
// });
// window.addEventListener("scroll", function () {
// 	var navbar = document.querySelector(".pink-column");

// 	if (isElementInViewport(navbar)) {
// 		// Apply the entrance animation
// 		navbar.style.opacity = 0;
// 		navbar.style.transform = "translateY(50px)";

// 		setTimeout(function () {
// 			navbar.style.transition = "opacity 1s ease, transform 1s ease";
// 			navbar.style.opacity = 1;
// 			navbar.style.transform = "translateY(0)";
// 		}, 0); // No delay, animation starts immediately
// 	}
// });
// window.addEventListener("scroll", function () {
// 	var navbar = document.querySelector(".blue-container");

// 	if (isElementInViewport(navbar)) {
// 		// Apply the entrance animation
// 		navbar.style.opacity = 0;
// 		navbar.style.transform = "translateY(50px)";

// 		setTimeout(function () {
// 			navbar.style.transition = "opacity 1s ease, transform 1s ease";
// 			navbar.style.opacity = 1;
// 			navbar.style.transform = "translateY(0)";
// 		}, 0); // No delay, animation starts immediately
// 	}
// });

// window.addEventListener("scroll", function () {
// 	var navbar = document.querySelector(".six-grid");

// 	if (isElementInViewport(navbar)) {
// 		// Apply the entrance animation
// 		navbar.style.opacity = 0;
// 		navbar.style.transform = "translateY(20px)";

// 		setTimeout(function () {
// 			navbar.style.transition = "opacity 1s ease, transform 1s ease";
// 			navbar.style.opacity = 1;
// 			navbar.style.transform = "translateY(0)";
// 		}, 0);
// 	}
// });

// window.addEventListener("scroll", function () {
// 	var navbar = document.querySelector(".recent-works img");

// 	if (isElementInViewport(navbar)) {
// 		// Apply the entrance animation
// 		navbar.style.opacity = 1;
// 		navbar.style.transform = "translateY(-50px)";

// 		setTimeout(function () {
// 			navbar.style.transition = "opacity 1s ease, transform 1s ease";
// 			navbar.style.opacity = 1;
// 			navbar.style.transform = "translateY(0)";
// 		}, 0);
// 	}
// });
// window.addEventListener("scroll", function () {
// 	var navbar = document.querySelector(".recent-works h1");

// 	if (isElementInViewport(navbar)) {
// 		// Apply the entrance animation
// 		navbar.style.opacity = 1;
// 		navbar.style.transform = "translateY(20px)";

// 		setTimeout(function () {
// 			navbar.style.transition = "opacity 1s ease, transform 2s ease";
// 			navbar.style.opacity = 1;
// 			navbar.style.transform = "translateY(0)";
// 		}, 100);
// 	}
// });
// window.addEventListener("scroll", function () {
// 	var navbar = document.querySelector(".projects-grid ");

// 	if (isElementInViewport(navbar)) {
// 		// Apply the entrance animation
// 		navbar.style.opacity = 1;
// 		navbar.style.transform = "translateY(50px)";

// 		setTimeout(function () {
// 			navbar.style.transition = "opacity 1s ease, transform 1s ease";
// 			navbar.style.opacity = 1;
// 			navbar.style.transform = "translateY(0)";
// 		}, 50);
// 	}
// });

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const answer = this.parentElement.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        this.textContent = "▼";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        this.textContent = "▲";
      }
    });
  });
});

//************EDITED************EDITED*************EDITED***********//
//************EDITED************EDITED*************EDITED***********//

//Navbar Show/Hide
var menu = document.getElementById("menu"),
  navBar = document.getElementById("navbar-mobile");
menu.addEventListener("click", () => {
  navBar.classList.toggle("navbar-show");
});

//Close Menubar when Navbar links are clicked
var menuLinks = document.querySelectorAll(".navbar-mobile li");
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    navBar.classList.toggle("navbar-show");
  });
});

window.addEventListener("load", function () {
  const cursorDot = document.querySelector(".cursor-dot");
  // const cursorOutline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // const animation = cursorOutline.animate(
    // 	[
    // 		{ left: `${posX}px`, top: `${posY}px` }
    // 	],
    // 	{
    // 		duration: 500,
    // 		fill: "forwards"
    // 	}
    // );
    // animation.onfinish = function () {
    // };
  });
});

// For Modal
document.addEventListener("DOMContentLoaded", function () {
  const burgerOpenElements = document.querySelectorAll("#burger-open");

  burgerOpenElements.forEach(function (element) {
    element.addEventListener("click", function () {
      // Check if the device width is smaller or equal to 768px (adjust as needed)
      if (window.innerWidth <= 768) {
        // Open the modal for smaller devices
        $(".bottom-bar").css("display", "block");
        $(".bottom-sheet-wrapper").addClass("show-modal");
      } else {
        // Open the sidebar for larger devices
        const meny = document.getElementById("meny");
        meny.classList.toggle("open");
      }
    });
  });

  $(".close, .backdrop").click(function () {
    $(".bottom-sheet-wrapper").removeClass("show-modal");
    $(".bottom-bar").css("display", "none");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("burger-close");
  const meny = document.getElementById("meny");

  closeBtn.addEventListener("click", function () {
    meny.classList.remove("open");
  });
});

// Email Form

function sendMail() {
  var email = document.getElementById("email_id").value;
  var message = document.getElementById("message").value;

  // Simple form validation
  if (!email.trim() || !message.trim()) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill out both email and message fields.",
    });
    return;
  }

  var params = {
    email_id: email,
    message: message,
  };

  emailjs
    .send("service_46rv23h", "template_3s6151r", params)
    .then(function (res) {
      if (res.status === 200) {
        // Clear the input fields
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thank you for contacting. We will get back to you soon",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error occurred while sending your message. Please try again later.",
        });
      }
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while sending your message. Please try again later.",
      });
    });
}

function sendMail() {
  var email = document.querySelector(".bottom-bar #email_id").value;
  var message = document.querySelector(".bottom-bar #message").value;

  // Simple form validation
  if (!email.trim() || !message.trim()) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill out both email and message fields.",
    });
    return;
  }

  var params = {
    email_id: email,
    message: message,
  };

  emailjs
    .send("service_46rv23h", "template_3s6151r", params)
    .then(function (res) {
      if (res.status === 200) {
        // Clear the input fields
        document.querySelector(".bottom-bar #email_id").value = "";
        document.querySelector(".bottom-bar #message").value = "";

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thank you for contacting. We will get back to you soon",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error occurred while sending your message. Please try again later.",
        });
      }
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while sending your message. Please try again later.",
      });
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("reload-image");
  image.addEventListener("click", function () {
    location.reload();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("jsons/blogs.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((blog) => {
        const card = document.getElementById(`blog-${blog.id}`);
        const titleElement = card.querySelector(".card__title");
        const contentElement = card.querySelector(".card__content");
        const imageElement = card.querySelector(".card__image img");

        titleElement.textContent = blog.title;
        contentElement.textContent = blog.sections[0].content;
        imageElement.src = blog.image;
        imageElement.alt = blog.title;

        // Check if there is a link field in any section
        blog.sections.forEach((section) => {
          if (section.link) {
            const link = document.createElement("a");
            link.href = section.link;
            link.textContent = "Click to visit";
            link.style.textDecoration = "none";
            link.style.color = "blue";
            const linkContainer = document.createElement("div");
            linkContainer.appendChild(link);
            contentElement.appendChild(linkContainer);
          }
        });

        titleElement.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = `blog.html?id=${blog.id}`;
        });
      });
    })
    .catch((error) => console.error("Error fetching blog data:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  var footerDiv = document.querySelector(".footer-div");
  var footerH1 = document.getElementById("footer-h1");
  var footerH2 = document.getElementById("footer-h2");

  function changeBackgroundColorToWhite() {
    gsap.to(footerDiv, { backgroundColor: "white", ease: "power2.inOut" });
    gsap.to(footerH1, { color: "black", ease: "power2.inOut" });
    gsap.to(footerH2, { color: "black", ease: "power2.inOut" });
  }

  function changeBackgroundColorToBlack() {
    gsap.to(footerDiv, { backgroundColor: "black", ease: "power2.inOut" });
    gsap.to(footerH1, { color: "white", ease: "power2.inOut" });
    gsap.to(footerH2, { color: "white", ease: "power2.inOut" });
  }

  ScrollTrigger.create({
    trigger: footerDiv,
    start: "top center",
    end: "bottom center",
    onEnter: changeBackgroundColorToWhite,
    onLeaveBack: changeBackgroundColorToBlack,
  });
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
