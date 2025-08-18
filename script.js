// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.toggle('light-mode', savedTheme === 'light');
  updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('light-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const icon = mobileMenuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      navMenu.classList.remove('active');
      mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    }
  });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Fade In Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});

// Active Navigation Link
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Project Modal Data
const projectData = {
  project1: {
    title: "🏠 House Price Prediction - Complete ML Solution",
    content: `
          <img src="Project analysis/Main.png" alt="Project Interface" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Main Interface:</strong> Custom-designed dashboard using CustomTkinter for streamlined navigation across data analysis modules including data handling, train/test split, K-Fold validation, prediction, and reporting.</p>
          
          <img src="Project analysis/Handling.png" alt="Data Preprocessing" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Data Preprocessing:</strong> Comprehensive data cleaning pipeline with missing value treatment, categorical encoding, outlier detection, and feature selection for optimal model performance.</p>
          
          <img src="Project analysis/KFold.png" alt="K-Fold Validation" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>K-Fold Cross Validation:</strong> Robust model evaluation using K-Fold strategy to assess stability and prevent overfitting, with detailed regression metrics for each fold.</p>
          
          <img src="Project analysis/TrainTest.png" alt="Train Test Split" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Model Training & Evaluation:</strong> RandomForestRegressor implementation with comprehensive metrics including R², MSE, RMSE, and MAE for baseline performance assessment.</p>
          
          <img src="Project analysis/Predect.png" alt="Real-time Prediction" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Real-time Prediction:</strong> Interactive form allowing users to input housing features and receive instant price predictions, enhancing practical usability.</p>
          
          <img src="Project analysis/FinalRepo.png" alt="Final Report" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Comparative Analysis:</strong> Automated reporting system comparing Train/Test Split vs K-Fold results with performance visualization for informed decision-making.</p>
          
          <h3>🎯 Key Features</h3>
          <ul>
            <li>Complete machine learning pipeline from data preprocessing to deployment</li>
            <li>Interactive GUI built with CustomTkinter for enhanced user experience</li>
            <li>Advanced model validation using K-Fold cross-validation</li>
            <li>Real-time prediction capabilities with user-friendly interface</li>
            <li>Comprehensive reporting and performance visualization</li>
            <li>Robust data handling with outlier detection and feature engineering</li>
          </ul>
          
          <h3>🛠️ Technologies Used</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0;">
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">Python</span>
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">Scikit-learn</span>
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">Pandas</span>
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">CustomTkinter</span>
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">Matplotlib</span>
          </div>
          
          <h3>📊 Results & Performance</h3>
          <p>The model achieved excellent performance with R² score of 0.89 and RMSE of $45,000 on the test set, making it a reliable tool for house price estimation in the Melbourne market.</p>
          
          <h3>🎥 Demo Video</h3>
          <video controls style="width: 100%; border-radius: 10px; margin: 1rem 0;">
            <source src="Project analysis/DA Project.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `
  },
  project2: {
    title: "📊 Sales Dashboard - Complete Business Intelligence",
    content: `
          <img src="Dash Board/All Dash Board.png" alt="Dashboard Overview" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Complete Dashboard Overview:</strong> Comprehensive Excel-based business intelligence solution providing 360-degree view of sales performance with interactive filtering and dynamic visualizations.</p>
          
          <img src="Dash Board/Years Revenue.png" alt="Revenue Trends" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Revenue Analysis:</strong> Time-series analysis showing yearly and quarterly revenue trends with seasonal pattern identification for strategic planning and forecasting.</p>
          
          <img src="Dash Board/LOV&HOV.png" alt="Product Distribution" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Product Portfolio Analysis:</strong> Strategic breakdown of Low-Value (LOV) vs High-Value (HOV) products, enabling data-driven inventory and pricing decisions.</p>
          
          <img src="Dash Board/Region performance.png" alt="Regional Performance" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Geographic Performance:</strong> Multi-dimensional regional analysis combining sales volume and revenue metrics to identify market opportunities and optimization areas.</p>
          
          <img src="Dash Board/Top 7.png" alt="Top Products" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Product Performance Ranking:</strong> Revenue-based product ranking highlighting top performers and key business drivers for focused marketing and sales strategies.</p>
          
          <img src="Dash Board/Summary.png" alt="Executive Summary" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
          <p><strong>Executive Dashboard:</strong> High-level KPI summary with key metrics, trends, and insights designed for C-level decision making and strategic planning.</p>
          
          <h3>🎯 Business Impact</h3>
          <ul>
            <li>Reduced reporting time by 80% through automated dashboard</li>
            <li>Identified underperforming regions leading to targeted strategies</li>
            <li>Optimized product portfolio based on data-driven insights</li>
            <li>Enabled real-time decision making with interactive filters</li>
            <li>Improved sales team performance tracking and accountability</li>
          </ul>
          
          <h3>🛠️ Technical Implementation</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0;">
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">Excel</span>
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">Pivot Tables</span>
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">Advanced Formulas</span>
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">Data Visualization</span>
            <span style="background: rgba(99, 102, 241, 0.1); color: var(--primary-light); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">Conditional Formatting</span>
          </div>
          
          <h3>🎥 Demo Video</h3>
          <video controls style="width: 100%; border-radius: 10px; margin: 1rem 0;">
            <source src="Dash Board/PivotTable Data_Task_Final.xlsx - Excel 2025-07-17 04-04-12.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `
  }
};

// Project Modal Functions
function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');

  if (projectData[projectId]) {
    modalBody.innerHTML = `
          <h2 class="modal-title">${projectData[projectId].title}</h2>
          <div class="modal-body">${projectData[projectId].content}</div>
        `;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('projectModal').addEventListener('click', (e) => {
  if (e.target.id === 'projectModal') {
    closeModal();
  }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = body.classList.contains('light-mode')
      ? 'rgba(255, 255, 255, 0.98)'
      : 'rgba(15, 15, 35, 0.98)';
  } else {
    navbar.style.background = body.classList.contains('light-mode')
      ? 'rgba(255, 255, 255, 0.95)'
      : 'rgba(15, 15, 35, 0.95)';
  }
});

// Typing Effect for Hero Title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title');
  const originalText = heroTitle.textContent;
  setTimeout(() => typeWriter(heroTitle, originalText, 80), 500);
});

// Skills Animation on Hover
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.1) rotate(2deg)';
  });

  tag.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1) rotate(0deg)';
  });
});

// Project Cards Tilt Effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const rate = scrolled * -0.5;

  if (hero) {
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Count Up Animation for Stats
function animateCountUp(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  function updateCount() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start) + '+';
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target + '+';
    }
  }

  updateCount();
}

// Initialize count up animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      const number = entry.target.querySelector('.stat-number');
      const target = parseInt(number.textContent);
      animateCountUp(number, target);
      entry.target.classList.add('animated');
    }
  });
});

document.querySelectorAll('.stat-card').forEach(card => {
  statsObserver.observe(card);
});

// Contact Form Animation
document.querySelectorAll('.contact-method').forEach(method => {
  method.addEventListener('mouseenter', function () {
    this.style.transform = 'translateX(15px) scale(1.02)';
    this.querySelector('.contact-icon').style.transform = 'rotate(10deg) scale(1.1)';
  });

  method.addEventListener('mouseleave', function () {
    this.style.transform = 'translateX(0) scale(1)';
    this.querySelector('.contact-icon').style.transform = 'rotate(0deg) scale(1)';
  });
});

// Loading Animation
window.addEventListener('load', () => {
  const loader = document.createElement('div');
  loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
      `;

  loader.innerHTML = `
        <div style="
          width: 50px;
          height: 50px;
          border: 3px solid rgba(99, 102, 241, 0.3);
          border-top: 3px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        "></div>
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      `;

  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }, 1000);
});

// Enhanced Scroll Animations
const enhancedObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      entry.target.style.animationDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1}s`;
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-category, .timeline-item').forEach(el => {
  enhancedObserver.observe(el);
});

// Make functions globally accessible
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;
