
export default function initModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.id == modalId || e.target.className == 'fecha-modal' || e.target.id ==
        'btn-cancela')
        modal.classList.remove('mostrar');
    })
    window.addEventListener('keyup', (e) => {
      if (e.key == 'Escape')
        modal.classList.remove('mostrar');
    });

    // Abrindo Modal
    modal.classList.add('mostrar');
  }
}