document.addEventListener("DOMContentLoaded", () => {
  const arrowRight = document.getElementById("arrowRight");
  const arrowLeft = document.getElementById("arrowLeft");

  const content1 = document.querySelectorAll(".content1");
  const content2 = document.querySelectorAll(".content2");
  const body = document.body;

  arrowRight.addEventListener("click", () => {    
    content1.forEach(el => el.style.display = "none");
    content2.forEach(el => el.style.display = "block");

    // Changed background
    body.style.backgroundImage = "url('images/Firefly_an\ image\ of\ grey\ clouds\ without\ humans\ 274337.jpg')"; 
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
  });

  arrowLeft.addEventListener("click", () => {   
    content2.forEach(el => el.style.display = "none");
    content1.forEach(el => el.style.display = "block");

    // Original background
    body.style.backgroundImage = "url('images/Firefly_sunset clouds without human, in orange, purple, pink and blue colors 904203.jpg')"; 
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
  });
});
