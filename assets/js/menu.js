window.addEventListener('load', function () {
  // Setup
  const t1 = gsap.timeline({ paused: true }); // Create paused timeline

  let hamburger = document.getElementById("hamburger");
  const toggleBtn = document.getElementById("toggle-btn");

  // Set initial state (optional, but helps to reset on page load)
  gsap.set(".menu", { visibility: "hidden" });
  gsap.set(hamburger.querySelector("span"), { background: "#e5e3dc" });

  // Event listener for the toggle button
  toggleBtn.onclick = function(e) {
    // Toggle hamburger active state and play animation
    hamburger.classList.toggle("active");
    t1.reversed(!t1.reversed()); // Play the animation (reverse if already playing)
  };

  function revealMenu() {
    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
    const power2 = "power2.inOut";
    const power4 = "power4.inOut";

    // Animations for hamburger and span
    t1.to("#hamburger", 1.25, {
      marginTop: "-5px",
      x: -40,
      y: 40,
      ease: power4,
    });

    t1.to("#hamburger span", 1, {
      background: "#e2e2dc",  // Background color change for the span
      ease: power2,
    }, "<");

    // You would handle the pseudo-element animations using a CSS class toggle
    // for example, this would toggle the state of the pseudo-element when the active class is added
    t1.to(".hamburger.active span::before", 1, {
      background: "#e2e2dc",  // Change the pseudo-element background (if you toggle classes)
      ease: power2,
    }, "<");

    // You can also animate other elements, like the button or menu items, here
    // For example, animate buttons with a similar approach
    t1.to(".btn", 1.25, {
      x: -40,
      y: 40,
      width: "140px",
      height: "140px",
      border: "1px solid #e2e2dc",
      ease: power4,
    }, "<");

    t1.to(path, 0,8, {
      attr: { d: start }, // Set the initial path for the SVG
      ease: power2.easeIn,
    }, "<").to(path, 0.8,{
      attr: { d: end }, // Animate to the final path
      ease: power2.easeIn,}, "-0.5");
      
    t1.to(".menu", 1, {
      visibility: "visible",
    }, "-=0.5");
    
    t1.to(".menu-item > a", 1, {
      top: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.5,
      }
    }, "-=1").reverse();

  }
    
  

  revealMenu()

});
