document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');
  var toggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  var links = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
    var scrollPos = window.scrollY + 100;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
        links.forEach(function (l) { l.classList.remove('active'); });
        var active = document.querySelector('.nav-links a[href="#' + sec.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  });

  if (toggle) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    links.forEach(function (l) {
      l.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }
});
