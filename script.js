// DOM Elements
const mobileMenuBtn = document.getElementById('menu-toggle');
const mobileNavbar = document.querySelector('.mobile-navbar');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillsSection = document.getElementById('skills');
const skillsContainer = document.getElementById('skills-container');
const projectsContainer = document.getElementById('projects-container');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const currentYearEl = document.getElementById('current-year');
const greetingEl = document.getElementById('greeting');

// Set current year in footer
currentYearEl.textContent = new Date().getFullYear();

// Theme Toggle
function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-theme');
    themeIcon.className = 'bx bx-sun';
  } else {
    document.body.classList.remove('dark-theme');
    themeIcon.className = 'bx bx-moon';
  }
}

// Check local storage for theme preference
if (localStorage.getItem('darkTheme') === 'true') {
  setTheme(true);
} else {
  setTheme(false);
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('darkTheme', isDark);
  setTheme(isDark);
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
  const menuIcon = document.getElementById('menu-icon');
  mobileNavbar.classList.toggle('active');
  
  if (mobileNavbar.classList.contains('active')) {
    menuIcon.className = 'bx bx-x';
  } else {
    menuIcon.className = 'bx bx-menu';
  }
});

// Hide mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNavbar.classList.remove('active');
    document.getElementById('menu-icon').className = 'bx bx-menu';
  });
});

// Typing effect
function setupTypingEffect() {
  const roles = ['I am a Web Developer', 'I am a UI/UX Designer', 'I am a Mobile Developer'];
  let currentIndex = 0;
  
  const typed = new Typed('#typing-text', {
    strings: roles,
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    preStringTyped: () => {
      currentIndex = (currentIndex + 1) % roles.length;
    }
  });
}

// Greeting based on time of day
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = 'Hello';
  
  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }
  
  greetingEl.textContent = greeting;
}

// Skills data
const skills = [
  {
    name: 'HTML & CSS',
    level: 90,
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    level: 85,
    category: 'frontend'
  },
  {
    name: 'React',
    level: 80,
    category: 'frontend'
  },
  {
    name: 'Node.js',
    level: 75,
    category: 'backend'
  },
  {
    name: 'Express',
    level: 70,
    category: 'backend'
  },
  {
    name: 'MongoDB',
    level: 65,
    category: 'backend'
  },
  {
    name: 'UI Design',
    level: 80,
    category: 'design'
  },
  
  {
    name: 'Git',
    level: 85,
    category: 'tools'
  },
  {
    name: 'Docker',
    level: 60,
    category: 'tools'
  },
  {
    name: 'Responsive Design',
    level: 90,
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    level: 70,
    category: 'frontend'
  }
];

// Project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully functional e-commerce platform with product listings, shopping cart, and checkout process.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    categories: ['web', 'frontend', 'backend'],
    link: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for organizing and tracking tasks with drag-and-drop functionality.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Firebase', 'Material UI'],
    categories: ['web', 'frontend'],
    link: '#',
    featured: false
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    description: 'A mobile application for tracking workouts and nutrition with progress visualization.',
    image: 'https://images.unsplash.com/photo-1604430456208-4f610f9c3b27?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'Redux', 'Firebase'],
    categories: ['mobile'],
    link: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Banking Dashboard UI',
    description: 'A modern user interface design for a banking dashboard with data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Figma', 'UI/UX', 'Design System'],
    categories: ['ui/ux', 'design'],
    link: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Weather Application',
    description: 'A weather forecast application that displays current and upcoming weather conditions.',
    image: 'https://images.unsplash.com/photo-1532978379593-66101116d807?auto=format&fit=crop&w=800&q=80',
    tags: ['JavaScript', 'API', 'CSS', 'Responsive'],
    categories: ['web', 'frontend'],
    link: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills with a modern design.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    categories: ['web', 'frontend', 'ui/ux'],
    link: '#',
    featured: true
  }
];

// Render skills
function renderSkills(category = 'all') {
  skillsContainer.innerHTML = '';
  
  const filteredSkills = category === 'all'
    ? skills
    : skills.filter(skill => skill.category === category);
  
  filteredSkills.forEach((skill, index) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.style.transitionDelay = `${index * 100}ms`;
    skillCard.innerHTML = `
      <div class="skill-header">
        <h3 class="skill-name">${skill.name}</h3>
        <span class="skill-level">${skill.level}%</span>
      </div>
      <div class="progress-bg">
        <div class="progress-bar" style="width: ${skill.level}%"></div>
      </div>
    `;
    
    skillsContainer.appendChild(skillCard);
  });
}

// Render projects
function renderProjects(category = 'all') {
  projectsContainer.innerHTML = '';
  
  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(category));
  
  filteredProjects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.style.transitionDelay = `${index * 100}ms`;
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${project.tags.slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          ${project.tags.length > 3 ? `<span class="project-tag">+${project.tags.length - 3}</span>` : ''}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <a href="${project.link}" class="project-link">
          View Project <i class='bx bx-link-external'></i>
        </a>
      </div>
    `;
    
    projectsContainer.appendChild(projectCard);
  });
}

// Add click event listeners to filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    const parent = e.target.parentElement;
    
    // Remove active class from all buttons in the same group
    parent.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Render the appropriate content based on the parent container
    if (parent.closest('#skills')) {
      renderSkills(category);
      animateSkillBars();
    } else if (parent.closest('#projects')) {
      renderProjects(category);
      animateElements('.project-card');
    }
  });
});

// Form validation
function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  
  let isValid = true;
  
  // Validate name
  if (nameInput.value.length < 3) {
    nameInput.classList.add('error');
    nameError.textContent = 'Name must be at least 3 characters';
    nameError.classList.add('visible');
    isValid = false;
  } else {
    nameInput.classList.remove('error');
    nameError.classList.remove('visible');
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('error');
    emailError.textContent = 'Please enter a valid email address';
    emailError.classList.add('visible');
    isValid = false;
  } else {
    emailInput.classList.remove('error');
    emailError.classList.remove('visible');
  }
  
  // Validate message
  if (messageInput.value.length < 20) {
    messageInput.classList.add('error');
    messageError.textContent = 'Message must be at least 20 characters';
    messageError.classList.add('visible');
    isValid = false;
  } else {
    messageInput.classList.remove('error');
    messageError.classList.remove('visible');
  }
  
  submitBtn.disabled = !isValid;
  return isValid;
}

// Add input event listeners to form fields for real-time validation
if (contactForm) {
  const formInputs = contactForm.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('input', validateForm);
  });
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically call a function to send the form data
      // For now, we'll just show an alert
      alert('Form submitted successfully! In a real application, this would send your message.');
      contactForm.reset();
    }
  });
}

// Intersection Observer for animations
function createObserver(elements, callback) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));
  return observer;
}

// Animate elements when they come into view
function animateElements(selector) {
  const elements = document.querySelectorAll(selector);
  createObserver(elements, (element) => {
    element.classList.add('visible');
  });
}

// Animate skill bars when they come into view
function animateSkillBars() {
  setTimeout(() => {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
      bar.classList.add('animate');
    });
  }, 300);
}

// Update active navigation link based on scroll position
function updateActiveLink() {
  let currentSectionId = '';
  const scrollPosition = window.scrollY + 100; // Offset for navbar height
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
}

// Initialize the page
function init() {
  // Update greeting
  updateGreeting();
  setInterval(updateGreeting, 60000); // Update every minute
  
  // Setup typing effect
  setupTypingEffect();
  
  // Render skills and projects
  renderSkills();
  renderProjects();
  
  // Add scroll event listener
  window.addEventListener('scroll', updateActiveLink);
  
  // Initial call to set the active link
  updateActiveLink();
  
  // Setup animations
  animateElements('.skill-card');
  animateElements('.project-card');
  setTimeout(animateSkillBars, 500);
  
  // Initialize form validation
  if (contactForm) {
    validateForm();
  }
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);
