iemail = document.getElementById('email');
isenha = document.getElementById('senha');
entrar = document.getElementById('entrar');
erro = document.getElementById('erro');


entrar.addeventlistene





entrar.addEventListener('click', () =>{
    email = iemail.value
    senha = isenha.value

    if (email == '' && senha == ''){
window.location.href = "home.html"
    }else{
// iemail.style.backgroundColor = '#360505'
erro.textContent = "E-mail ou senha estão incorretos"
iemail.value = ''
isenha.value = ''
    }
})