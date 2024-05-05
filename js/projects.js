
// Define project arrays for each webpage
const classProjects = [
  { 
      title: 'Capstone Robot', 
      date: new Date('2024-01-15'), 
      image: '../images/capstone_robot.png', 
      description: 'Description of Home Project 1' 
  },
  { 
      title: 'Model Rocket', 
      date: new Date('2023-03-10'), 
      image: '../images/model_rocket.png', 
      description: 'Description of Home Project 2' 
  },
  { 
    title: 'Solar Powered Mini Car', 
    date: new Date('2022-03-10'), 
    image: '../images/solar_car.PNG', 
    description: 'Description of Home Project 2' 
}
];

const racingProjects = [
  { 
      title: 'CV Boot Casting', 
      date: new Date('2022-02-20'), 
      image: '../images/CV_boot.PNG',  
      description: 'Description of Project 1' 
  },
  { 
      title: 'Tire Temperature Sensor Mount', 
      date: new Date('2022-04-05'), 
      image: '../images/temp_sensor.PNG', 
      description: 'Description of Project 2' 
  },
  { 
      title: 'Aerofoil', 
      date: new Date('2022-04-05'), 
      image: '../images/temp_sensor.PNG', 
      description: 'Description of Project 3' 
  }
];

const personalProjects = [
  { 
      title: 'Macropad', 
      date: new Date('2022-02-20'), 
      image: '../images/neon_cat.gif',  
      description: 'Description of Projects Project 1' 
  },
  { 
      title: 'Projects Project 2', 
      date: new Date('2022-04-05'), 
      image: '../images/neon_cat.gif', 
      description: 'Description of Projects Project 2' 
  }
];

// Function to display projects based on current webpage
function displayProjects() {
  let projectContainer = document.getElementById('projectContainer');
  projectContainer.innerHTML = ''; // Clear previous content
  let projects = [];

  // Determine which project array to use based on the current webpage
  if (document.title === 'Nathan Ge - class projects') {
      projects = classProjects;
  } else if (document.title === 'Nathan Ge - racing projects') {
      projects = racingProjects;
  }
  else if (document.title === 'Nathan Ge - personal projects') {
    projects = personalProjects;
  }

  // Generate HTML content for each project and append it to the project container
  projects.forEach(project => {
      let projectElement = document.createElement('div');
      projectElement.innerHTML = `
          <h2>${project.title}</h2>
          <img src="${project.image}" alt="${project.title}">
          <p>${project.description}</p>
      `;
      projectContainer.appendChild(projectElement);
  });
}



// Function to sort projects
function sortProjects() {
  const sortCriteria = document.getElementById('sortDropdown').value;
  let projects = [];

  // Determine which project array to use based on the current webpage
  if (document.title === 'Nathan Ge - class projects') {
      projects = classProjects;
  } else if (document.title === 'Nathan Ge - racing projects') {
      projects = racingProjects;
  }
  else if (document.title === 'Nathan Ge - personal projects') {
    projects = personalProjects;
  }

  if (sortCriteria === 'date') {
      projects.sort((a, b) => b.date - a.date); // Sort by date
  } else if (sortCriteria === 'name') {
      projects.sort((a, b) => a.title.localeCompare(b.title)); // Sort by name
  }

  displayProjects(); // Call displayProjects() without passing any arguments
}

// Call the displayProjects function when the page is loaded
window.onload = displayProjects;



// // Function to display projects
// function displayProjects(projects) {
//   const projectContainer = document.getElementById('projectContainer');
//   projectContainer.innerHTML = ''; // Clear previous content
  
//   projects.forEach(project => {
//       const projectElement = document.createElement('div');
//       projectElement.classList.add('project');

//       const titleElement = document.createElement('h2');
//       titleElement.textContent = project.title;
//       projectElement.appendChild(titleElement);

//       const imageElement = document.createElement('img');
//       imageElement.src = project.image;
//       projectElement.appendChild(imageElement);

//       const descriptionElement = document.createElement('p');
//       descriptionElement.textContent = project.description;
//       projectElement.appendChild(descriptionElement);

//       projectContainer.appendChild(projectElement);
//   });
// }
