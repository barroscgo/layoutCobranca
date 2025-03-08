document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();  

    const alertaSucesso = document.getElementById('alertaSucesso');
    alertaSucesso.classList.remove('d-none'); // Remove a classe "d-none" para mostrar o alerta

    //Esconde o alerta após 5 segundos
    setTimeout(function() {
        alertaSucesso.classList.add('d-none');
    }, 5000);
    
    document.getElementById('formContato').reset();
});