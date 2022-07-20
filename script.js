let i = prompt("Informe o número: ");
let n1 = 0,
  n2 = 1,
  n3 = 0;
while (i > n3) {
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}
if (i == 0) {
  alert("O numero 0 esta na sequência de fibonacci.");
} else if (i == n3) {
  alert("O número " + i + " esta na sequência de fibonacci.");
} else {
  alert("Este número não faz parte da sequência de fibonacci.");
}
