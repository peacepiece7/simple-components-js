async function init() {
  let cnt = 100
  while (cnt--) {
    await new Promise((res) => setTimeout(res, 1400))
    Array.from(document.querySelectorAll('.loading2 > div')).map(async (el, i) => {
      setTimeout(() => {
        el.classList.toggle('turnOn')
      }, 400 * i)
    })
  }
}
init()
