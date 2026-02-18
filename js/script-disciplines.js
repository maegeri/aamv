document.querySelectorAll('.toggle-info').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const card = button.closest('.discipline-card');
    card.classList.toggle('open');
  });
});