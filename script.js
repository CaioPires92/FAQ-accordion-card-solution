const ask = document.querySelectorAll('.ask')

ask.forEach(ask => {
  ask.addEventListener('click', () => {
    ask.classList.toggle('ativa')
  })
})
