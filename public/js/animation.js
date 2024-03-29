let toggled = true;
window.handleDropDownMenu = handleDropDownMenu = () => {
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

ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true,
});

gsap.from(".seperatorLine", {
  duration: 2,
  x: "-50vw",
  ease: "ease-in",
  scrollTrigger: {
    trigger: ".scrollTigger",
    start: "top 100%",
  },
});

const footerAnimation = gsap.from(".loadInLineFooter", {
  duration: 1,
  width: "0",
  ease: "ease-in",

  scrollTrigger: {
    trigger: ".scrollTiggerFooter",
    start: "top 80%",
    end: "bottom bottom",
    once: true,
    toggleActions: "restart none none none",
    onLeaveBack: (self) => self.disable(),
  },
});

if (
  window.innerHeight > 1200 &&
  document.querySelector('[data-page-name="home"]')
) {
  footerAnimation.resume();
}

document
  .getElementsByClassName("langSelector")[0]
  .addEventListener("click", () => handleDropDownMenu());
