function updateCaseNumber(isIncrease){
    const caseNumberField =  document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previouscaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previouscaseNumber + 1;
    }
    else{
        newCaseNumber = previouscaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;  
}
function updateCaseTotalPrice(newCaseNumber){
   
    const caseTotalPrice = newCaseNumber * 59; 
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice; 
}

    

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

    // calculation total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    
})
let sum = 0;
for(let i= 0; i<= 100; i++){
    sum = sum+ i;
}