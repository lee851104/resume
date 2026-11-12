const toggle = document.querySelector('#motion-toggle');
const pipeline = document.querySelector('.pipeline');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches) toggle.hidden = false;
toggle.addEventListener('click', () => {
  const paused = pipeline.classList.toggle('paused');
  toggle.setAttribute('aria-pressed', String(paused));
  toggle.setAttribute('aria-label', paused ? '播放動畫' : '暫停動畫');
  toggle.textContent = paused ? '播放' : '暫停';
});
reducedMotion.addEventListener('change', event => { toggle.hidden = event.matches; });
document.querySelector('#year').textContent = new Date().getFullYear();
