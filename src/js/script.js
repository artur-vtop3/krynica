window.onload = () => {
  const infoBtns = document.querySelectorAll('[data-open]')

  infoBtns.forEach((element) => {
    element.onclick = () => {
      const info = document.querySelector(
        `[data-info="${element.dataset.open}"]`
      )
      info.classList.toggle('hidden')
      const infoClose = info.querySelector('i')
      infoClose.onclick = () => {
        info.classList.toggle('hidden')
      }
    }
  })
  const leaf1 = document.querySelector('.leaf1')
  const leaf2 = document.querySelector('.leaf2')
  const leaf1Top = leaf1.getBoundingClientRect().top
  const leaf2Top = leaf2.getBoundingClientRect().top

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    leaf1.style.top = 0.2 * scrollY + leaf1Top + 'px'
    leaf2.style.top = 0.2 * scrollY + leaf2Top + 'px'
  })

  const imgs = document.querySelectorAll('[data-img]')
  imgs.forEach((element) => {
    const url = element.dataset.img
    const src = element.src
    element.addEventListener('mouseover', () => {
      element.src = url
    })
    element.addEventListener('mouseout', () => {
      element.src = src
    })
  })

  const btn1 = document.querySelector('[data-btn="1"]')
  const btn2 = document.querySelector('[data-btn="2"]')
  const modal = document.querySelector('.modal')
  const modalText = document.querySelector('.modal-text')
  const modalTitle = document.querySelector('.modal-title')
  const modalBtns = document.querySelector('.modal-buttons')

  btn1.onclick = () => {
    modal.classList.toggle('hidden')
  }
  btn2.onclick = () => {
    modalText.innerText = 'Возвращайтесь, когда Вам исполнится 18 лет.'
    modalBtns.classList.toggle('hidden')
    modalTitle.classList.toggle('hidden')
  }
}
