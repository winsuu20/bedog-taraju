// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i * 0.04) + 's';
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Lightbox
function openLightbox(el) {
  const img = el.querySelector('img');
  const cap = el.querySelector('.galeri-caption');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-cap').textContent = cap ? cap.textContent : '';
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// Video load
// GANTI URL INI dengan link embed YouTube video Anda:
// Contoh: https://www.youtube.com/embed/VIDEO_ID_ANDA
var VIDEO_URL = 'https://www.youtube.com/embed/rPICQNE13vs?si=tordSC3lZQMYJalO';

function loadVideo() {
  var wrapper = document.getElementById('video-wrapper');
  var placeholder = document.getElementById('video-placeholder');
  if (placeholder) placeholder.style.display = 'none';
  
  var iframe = document.createElement('iframe');
  iframe.src = VIDEO_URL + '?autoplay=1';
  iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;';
  iframe.allow = 'autoplay; fullscreen';
  if (wrapper) wrapper.appendChild(iframe);
}

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.padding = window.scrollY > 60 ? '0.8rem 3rem' : '1.2rem 3rem';
  }
});
