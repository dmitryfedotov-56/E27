let a = [ 0, 1, 2, 3 ];
let odd = 0;
let even = 0;
let zeros = 0;

for(let i = 0; i < a.length; i++)
{
  let x = a[i];
  if(typeof(x) == 'number')
   {
     if(!isNaN(x))
     {
       if(x === 0)
         zeros++;
       else{
         if(x % 2 !== 0)odd++;
         if(x % 2 === 0)even++;  
       };
     };
   };
};
console.log('нулей    ' + zeros);
console.log('четных   ' + even);
console.log('нечетных ' + odd);
