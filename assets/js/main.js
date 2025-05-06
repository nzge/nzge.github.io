//At the document ready event
document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});

//also at the window load event
jQuery(window).on('load', function(){
  new WOW().init(); 
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