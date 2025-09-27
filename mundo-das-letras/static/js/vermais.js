document.querySelectorAll('.texto-container').forEach(function(container) {
  const limit = parseInt(container.getAttribute('data-limit'));
  const fullText = container.innerText.trim();

  if (fullText.length > limit) {
    const visibleText = fullText.substr(0, limit);
    const hiddenText = fullText.substr(limit);

    container.innerHTML = `
      <span class="visible-text">${visibleText}</span>
      <span class="dots">...</span>
      <span class="hidden-text" style="display:none;">${hiddenText}</span>
      <span class="ver-mais">Ver mais</span>
    `;
  }

  const btn = container.querySelector('.ver-mais');
  btn.addEventListener('click', function() {
    const hidden = container.querySelector('.hidden-text');
    const dots = container.querySelector('.dots');

    if (hidden.style.display === 'none') {
      hidden.style.display = 'inline';
      dots.style.display = 'none';
      btn.innerText = 'Ver menos';
    } else {
      hidden.style.display = 'none';
      dots.style.display = 'inline';
      btn.innerText = 'Ver mais';
    }
  });
});