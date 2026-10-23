/* Local preference only; no network requests. */
(() => {
  let language = 'de';
  try { language = localStorage.getItem('kontor-language') || (navigator.language.startsWith('de') ? 'de' : 'en'); } catch (_) { /* Storage can be disabled. */ }
  if (!['de', 'en'].includes(language)) language = 'de';
  document.documentElement.lang = language;
  function apply(next, persist) {
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-set-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLang === next)));
    document.querySelectorAll('[data-video-src-de]').forEach(video => {
      const source = video.dataset[next === 'de' ? 'videoSrcDe' : 'videoSrcEn'];
      video.poster = video.dataset[next === 'de' ? 'videoPosterDe' : 'videoPosterEn'];
      if (video.getAttribute('src') !== source) {
        video.pause();
        video.setAttribute('src', source);
        video.load();
      }
    });
    document.querySelectorAll('[data-src-de]').forEach(img => img.src = img.dataset[next === 'de' ? 'srcDe' : 'srcEn']);
    document.querySelectorAll('[data-href-de]').forEach(link => link.href = link.dataset[next === 'de' ? 'hrefDe' : 'hrefEn']);
    document.querySelectorAll('[data-alt-de]').forEach(img => img.alt = img.dataset[next === 'de' ? 'altDe' : 'altEn']);
    document.querySelectorAll('[data-nav-label]').forEach(nav => nav.setAttribute('aria-label', next === 'de' ? 'Hauptnavigation' : 'Main navigation'));
    const page = location.pathname.split('/').pop();
    document.title = (page === 'imprint.html' ? (next === 'de' ? 'Impressum' : 'Legal notice') : page === 'privacy.html' ? (next === 'de' ? 'Datenschutz' : 'Privacy policy') : page === 'support.html' ? 'Support' : next === 'de' ? 'Dein Siegel. Dein Risiko.' : 'Your seal. Your risk.') + ' · Kontor';
    if (persist) { try { localStorage.setItem('kontor-language', next); } catch (_) {} }
  }
  document.addEventListener('DOMContentLoaded', () => {
    apply(language, false);
    document.querySelectorAll('[data-set-lang]').forEach(button => button.addEventListener('click', () => apply(button.dataset.setLang, true)));
  });
})();
