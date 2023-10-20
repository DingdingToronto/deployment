// dynamicStyles.js
document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  const h2 = document.querySelector("h2");
  const h3 = document.querySelector("h3");

  // Add event listeners to change styles dynamically
  h1.addEventListener("mouseover", function () {
    h1.style.color = "blue";
  });
  h1.addEventListener("mouseout", function () {
    h1.style.color = "black";
  });

  h2.addEventListener("mouseover", function () {
    h2.style.fontWeight = "bold";
  });
  h2.addEventListener("mouseout", function () {
    h2.style.fontWeight = "normal";
  });

  h3.addEventListener("click", function () {
    h3.style.backgroundColor = "yellow";
  });
});
