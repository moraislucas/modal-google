import initModal from './initModal.js'

const btn = document.querySelector('#abre');
btn.addEventListener('click', (e)=>{
  e.preventDefault();
  initModal('modal-google')
})