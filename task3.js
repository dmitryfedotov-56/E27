let input = prompt('введите строку');
let size = input.length;
let symbol;
let output = '';
for(let i = 0; i < size; i++)
{
  symbol = input.slice(size-1-i, size -i);
  output += symbol;
}
alert('перевернутое ' + output);
