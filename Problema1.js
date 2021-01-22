var input = ['aba', 'aa', 'ad', 'vcd', 'aba'];
var c = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i].length > c) {
    c = input[i].length;
  }
}
for (let i = 0; i < input.length; i++) {
  if (input[i].length === c) {
    console.log(input[i]);
  }
}