function validaUsuario() {

 

  const nome = document.getElementById('nome').value.trim();
  const ddn = document.getElementById('ddn').value.trim();
  const sexo = document.getElementById('sexo').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const nt = document.getElementById('nt').value.trim();
  const email = document.getElementById('email').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const ec = document.getElementById('ec').value.trim();
  const nacio = document.getElementById('nacio').value.trim();
  const prof = document.getElementById('prof').value.trim();
  const ndf = document.getElementById('ndf').value.trim();
  const ndp = document.getElementById('ndp').value.trim();
  const escola = document.getElementById('escola').value.trim();
  const eot = document.getElementById('eot').value.trim();
  const como = document.getElementById('como').value.trim();
  

  
  if (!nome) {
      alert('Por favor, preencha o nome');
      return;
  } else {
      console.log(nome);
  }

  if (!ddn) {
    alert('Por favor, preencha a data de nascimento');
    return;
} else {
    console.log(ddn);
}

if (!sexo) {
  alert('Por favor, preencha o sexo');
  return;
} else {
  console.log(sexo);
}

if (!endereco) { 
  alert('Por favor, preencha o endereco');
  return;
} else {
  console.log(endereco);
}

if (!nt || nt.length !== 11 || isNaN(nt)) {
  alert('Por favor, preencha um número de telefone válido');
  return;
} else {
  console.log(nt);
}

if (!email) {
  alert('Por favor, preencha o email');
  return;
} else {
  console.log(email);
}

if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
  alert('Por favor, insira um CPF válido com 11 digitos');
  return;
} else {
  console.log(cpf);
}

if (!ec) {
  alert('Por favor, preencha o seu estado civil');
  return;
} else {
  console.log(ec);
}

if (!nacio) {
  alert('Por favor, preencha a sua nacionalidade');
  return;
} else {
  console.log(nacio);
}

if (!prof) {
  alert('Por favor, preencha a sua profissão');
  return;
} else {
  console.log(prof);
}

if (!ndf) {
  alert('Por favor, preencha o nome da sua mãe');
  return;
} else {
  console.log(ndf);
}

if (!ndp) {
  alert('Por favor, preencha o nome do seu pai');
  return;
} else {
  console.log(ndp);
}

if (!escola) {
  alert('Por favor, preencha a sua escolaridade');
  return;
} else {
  console.log(nacio);
}

if (!eot) {
  alert('Por favor, preencha o campo Empresa/Instituição onde trabalha ou estuda:');
  return;
} else {
  console.log(eot);
}

function pegarValor() {

  var radios = document.getElementsByName('op2');
  
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      alert('Valor selecionado: ' + radios[i].value);
      break;
    }
  }
}

alert('Formulario enviado com sucesso');

}