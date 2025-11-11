// projets.js - simple modal behavior for 'Voir plus' buttons
document.addEventListener('DOMContentLoaded',function(){
  const modal=document.getElementById('projectModal');
  const modalTitle=document.getElementById('modalTitle');
  const modalImg=document.getElementById('modalImg');
  const modalText=document.getElementById('modalText');
  document.querySelectorAll('.btn-see').forEach(btn=>{
    btn.addEventListener('click',e=>{
      const card=btn.closest('.card');
      const title=card.querySelector('.card-title').textContent;
      const img=card.getAttribute('data-img');
      const desc=card.querySelector('.card-desc').textContent;
      modalTitle.textContent=title;
      modalImg.src=img;
      modalText.textContent=desc;
      modal.classList.add('open');
    });
  });
  document.querySelectorAll('.modal-close, .modal').forEach(el=>{
    el.addEventListener('click',e=>{
      if(e.target.classList.contains('modal')){modal.classList.remove('open');return}
      modal.classList.remove('open');
    });
  });
});
