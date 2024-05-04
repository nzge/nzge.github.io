// Sample array of projects with image, title, and description properties
let projects = [
  { 
      title: 'Capstone Robot', 
      date: new Date('2022-01-15'), 
      image: '../images/neon_cat.gif', 
      description: 'Description of Project A' 
  },
  { 
      title: 'Model Rocket', 
      date: new Date('2022-03-10'), 
      image: '../images/neon_cat.gif', 
      description: 'Description of Project B' 
  },
  { 
      title: 'Mini Solar Powered Car', 
      date: new Date('2021-12-05'), 
      image: '../images/neon_cat.gif',
      description: 'Description of Project C' 
  }
];

// Function to display projects
function displayProjects(projects) {
  const projectContainer = document.getElementById('projectContainer');
  projectContainer.innerHTML = ''; // Clear previous content
  
  projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');

      const titleElement = document.createElement('h2');
      titleElement.textContent = project.title;
      projectElement.appendChild(titleElement);

      const imageElement = document.createElement('img');
      imageElement.src = project.image;
      projectElement.appendChild(imageElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = project.description;
      projectElement.appendChild(descriptionElement);

      projectContainer.appendChild(projectElement);
  });
}


// Function to sort projects
function sortProjects() {
  const sortCriteria = document.getElementById('sortDropdown').value;

  if (sortCriteria === 'date') {
      projects.sort((a, b) => b.date - a.date); // Sort by date
  } else if (sortCriteria === 'name') {
      projects.sort((a, b) => a.title.localeCompare(b.title)); // Sort by name
  }

  displayProjects(projects);
}


// Function to sort projects by date
function sortByDate() {
  const sortedProjects = projects.slice().sort((a, b) => b.date - a.date); // Make a copy before sorting
  displayProjects(sortedProjects);
}

// Function to sort projects alphabetically by title
function sortByName() {
  const sortedProjects = projects.slice().sort((a, b) => a.title.localeCompare(b.title)); // Make a copy before sorting
  displayProjects(sortedProjects);
}

// Initial display of projects
displayProjects(projects);
