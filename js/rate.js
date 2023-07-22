let ratingBtn = document.querySelectorAll('.rating-form__radio')
let currentRathing = document.querySelector('span')
let submitBtn = document.querySelector('.submit')
let window1 = document.querySelector('.container-rathing')
let window2 = document.querySelector('.thanks-container')

let chosenOp

for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener('click', function() {
        clear()
        ratingBtn[i].classList.add('chosen')
        chosenOp = i + 1
        console.log(chosenOp)
    })
}

function clear() {
    ratingBtn.forEach(function(item) {
        item.classList.remove('chosen')
    })
}
console.log(currentRathing)
submitBtn.addEventListener('click', function() {
    window1.classList.toggle('none')
    window2.classList.toggle('none')
    currentRathing.innerHTML = chosenOp
})


