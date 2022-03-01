// Write your solution in this file!
var customerName = "bob";
var bestCustomer;

function upperCaseCustomerName(){
 customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    globalThis.bestCustomer = "not bob";
}

function overwriteBestCustomer(lala){
bestCustomer = lala
}

const leastFavoriteCustomer = "Michelle" 
function changeLeastFavoriteCustomer(){
leastFavoriteCustomer = "Tom"
}