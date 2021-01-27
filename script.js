let singlePhonePrice = 1000;//1219;
let singleCasePrice = 50;//59;
let subTotal = parseInt(document.getElementById('subTotal').innerText);

function cartIncrease(id) {
    document.getElementById(id).value++;
}
function cartDecrease(id) {
    let counter = document.getElementById(id).value;
    if(counter == 0){
        document.getElementById(id).value;
    }
    else{
        document.getElementById(id).value--;
    }
}
function cartPrice(count, itemTotal, singlePrice) {
    let itemCount = document.getElementById(count).value;
    itemTotalPrice = singlePrice * itemCount;
    document.getElementById(itemTotal).innerText = itemTotalPrice;
}
document.getElementById('phonePlus').addEventListener('click', function () {
    cartIncrease('phoneCount');
    cartPrice('phoneCount', 'phonePrice', singlePhonePrice);
    document.getElementById('subTotal').innerText = subTotal + itemTotalPrice;
})

document.getElementById('phoneMinus').addEventListener('click', function () {
    cartDecrease('phoneCount');
    cartPrice('phoneCount', 'phonePrice', singlePhonePrice);
    document.getElementById('subTotal').innerText = subTotal + itemTotalPrice;
})

document.getElementById('casePlus').addEventListener('click', function () {
    cartIncrease('caseCount');
    cartPrice('caseCount', 'casePrice', singleCasePrice);
    document.getElementById('subTotal').innerText = subTotal + itemTotalPrice;
})

document.getElementById('caseMinus').addEventListener('click', function () {
    cartDecrease('caseCount');
    cartPrice('caseCount', 'casePrice', singleCasePrice);
    document.getElementById('subTotal').innerText = subTotal + itemTotalPrice;
})


