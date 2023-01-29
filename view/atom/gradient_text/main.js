const dealy = async (ms) => await new Promise((res) => setTimeout(res, ms))

async function changeTextBgColor() {
  for (let i = 0; i < 100; i++) {
    await dealy(2000)
    document.querySelector('.gradientText')?.classList.toggle('transitionOn')
    Array.from(document.querySelectorAll('.gradirent h1')).map((e, i) => {
      setTimeout(() => e.classList.toggle('transitionOn'), 500 * i)
    })
  }
}
changeTextBgColor()
