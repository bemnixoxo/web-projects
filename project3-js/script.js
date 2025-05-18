document.addEventListener("DOMContentLoaded", function () {
    const greetingEl = document.querySelector(".hero h1");
    try {
      const date = new Date();
      const ethiopiaTimeParts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Addis_Ababa",
        hour: "2-digit",
        hour12: false
      }).formatToParts(date);
      const hourPart = ethiopiaTimeParts.find(part => part.type === "hour");
      const ethiopianHour = parseInt(hourPart.value, 10);
      console.log("✅ Ethiopian Hour:", ethiopianHour);
      if (ethiopianHour < 12) {
        greetingEl.textContent = "Good Morning! Welcome to Habesh Foods!";
      } else if (ethiopianHour < 18) {
        greetingEl.textContent = "Good Afternoon! Hungry? Let’s explore our menu!";
      } else {
        greetingEl.textContent = "Good Evening! Enjoy the best Ethiopian cuisine!";
      }
    } catch (error) {
      console.error("❌ Error determining Ethiopian time:", error);
      greetingEl.textContent = "Welcome to Habesh Foods!";
    }
  });
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    document.getElementById("hiddenInfo").style.display = "block";
  });
  document.getElementById('searchBox').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('#menu ol li');
    menuItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.backgroundColor = text.includes(query) && query !== "" ? "yellow" : "";
    });
  });
const foods = ["Doro Wat", "Shiro", "Tibs", "Beyayenet", "Key Wet", "Gomen"];
window.suggestFood = function () {
  const suggestion = foods[Math.floor(Math.random() * foods.length)];
  document.getElementById("suggestion").textContent = "Try: " + suggestion;
};
document.getElementById("openModalBtn").addEventListener("click", () => {
    document.getElementById("videoModal").style.display = "block";
  });
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("videoModal").style.display = "none";
  });
const images = [
    "https://eggs.ca/wp-content/uploads/2024/06/EFC-doro-wat-hero-1280x720-1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/ce/Beyaynetu.JPG",
    "https://www.chefspencil.com/wp-content/uploads/Ethiopian-Shiro-Wat.jpg",
    "https://ethiopianroots.com/wp-content/uploads/Zilzil-Tibs-1-1.jpg"
  ];
  let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];
}, 3000);
function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  }
  window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  };
  function addDish() {
    const dish = document.getElementById("newDishInput").value.trim();
    if (dish) {
      const li = document.createElement("li");
      li.textContent = dish;
      document.getElementById("customList").appendChild(li);
      document.getElementById("newDishInput").value = "";
    }
  }
  
      