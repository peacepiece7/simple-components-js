const dealy = async (ms) => await new Promise((res) => setTimeout(res, ms))

async function changeTextBgColor() {
  for(let i = 0 ; i < 100; i++) {
    await dealy(2000)
    document.querySelector('.gradientText')?.classList.toggle('transitionOn')
  }
}
changeTextBgColor()

