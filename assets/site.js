const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});

const dialog = document.querySelector('.search-dialog');
const searchInput = document.querySelector('#site-search');
const status = document.querySelector('.search-status');
const results = document.querySelector('.search-results');
document.querySelector('.search-toggle').addEventListener('click', () => {
  dialog.showModal();
  searchInput.focus();
});
document.querySelector('.search-close').addEventListener('click', () => dialog.close());
document.querySelector('.search-form').addEventListener('submit', event => event.preventDefault());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }
});
searchInput.addEventListener('input', () => {
  results.replaceChildren();
  const query = searchInput.value.trim().toLocaleLowerCase();
  if (!query) {
    status.textContent = 'Search across Home, Research, Teaching, Notes, and Etc.';
    return;
  }
  const words = query.split(/\s+/);
  const matches = window.SITE_SEARCH.filter(item => words.every(word => `${item.title} ${item.text}`.toLocaleLowerCase().includes(word)));
  status.textContent = matches.length ? `${matches.length} result${matches.length === 1 ? '' : 's'}` : 'No results found. Try another word or phrase.';
  matches.forEach(item => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.url;
    link.textContent = item.title;
    const label = document.createElement('span');
    label.className = 'search-page-label';
    label.textContent = item.page;
    const snippet = document.createElement('p');
    const text = item.text;
    const at = text.toLocaleLowerCase().indexOf(words[0]);
    const start = Math.max(0, at - 65);
    snippet.textContent = `${start ? '…' : ''}${text.slice(start, start + 240)}${text.length > start + 240 ? '…' : ''}`;
    li.append(link, label, snippet);
    results.append(li);
  });
});
