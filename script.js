let a = 0
let b = 0
let h = 0
let total = 0

document.getElementById('button').addEventListener('click', addition)

function addition () {
  a = document.getElementById('a').value

  a = parseInt(a)

  b = document.getElementById('b').value

  b = parseInt(b)

  h = document.getElementById('h').value

  h = parseInt(h)

  total = ((a + b) / 2) * h

  alert(total)
}
