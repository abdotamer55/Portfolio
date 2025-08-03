function openImage(src) {
  document.getElementById("overlayImg").src = src;
}

function closeImage() {
  document.getElementById("imageOverlay").style.display = "none";
}

function toggleThemeMode() {
  const body = document.body;
  const toggleButton = document.getElementById("mode-toggle");
  const icon = toggleButton.querySelector("i");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

const projectDetails = {
  project2: {
    title: "📊 Excel Dashboard – Full Overview",
    content: `  
    <img src="Dash Board/All Dash Board.png" alt="View">
  <p class="img-caption">
    Step 1: 📊 Full Sales Dashboard (Excel) --- 
Built with Excel to analyze revenue, regions, and top products dynamically.
  </p>
  <br>
  <img src="Dash Board/Years Revenue.png" alt="Revenue">
  <p class="img-caption">Step 2: 📈 Yearly & Quarterly Revenue Trends --- 
A line chart visualizing sales performance over time to track yearly growth and seasonal patterns.
  </p>
  <br>
  <img src="Dash Board/LOV&HOV.png" alt="LOV&HOV">
  <p class="img-caption">Step 3: 🟠 LOV & HOV Product Distribution --- 
A pie chart showing the proportion of Low-Value (LOV) and High-Value (HOV) products, helping to analyze product category focus.
  </p>
  <br>
  <img src="Dash Board/Region performance.png" alt="Region">
  <p class="img-caption">Step 4: 📍 Regional Sales Performance --- 
Bar and line charts comparing total sales and revenue across different regions to identify top and low-performing areas.
  </p>
  <br>
  <img src="Dash Board/Top 7.png" alt="Top 7">
  <p class="img-caption">Step 5: 🏆 Top 7 Products by Revenue --- 
A ranked view of the highest-performing products based on total revenue, highlighting key drivers of business growth.
  </p>
  <br>
  <img src="Dash Board/Summary.png" alt="Summary">
  <p class="img-caption">Step 6: 🧾 Executive Summary --- 
A concise overview of key sales metrics, including total revenue, product mix, and regional insights — offering a quick snapshot for decision-makers.
  </p>
  <br>
<h3>🔍 Project Review</h3>
<p>This interactive <strong>Sales Dashboard</strong> was built using Microsoft Excel to analyze and visualize sales data effectively.</p>

<h4>Key Features:</h4>
<ul>
  <li>Summary of total sales and product mix</li>
  <li>Yearly & quarterly revenue trends</li>
  <li>Distribution of LOV & HOV product categories</li>
  <li>Regional sales performance</li>
  <li>Top 7 products by revenue</li>
  <li>Interactive slicers for filtering by region, product, year, and month</li>
  <li>Final video review walkthrough</li>
</ul>

<p><strong>Tools Used:</strong> Excel (Pivot Tables, Charts, Slicers, Conditional Formatting)<br>
<strong>Objective:</strong> Transform raw sales data into actionable insights for decision-making.</p>
  <!-- <a href="https://github.com/username/repo_name" target="_blank" style="
    display: inline-block;
    padding: 10px 20px;
    background-color: #00BFFF;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;">
    🔗 View Full Code on GitHub
  </a>
  <a>
    ..
  </a> -->

  <br>
  <h3>🎥 Demo Video</h3>
  <video controls>
    <source src="Dash Board/PivotTable Data_Task_Final.xlsx - Excel 2025-07-17 04-04-12.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  `
  },
  project1: {
    title: "🏠 House Price Prediction – Full Overview",
    content: `    <img src="Project analysis/Main.png" alt="View">
  <p class="img-caption">
    Step 1: Main GUI Interface – A custom-designed dashboard using customtkinter,
    allowing streamlined navigation across key data analysis modules: Data Handling,
    Train/Test Split, K-Fold Cross Validation, Prediction, and Final Reporting.
  </p>
  <br>
  <img src="Project analysis/Handling.png" alt="Data Handling">
  <p class="img-caption">Step 2: Data Preprocessing & Cleaning – This section ensures data quality through missing
    value treatment,
    encoding categorical features, outlier removal, and feature selection, setting a solid foundation for model
    training.
  </p>
  <br>
  <img src="Project analysis/KFold.png" alt="K-Fold">
  <p class="img-caption">Step 3: K-Fold Cross Validation – Implements K-Fold strategy to evaluate model stability
    and performance across multiple splits,
    reporting key regression metrics for each fold to ensure generalization and avoid overfitting.
  </p>
  <br>
  <img src="Project analysis/TrainTest.png" alt="Split">
  <p class="img-caption">Step 4: Train/Test Evaluation – Splits the dataset into training and testing sets, then
    trains a RandomForestRegressoion model and evaluates it using metrics like R²,
    MSE, RMSE, and MAE to assess baseline performance.
  </p>
  <br>
  <img src="Project analysis/Predect.png" alt="Prediction">
  <p class="img-caption">Step 5: Real-time Price Prediction – An interactive form where users input new housing
    features to get instant price predictions from the trained model,
    enhancing the tool’s practicality and user engagement.
  </p>
  <br>
  <img src="Project analysis/FinalRepo.png" alt="Report">
  <p class="img-caption">Step 6: Final Comparative Report – Automatically summarizes and compares model
    performance from Train/Test Split vs. K-Fold results,
    highlighting the best-performing fold and visualizing insights for informed decision-making.
  </p>
  <br>
  <h3>💻 Project Review </h3>
  <p>
    Project: House Price Prediction Tool
    A complete machine learning solution to predict Melbourne house prices. The app includes data cleaning,
    feature engineering, multiple model evaluation (Train/Test Split & K-Fold), and real-time prediction through a
    custom GUI built with customtkinter.
    ✅ Technologies: Python, Pandas, Scikit-learn, Matplotlib, CustomTkinter
  </p>
  <!-- <a href="https://github.com/username/repo_name" target="_blank" style="
    display: inline-block;
    padding: 10px 20px;
    background-color: #00BFFF;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;">
    🔗 View Full Code on GitHub
  </a>
  <a>
    ..
  </a> -->

  <br>
  <h3>🎥 Demo Video</h3>
  <video controls>
    <source src="Project analysis/DA Project.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  `
  }
};

function openProject(projectId) {
  const overlay = document.getElementById("projectOverlay");
  const container = overlay.querySelector(".project-full-content");

  if (projectDetails[projectId]) {
    container.innerHTML = `
      <span class="close-btn" onclick="closeProject()">&times;</span>
      <h2>${projectDetails[projectId].title}</h2>
      ${projectDetails[projectId].content}
    `;
    overlay.style.display = "flex";
    const imgs = container.querySelectorAll("img");
    imgs.forEach(img => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function () {
        openImageModal(this.src);
      });
    });
  }
}


function closeProject() {
  document.getElementById("projectOverlay").style.display = "none";
}


function openImageModal(src) {
  document.getElementById('imgInModal').src = src;
  document.getElementById('imgModal').style.display = 'block';
}

function closeImageModal() {
  document.getElementById('imgModal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  const zoomableImgs = document.querySelectorAll("#projects img, #certificates img");
  zoomableImgs.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      openImageModal(this.src);
    });
  });
});
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function revealSections() {
  const sections = document.querySelectorAll('.section');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);

document.addEventListener('DOMContentLoaded', revealSections);

