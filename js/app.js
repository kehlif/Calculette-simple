/*jshint esversion: 6*/

function calc() {
  var n1 = document.getElementById('n1').value;
  var n2 = document.getElementById('n2').value;
  var oper = document.getElementById('operateurs').value;

  if(n1 === "" && n2 === ""){
    var contain = document.getElementById('container');
    contain.innerHTML = "Aucune valeur saisie!";
    contain.style.color = "yellow";
    document.getElementById('result').value = " ";
    document.getElementById('n1').focus();
  }

  if (isNaN(n1) || isNaN(n2)) {
    alert("ceci n'est pas un nombre");
    document.getElementById('result').value = " ";
    document.getElementById('n1').focus();
    document.getElementById('n2').focus();
  }

  if(oper === ""){
    document.getElementById('result').value = "";
  }

  if (oper === "+") {
    if(n1 != "" && n2 != ""){
    document.getElementById('result').value = parseFloat(n1) + parseFloat(n2);
  }else{
    document.getElementById('n1').focus();
    alert("erreur de saisie");
  }
}

  if (oper === "-") {
    document.getElementById('result').value = parseFloat(n1) - parseFloat(n2);
  }
  if (oper === "*") {
    document.getElementById('result').value = parseFloat(n1) * parseFloat(n2);
  }

  if (oper === "/") {
    if (n2 == 0) {
      alert("Division impossible!");
      document.getElementById('result').value = "";
      document.getElementById('n2').focus();
    } else {
      document.getElementById('result').value = n1 / n2;
    }
  }
}

window.onload = function() {
  document.getElementById('equal').onclick = calc;
  n1.value = "";
  n2.value = "";
  document.getElementById('result').value = "";
};
