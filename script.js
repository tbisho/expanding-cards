
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click',() => {
    // gives a list of classes
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

