var abririmg = document.getElementById('abrir-img'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btncerrarpopup = document.getElementById('btn-cerrar');

abririmg.addEventListener('click', function(){
    overlay.classList.add('activo');
    popup.classList.add('activo');
});

btncerrarpopup.addEventListener('click', function(){
    overlay.classList.remove('activo');
    popup.classList.remove('activo');
});
