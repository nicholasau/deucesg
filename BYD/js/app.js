const searchInput = document.querySelector('#searchInput');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('.app-card').forEach(card => {
      const text = `${card.textContent} ${card.dataset.search || ''}`.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
}
