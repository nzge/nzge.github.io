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

class Slideshow {
  constructor(slidesData, targetId) {
    this.slidesData = slidesData;
    this.container = document.getElementById(targetId);
    if (!this.container || !Array.isArray(slidesData)) return;

    this.slideIndex = 1;
    this.render();
    this.attachEventListeners();
    this.showSlides(this.slideIndex);
  }

  render() {
    // Create slideshow container
    this.slideshowEl = document.createElement('div');
    this.slideshowEl.className = 'slideshow-container';

    // Create slides
    this.slides = this.slidesData.map((slide, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'mySlides fade';

      const numberText = document.createElement('div');
      numberText.className = 'numbertext';
      numberText.textContent = `${index + 1} / ${this.slidesData.length}`;

      const img = document.createElement('img');
      img.src = slide.src;
      img.style.width = '100%';

      const caption = document.createElement('div');
      caption.className = 'text';
      caption.textContent = slide.caption;

      slideDiv.appendChild(numberText);
      slideDiv.appendChild(img);
      slideDiv.appendChild(caption);
      this.slideshowEl.appendChild(slideDiv);

      return slideDiv;
    });

    // Prev/Next buttons
    const prevBtn = document.createElement('a');
    prevBtn.className = 'prev';
    prevBtn.innerHTML = '&#10094;';
    prevBtn.addEventListener('click', () => this.changeSlide(-1));

    const nextBtn = document.createElement('a');
    nextBtn.className = 'next';
    nextBtn.innerHTML = '&#10095;';
    nextBtn.addEventListener('click', () => this.changeSlide(1));

    this.slideshowEl.appendChild(prevBtn);
    this.slideshowEl.appendChild(nextBtn);

    // Dot indicators
    this.dotWrapper = document.createElement('div');
    this.dotWrapper.className = 'dot-wrapper'; // For styling if needed
    this.dotWrapper.style.textAlign = 'center';

    this.dots = this.slidesData.map((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.addEventListener('click', () => this.setSlide(i + 1));
      this.dotWrapper.appendChild(dot);
      return dot;
    });

    // Append to container
    this.container.appendChild(this.slideshowEl);
    this.container.appendChild(document.createElement('br'));
    this.container.appendChild(this.dotWrapper);
  }

  attachEventListeners() {
    // Future enhancement: key events, auto-advance, etc.
  }

  changeSlide(n) {
    this.showSlides(this.slideIndex + n);
  }

  setSlide(n) {
    this.showSlides(n);
  }

  showSlides(n) {
    if (n > this.slides.length) n = 1;
    if (n < 1) n = this.slides.length;

    this.slideIndex = n;

    this.slides.forEach((slide, i) => {
      slide.style.display = i === n - 1 ? 'block' : 'none';
    });

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === n - 1);
    });
  }
}

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

///////////////////////////////

// gifs
document.addEventListener('DOMContentLoaded', () => {

  const gifFolder = "/assets/media/!misc/gifs/";
  const gifFiles = [
    "bigbangblastermaster.gif",
    "burningredblackbeamshot.gif",
    "burningunicorn.gif",
    "godbuster.gif",
    "gundammasterflame.gif",
    "gundammaxtermegablasterblue.gif",
    "masterflammablewing.gif",
    "roseflamerulesaber.gif",
    "roseflamesabermode.gif",
    "shiningbluelightwaves.gif",
    "shiningtwilight.gif",
    "zetagundamforwardwalk.gif"
  ];

  const randomGif = gifFiles[Math.floor(Math.random() * gifFiles.length)];
  const gifPath = gifFolder + randomGif;

  document.getElementById("gif-left").src = gifPath;
  document.getElementById("gif-right").src = gifPath;
});

///////////////////////////////

//music
document.addEventListener('DOMContentLoaded', () => {

});
