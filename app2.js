document.getElementById('loan-form').addEventListener('submit',caluchate);
function caluchate(e){
const amount=document.getElementById('loan-amount')
const interest=document.getElementById('interest')
const years=document.getElementById('years')
const monthlyPayment=document.getElementById('monthly-payment')
const totalamount=document.getElementById('total-amount')
const totalInterest=document.getElementById('total_Interest')
const principal=parseFloat(amount.value);
const calucatedinterest=parseFloat(interest.value)/100/12;
const calucatedpayments=parseFloat(years.value)*12;

const x=Math.pow(1+calucatedinterest,calucatedpayments);
const monthly=(principal*x*calucatedinterest)/(x-1);

if(isFinite(monthly)){
    monthlyPayment.value=monthly.toFixed(2);
    totalamount.value=(monthly*calucatedpayments).toFixed(2);
    totalInterest.value=(monthly*calucatedpayments-principal).toFixed(2);
    document.getElementById('results').style.display="block";
}

e.preventDefault();
                   
}