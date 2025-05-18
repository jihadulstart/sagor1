// script.js

// ========= Page Loading Animation =========
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.display = 'none';
  }
});

// ========= Typewriter Animation =========
const typewriterText = 'Learning is my superpower.';
let index = 0;
function typeWriter() {
  const element = document.getElementById('typewriter');
  if (index < typewriterText.length) {
    element.innerHTML += typewriterText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
document.addEventListener('DOMContentLoaded', typeWriter);

// ========= Starfield Background (Canvas) =========
const canvas = document.getElementById('stars');
function resizeCanvas() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

if (canvas) {
  const ctx = canvas.getContext('2d');
  const stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      alpha: Math.random(),
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
      star.x += star.dx;
      star.y += star.dy;

      if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
      if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
}

// ========= Smooth Scroll =========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ========= Scroll Reveal Animation =========
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ========= Contact Form Feedback =========
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent successfully! (This is a demo)');
    contactForm.reset();
  });
}

// ========= Button Click Sound (Optional) =========
const buttons = document.querySelectorAll('button, .btn');
const clickSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_3f15a5e87a.mp3');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    clickSound.play();
  });
});