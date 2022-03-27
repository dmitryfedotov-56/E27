let x = false;
if(typeof(x) == 'string')
  console.log('это строка');
else
  if(typeof(x) == 'number')
    console.log('это число');
  else
    if(typeof(x) == 'boolean')
      console.log('это булевское значение');
    else
      console.log('тип не определен');
