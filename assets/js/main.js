
document.addEventListener('DOMContentLoaded', () => {
  const yearNodes = document.querySelectorAll('[data-year]');
  yearNodes.forEach(node => node.textContent = new Date().getFullYear());

  document.querySelectorAll('form.demo-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Спасибо! Заявка отправлена. Администратор клуба свяжется с вами для подтверждения бронирования.');
      form.reset();
    });
  });
});
