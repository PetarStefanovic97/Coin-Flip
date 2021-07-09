let tos = document.querySelector('#btn').addEventListener('click', function () {
  let number = Math.floor(Math.random() * 2)

  if (number === 0) {
    number = 'head'
    let headNumber = document.querySelector('.head-number')
    headNumber.innerHTML++
  } else {
    number = 'tail'
    let tailNumber = document.querySelector('.tail-number')
    tailNumber.innerHTML++
  }

  document.querySelector('.res').textContent = number
})