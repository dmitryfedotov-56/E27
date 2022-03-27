if(a.length == 0)
{
  console.log('массив пустой');
}
else
{
  let allthesame = true;
  for(let i=0; i < a.length; i++)
  {
    if(a[0] !== a[i])allthesame = false;
  };
  if(allthesame)
    console.log('все одинаковые');
  else
   console.log('есть разные элементы'); 
};

