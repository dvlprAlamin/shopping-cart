// Product counter function
function productCount(isPlus, productName){
    let productCount = document.getElementById(productName +'Count');
    if(isPlus == true){
        productCount.value++;
    }
    if(isPlus == false && productCount.value > 0){
        productCount.value--;
    }
    productPrice('phone');
    productPrice('case');
    subTotal();
    taxes();
    grandTotal()
}
// Product pricing function
function productPrice(productName) {
    let productCount = document.getElementById(productName + 'Count');
    let productPrice = 0;
    if(productName == 'phone'){
        productPrice = productCount.value * 1000;
    }
    if(productName == 'case'){
        productPrice = productCount.value * 50;
    }
    document.getElementById(productName + 'Price').innerText = productPrice;
}
// Subtotal calculate function
function subTotal() {
    let phoneCount = document.getElementById('phoneCount').value;
    let caseCount = document.getElementById('caseCount').value;
    let subTotal = document.getElementById('subTotal').innerText = phoneCount * 1000 + caseCount * 50;
    return subTotal;
}
// Taxes calculation function
function taxes() {
    let tax = document.getElementById('tax').innerText = Math.round(subTotal() * .1);
    return tax;
}
// Total price calculation function
function grandTotal() {
    document.getElementById('total').innerText = subTotal() + taxes();
}