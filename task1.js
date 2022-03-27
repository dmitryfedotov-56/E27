let input = prompt('введите число');
let number = +input;
if(isNaN(number))  
{ alert('это не число'); }
else 
  if(number % 2 == 0)
    alert('четное число ' + number);
  else
     alert('нечетное число ' + number);   
