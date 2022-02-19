function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText =  inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;

}
function getInnerTextvalue(fieldId){
    const fieldtag = document.getElementById(fieldId);
    const fieldValueInText = fieldtag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
function updateTotal(fieldId, amount){
//    const totalTag = document.getElementById(fieldId); 
//    const previousTotalText = totalTag.innerText;
//    const previousTotal = parseFloat(previousTotalText);
   const previousTotal = getInnerTextvalue(fieldId);
   const newTotal = previousTotal + amount;
   document.getElementById(fieldId).innerText = newTotal;
}
function balanceTotal (amount , isAdding){
    // const balanceTag = document.getElementById('balance-total');
    // const balanceTagText = balanceTag.innerText;
    // const previousBalanceTag = parseFloat(balanceTagText)
       const previousBalanceTag = getInnerTextvalue('balance-total')
    let balanceTotalTag;
    if(isAdding == true){
        balanceTotalTag = previousBalanceTag + amount;
    }
    else{
      balanceTotalTag = previousBalanceTag - amount;
    }
    document.getElementById('balance-total').innerText = balanceTotalTag;
}


document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
    if( amount > 0){
        updateTotal('deposit-total',amount)
        balanceTotal(amount , true)
    }
});
//   handle withdraw 
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextvalue('balance-total')
    if( amount > 0 && amount <= balance ){
        updateTotal('withdraw-total', amount)
    balanceTotal(amount , false)
    }
})

