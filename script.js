
var btn = document.getElementsByClassName("btn")

for (const iterator of btn) {
    iterator.addEventListener('click', function () {
        if (iterator.id == 'plus-case') {
            document.getElementById('qunatity-case').value++
        }
        else if (iterator.id == 'minus-case') {
            if (document.getElementById('qunatity-case').value <= 0) {
                document.getElementById('qunatity-case').value = 0
            }
            else {
                document.getElementById('qunatity-case').value--
            }
        }
        else if (iterator.id == 'minus-phone') {
            if (document.getElementById('qunatity-phone').value <= 0) {
                document.getElementById('qunatity-phone').value = 0
            }
            else {
                document.getElementById('qunatity-phone').value--
            }

        }
        else if (iterator.id == 'plus-phone') {
            document.getElementById('qunatity-phone').value++
        }
        const phoneTotal = document.getElementById('phone-price').innerText = document.getElementById('qunatity-phone').value * 1219
        const caseTotal = document.getElementById('case-price').innerText = document.getElementById('qunatity-case').value * 59

        document.getElementById('sub-total').innerText = phoneTotal + caseTotal
        document.getElementById('tax').innerText = (phoneTotal + caseTotal) / 10
        document.getElementById('total').innerText = phoneTotal + caseTotal + (phoneTotal + caseTotal) / 10
    })
}
// document.getElementById('case-del').addEventListener("click", function () {
//     document.getElementById('case-sec').style.display = 'none'
//     document.getElementById('sub-total').innerText = 0
//     document.getElementById('tax').innerText = 10
//     document.getElementById('total').innerText = 10
// })
// document.getElementById('phone-del').addEventListener("click", function () {
//     document.getElementById('phone-sec').style.display = 'none'
// })
