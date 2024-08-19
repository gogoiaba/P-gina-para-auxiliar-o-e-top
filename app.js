const meuInput = document.querySelector('.input__input');
meuInput.addEventListener('focus', function() {
    this.placeholder = '';
});
meuInput.addEventListener('blur', function() {
    this.placeholder = 'Digite a última palavra dita';
});