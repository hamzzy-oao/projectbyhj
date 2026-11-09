(() => {
  const links = Array.from(document.querySelectorAll('.site-header nav a'));
  const sections = links.map((link) => document.querySelector(link.getAttribute('href')));
  let scheduled = false;

  const updateCurrentSection = () => {
    scheduled = false;
    const marker = window.scrollY + (document.querySelector('.site-header')?.offsetHeight || 0) + 32;
    let activeIndex = 0;
    sections.forEach((section, index) => {
      if (section && section.offsetTop <= marker) activeIndex = index;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      activeIndex = links.length - 1;
    }
    links.forEach((link, index) => {
      if (index === activeIndex) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const scheduleUpdate = () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateCurrentSection);
    }
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  updateCurrentSection();
})();

(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll('.photo-placeholder, .about-copy, .strengths article, .tech-heading, .tech-row, .projects-heading, .project-card, .contact-heading, .contact-item');
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

  elements.forEach((element) => {
    element.classList.add('motion-reveal');
    observer.observe(element);
  });
  document.documentElement.classList.add('motion-ready');
})();


(() => {
  const heading = document.getElementById('hero-title');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!heading || reducedMotion.matches) return;

  const text = Array.from(heading.children, line => line.textContent.trim()).join(' ');
  heading.setAttribute('aria-label', text);
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const characters = [];
  for (const node of textNodes) {
    const fragment = document.createDocumentFragment();
    for (const character of Array.from(node.nodeValue)) {
      const span = document.createElement('span');
      span.className = 'typing-char';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = character;
      fragment.appendChild(span);
      characters.push(span);
    }
    node.replaceWith(fragment);
  }

  heading.classList.add('is-typing');
  let index = 0;
  let timer;
  const finish = () => {
    clearTimeout(timer);
    characters.forEach(character => character.classList.add('is-visible'));
    heading.querySelector('.is-cursor')?.classList.remove('is-cursor');
    heading.classList.remove('is-typing');
  };
  const typeNext = () => {
    if (index === characters.length) {
      timer = setTimeout(finish, 350);
      return;
    }
    if (index > 0) characters[index - 1].classList.remove('is-cursor');
    characters[index].classList.add('is-visible', 'is-cursor');
    index += 1;
    timer = setTimeout(typeNext, 65);
  };
  reducedMotion.addEventListener('change', event => {
    if (event.matches) finish();
  });
  typeNext();
})();
