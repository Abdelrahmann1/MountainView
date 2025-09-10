// Animate Dynamic Numbers
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // Start Animation on Page Load
  document.addEventListener("DOMContentLoaded", () => {
    animateValue("installment", 0, 12, 2000);
    animateValue("downpayment", 0, 5, 1500);
    animateValue("delivery", 0, 2, 1500);
    animateValue("price", 0, 8000000, 3000);
  });