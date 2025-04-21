function validaUsuario(event) {
  event.preventDefault(); // impede o recarregamento da página
  const nome = document.getElementById('nome').value.trim();
  const ddn = document.getElementById('ddn').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const nt = document.getElementById('nt').value.trim();
  const email = document.getElementById('email').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const nacio = document.getElementById('nacio').value.trim();
  const prof = document.getElementById('prof').value.trim();
  const ndf = document.getElementById('ndf').value.trim();
  const ndp = document.getElementById('ndp').value.trim();
  const escola = document.getElementById('escola').value.trim();
  const eot = document.getElementById('eot').value.trim();

  const sexoSelecionado = document.querySelector('input[name="op"]:checked');
  const sexo = sexoSelecionado ? sexoSelecionado.value : '';

  const estadoCivilSelecionado = document.querySelector('input[name="ec"]:checked');
  const estadoCivil = estadoCivilSelecionado ? estadoCivilSelecionado.value : '';

  const comoSelecionado = document.querySelector('input[name="op2"]:checked');
  const como = comoSelecionado ? comoSelecionado.value : '';

  if (!nome) return alert('Por favor, preencha o nome');
  if (!ddn) return alert('Por favor, preencha a data de nascimento');
  if (!sexo) return alert('Por favor, selecione o sexo');
  if (!endereco) return alert('Por favor, preencha o endereço');
  if (!nt || nt.length !== 11 || isNaN(nt)) return alert('Telefone inválido (precisa ter 11 dígitos)');
  if (!email) return alert('Por favor, preencha o e-mail');
  if (!cpf || cpf.length !== 11 || isNaN(cpf)) return alert('CPF inválido (precisa ter 11 dígitos)');
  if (!estadoCivil) return alert('Por favor, selecione o estado civil');
  if (!nacio) return alert('Por favor, preencha a nacionalidade');
  if (!prof) return alert('Por favor, preencha a profissão');
  if (!ndf) return alert('Por favor, preencha o nome da mãe');
  if (!ndp) return alert('Por favor, preencha o nome do pai');
  if (!escola) return alert('Por favor, preencha a escolaridade');
  if (!eot) return alert('Por favor, preencha a empresa/instituição');
  if (!como) return alert('Por favor, selecione como você nos conheceu');



  console.log({
    nome,
    ddn,
    sexo,
    endereco,
    nt,
    email,
    cpf,
    estadoCivil,
    nacio,
    prof,
    ndf,
    ndp,
    escola,
    eot,
    como
  });

}

function validaInicial(event) {
  event.preventDefault();
  const inikSelecionado = document.querySelector('input[name="inik"]:checked');
  const inik = inikSelecionado ? inikSelecionado.value : '';

  const inijSelecionado = document.querySelector('input[name="inij"]:checked');
  const inij = inijSelecionado ? inijSelecionado.value : '';
  
  const inihSelecionado = document.querySelector('input[name="inih"]:checked');
  const inih = inihSelecionado ? inihSelecionado.value : '';

  const inisiSelecionado = document.querySelector('input[name="inisi"]:checked');
  const inisi = inisiSelecionado ? inisiSelecionado.value : '';

  const iniuSelecionado = document.querySelector('input[name="iniu"]:checked');
  const iniu = iniuSelecionado ? iniuSelecionado.value : '';

  const inikaSelecionado = document.querySelector('input[name="inika"]:checked');
  const inika = inikaSelecionado ? inikaSelecionado.value : '';

  const iniaSelecionado = document.querySelector('input[name="inia"]:checked');
  const inia = iniaSelecionado ? iniaSelecionado.value : '';

  const inigSelecionado = document.querySelector('input[name="inig"]:checked');
  const inig = inigSelecionado ? inigSelecionado.value : '';

  const inipSelecionado = document.querySelector('input[name="inip"]:checked');
  const inip = inipSelecionado ? inipSelecionado.value : '';

  console.log({
    inik,
    inij,
    inih,
    inisi,
    iniu,
    inika,
    inia,
    inig,
    inip
  });

}

function validaRespostas(event){
  event.preventDefault();
  const fav1 = document.getElementById('fav1').value.trim();
  const fav2 = document.getElementById('fav2').value.trim();
  const fav3 = document.getElementById('fav3').value.trim();
  const fav4 = document.getElementById('fav4').value.trim();
  const fav5 = document.getElementById('fav5').value.trim();
  const fav6 = document.getElementById('fav6').value.trim();
  const fav7 = document.getElementById('fav7').value.trim();
  const fav8 = document.getElementById('fav8').value.trim();
  const fav9 = document.getElementById('fav9').value.trim();
  const fav10 = document.getElementById('fav10').value.trim();
  const fav11 = document.getElementById('fav11').value.trim();
  const fav12 = document.getElementById('fav12').value.trim();
  const fav15 = document.getElementById('fav15').value.trim();
  const fav16 = document.getElementById('fav16').value.trim();
  const fav17 = document.getElementById('fav17').value.trim();
  const fav18 = document.getElementById('fav18').value.trim();
  const fav19 = document.getElementById('fav19').value.trim();
  const fav20 = document.getElementById('fav20').value.trim();
  const fav21 = document.getElementById('fav21').value.trim();
  const fav22 = document.getElementById('fav22').value.trim();
  const fav23 = document.getElementById('fav23').value.trim();
  const fav24 = document.getElementById('fav24').value.trim();
  const fav25 = document.getElementById('fav25').value.trim();

  const fav13Selecionado = document.querySelector('input[name="espok"]:checked');
  const fav13 = fav13Selecionado ? fav13Selecionado.value : '';

  const fav14Selecionado = document.querySelector('input[name="escha"]:checked');
  const fav14 = fav14Selecionado ? fav14Selecionado.value : '';

  console.log({
   fav1,
   fav2,
   fav3,
   fav4,
   fav5,
   fav6,
   fav7,
   fav8,
   fav9,
   fav10,
   fav11,
   fav12,
   fav13,
   fav14,
   fav15,
   fav16,
   fav17,
   fav18,
   fav19,
   fav20,
   fav21,
   fav22,
   fav23,
   fav24,
   fav25
  });

}