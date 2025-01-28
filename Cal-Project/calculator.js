let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value){

 if (value !== '=' && value !== 'cleared'){
    calculation += `${value}`;
     localStorage.setItem('calculation',calculation);
     document.querySelector('.js-calculation').innerHTML = calculation;
     console.log(calculation);
 } else if(value === 'cleared'){
     calculation = '';
     console.log(`${value}`);
     document.querySelector('.js-calculation').innerHTML = '0';
 }else if (value === '='){
   if(calculation === ''){
   localStorage.setItem('calculation',calculation);
   document.querySelector('.js-calculation').innerHTML = '0';
   }else {
     calculation = eval(calculation);
     document.querySelector('.js-calculation').innerHTML = calculation.toFixed(2);
     console.log(calculation)
   }
 }else{
     calculation = eval(calculation);
     document.querySelector('.js-calculation').innerHTML = calculation;
     console.log(calculation)
 }

 document.querySelector('.js-calculation').classList.add('style');


}
