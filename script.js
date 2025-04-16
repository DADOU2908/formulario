const form = document.getElementById('formum');

   form.addEventListener('submit', function(evento) {
     evento.preventDefault(); // Impede que a página recarregue

     // Pega o que a pessoa digitou
     const nome = document.getElementById('nome').value;
     const email = document.getElementById('email').value;

     // Mostra no console (o "bastidor" do navegador)
     console.log('Nome digitado:', nome);
     console.log('Email digitado:', email);
   });