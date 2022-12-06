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
  duration: 6,
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

gsap.from(".loadInLineHeader", {
  duration: 15,
  width: "0",
  ease: "ease-in",
  scrollTrigger: {
    trigger: ".scrollTigger",
    start: "top 10%",
    toggleActions: "restart none none reset",
  },
});

gsap.from(".loadInLineFooter", {
  duration: 1.5,
  width: "0",
  ease: "ease-in",
  scrollTrigger: {
    trigger: ".scrollTiggerFooter",
    start: "top 100%",
    toggleActions: "play none none reverse",
  },
});

document
  .getElementsByClassName("langSelector")[0]
  .addEventListener("click", () => handleDropDownMenu());

document
  .getElementById("hamburgerMenu")
  .addEventListener("click", () => handleDropDownMenu());
