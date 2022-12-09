let toggled = true;
const handleDropDownMenu = () => {
  if (toggled) {
    gsap.to("#dropdownMenu", {
      y: -50,
      duration: 1,
    });
    gsap.to(".menuOption", {
      y: 0,
      delay: 1,
      stagger: 0.1,
    });

    toggled = false;
  } else {
    gsap.to("#dropdownMenu", {
      y: -1000,
    });
    gsap.to(".menuOption", {
      y: -50,
    });
    toggled = true;
  }
};

gsap.registerPlugin(ScrollTrigger);

gsap.from(".seperatorLine", {
  duration: 2,
  x: "-50vw",
  ease: "ease-in",
  scrollTrigger: {
    trigger: ".scrollTigger",
    start: "top 100%",
  },
});

gsap.from(".seperatorLineContact", {
  duration: 3,
  width: 0,
  ease: "ease-in",
  scrollTrigger: {
    trigger: ".scrollTiggerContact",
    start: "top 90%",
  },
});

const scrollTriggerFooter = document.querySelector(".scrollTiggerFooter");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(".loadInLineFooter", {
          duration: 1.5,
          width: 110,
          ease: "ease-in",
          onComplete: () => {
            observer.unobserve(scrollTriggerFooter);
            document.querySelector(".loadInLineFooter").style.width = "110px";
          },
        });
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  }
);

observer.observe(scrollTriggerFooter);

document
  .getElementsByClassName("langSelector")[0]
  .addEventListener("click", () => handleDropDownMenu());

document
  .getElementById("hamburgerMenu")
  .addEventListener("click", () => handleDropDownMenu());
