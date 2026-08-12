// WOW.js must be initialised EXACTLY ONCE per page.
//
// This previously ran on both DOMContentLoaded and window.load, creating two
// WOW instances. Each instance attaches its own scroll listener and its own
// MutationObserver over the same .wow elements, so they fight: instance A
// reveals a box, instance B's sync pass resets it back to hidden, A reveals it
// again. That ping-pong is the stuttering multi-replay seen on /work.
//
// The guard also covers the case where this script is included twice.
document.addEventListener("DOMContentLoaded", function () {
  if (window.__wowInitialised) return;
  if (typeof WOW === "undefined") return;

  window.__wowInitialised = true;

  // Mirror data-wow-duration into animate.css's own --animate-duration
  // custom property on each element.
  //
  // WOW applies the duration as an inline style, but animate.css declares
  //   @media (prefers-reduced-motion: reduce), print {
  //     .animate__animated { animation-duration: 1ms !important }
  //   }
  // and !important in a stylesheet outranks a normal inline style, so the
  // authored duration was being discarded down to 1ms. The paired CSS rule
  // in _sass/theme.scss reinstates it, and reads this property so each
  // element keeps its own stated duration rather than a single global value.
  document.querySelectorAll('.wow[data-wow-duration]').forEach(function (el) {
    el.style.setProperty('--animate-duration', el.getAttribute('data-wow-duration'));
  });

  new WOW({
    live: false,  // no MutationObserver: the project grid re-appends the same
                  // nodes when sorted, which WOW would otherwise treat as new
                  // elements and re-animate.

    // This site uses animate.css v4, whose class is `animate__animated`.
    // WOW still defaults to the v3 name `animated`, and on animationend it
    // runs `className.replace(animateClass, "")`. String.replace hits the
    // FIRST substring match -- which lives inside `animate__animated` -- so
    // it mangled that class to `animate__`, stripping the animation-duration
    // and fill-mode it carries. The resulting property change restarted the
    // animation, which fired animationend again: the flicker loop on the
    // footer and every other .wow element.
    animateClass: 'animate__animated',

    // Belt and braces: nothing should mutate classes once the animation has
    // played. Elements are meant to appear exactly once on scroll.
    resetAnimation: false
  }).init();
});


///////////////////////////////

// JavaScript function to go back to the previous page
function goBack() {
  window.history.back();
}

///////////////////////////////

// Function to dynamically sort the projects based on the selected option
function sortProjects() {
  const sortCriteria = document.getElementById('sortDropdown').value;
  const projectsContainer = document.querySelector('#projects');
  const projects = Array.from(projectsContainer.getElementsByClassName('project'));

  let sortedProjects;

  // Sorting logic based on the selected criteria
  if (sortCriteria === 'date-newest') {
    sortedProjects = projects.sort((a, b) => {
      const dateA = new Date(a.getAttribute('data-date'));
      const dateB = new Date(b.getAttribute('data-date'));
      return dateB - dateA; // Newest first
    });
  } else if (sortCriteria === 'date-oldest') {
    sortedProjects = projects.sort((a, b) => {
      const dateA = new Date(a.getAttribute('data-date'));
      const dateB = new Date(b.getAttribute('data-date'));
      return dateA - dateB; // Oldest first
    });
  } else if (sortCriteria === 'name-first') {
    sortedProjects = projects.sort((a, b) => {
      const titleA = a.getAttribute('data-title').toLowerCase();
      const titleB = b.getAttribute('data-title').toLowerCase();
      return titleA.localeCompare(titleB); // A-Z
    });
  } else if (sortCriteria === 'name-last') {
    sortedProjects = projects.sort((a, b) => {
      const titleA = a.getAttribute('data-title').toLowerCase();
      const titleB = b.getAttribute('data-title').toLowerCase();
      return titleB.localeCompare(titleA); // Z-A
    });
  }

  // Clear the existing content and append the sorted projects
  projectsContainer.innerHTML = '';
  sortedProjects.forEach(project => {
    projectsContainer.appendChild(project);
  });
}

///////////////////////////////

// Toggle Collapse for Code Blocks
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("highlight").forEach(block => {
    // Create a toggle button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Code";
    toggleButton.style.marginBottom = "5px";
    toggleButton.style.background = "#44475a";
    toggleButton.style.color = "#f8f8f2";
    toggleButton.style.border = "none";
    toggleButton.style.padding = "5px 10px";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";

    block.parentNode.insertBefore(toggleButton, block);

    toggleButton.addEventListener("click", () => {
      block.classList.toggle("collapsed");
    });
  });
});

///////////////////////////////

//back to top button
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('backToTop');
  //Show button when scrolled down
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  //bring back to top
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
